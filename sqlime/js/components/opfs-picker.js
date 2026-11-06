import { dirtree } from "../opfs.js";

class OpfsPicker extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.fullTree = {};
        this.selectedPath = null;
        this.pathParts = []
        this.history = [];
        this.historyIndex = -1;
    }

    connectedCallback() {
        this.render();
        this.loadTree();
    }

    /* -------------------------------------------------------------
     * Basic helpers
     * ------------------------------------------------------------- */

    /**
     * - null => /
     * - abc => /abc
     * - abc/def/ => /abc/def 
     * - /abc/hjk => /abc/hjk
     * @param {string} path 
     * @returns 
     */
    normalize(path) {
        if (!path) return "/";
        if (!path.startsWith("/")) path = "/" + path;
        if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
        return path;
    }

    /**
     * - / => null
     * - /abc => /
     * - /abc/efg/hjk => /abc/efg
     * @param {string} path 
     * @returns 
     */
    parentOf(path) {
        path = this.normalize(path);
        if (path === "/") return null;
        const idx = path.lastIndexOf("/");
        if (idx === 0) return "/";
        return path.substring(0, idx);
    }

    /**
     * Return node from tree represeting  'path'
     * e.g. 
     *  - /
     *  |--- abc/
     *  |------- def/
     *  |--- xyz/
     *  |--- ijk/
     *  |------- rst/
     * 
     * node for abc/ => {children = [def], name = /abc}
     * node for /    => fullTree
     * node for /xyz => {children = [], name = /xyz}
     * @param {string} path 
     * @returns 
     */
    findNode(path) {
        path = this.normalize(path);
        if (!this.fullTree) return null;
        if (path === "/") return this.fullTree;

        const parts = path.split("/").filter(Boolean);
        let cur = this.fullTree;
        for (const p of parts) {
            if (!cur.children) return null;
            cur = cur.children.find(c => c.name === p);
            if (!cur) return null;
        }
        return cur;
    }

    /* -------------------------------------------------------------
     * History
     * ------------------------------------------------------------- */

    pushHistory(path) {
        if (this.historyIndex < this.history.length - 1) {
            this.history = this.history.slice(0, this.historyIndex + 1);
        }
        this.history.push(path);
        this.historyIndex = this.history.length - 1;
    }

    back() {
        if (this.historyIndex <= 0) return;
        this.historyIndex--;
        const prev = this.history[this.historyIndex];
        this.jumpToPath(prev, { pushHistory: false });
    }

    /* -------------------------------------------------------------
     * Load root tree
     * ------------------------------------------------------------- */

    async loadTree() {
        this.fullTree = await dirtree("/");
        this.renderColumn("col1", this.fullTree.children);
        this.updateBreadcrumb("/");
    }

    /* -------------------------------------------------------------
     * Column Rendering
     * ------------------------------------------------------------- */

    renderColumn(colId, items = []) {
        const col = this.shadowRoot.getElementById(colId);
        col.innerHTML = "";

        items.forEach(item => {
            const row = document.createElement("div");
            row.className = "row " + (item.type === "directory" ? "dir" : "file");
            row.textContent = item.name;
            row.dataset.path = item.path;

            // SINGLE CLICK: highlight only
            row.addEventListener("click", () => {
                [...col.children].forEach(r => r.classList.remove("selected"));
                row.classList.add("selected");
                this.selectedPath = item.path;
            });

            // DOUBLE CLICK: directory navigation
            row.addEventListener("dblclick", () => {
                const parentCol = row.parentElement.id;
                this.handleDoubleClickItem(parentCol, item);
            });

            col.appendChild(row);
        });
    }

    highlightPath(path) {
        const cols = ["col1", "col2", "col3"];
        cols.forEach(id => {
            const col = this.shadowRoot.getElementById(id);
            [...col.children].forEach(r =>
                r.classList.toggle("selected", r.dataset.path === path)
            );
        });
    }

    /* -------------------------------------------------------------
     * Breadcrumb (Finder style, Option C, double click)
     * ------------------------------------------------------------- */

    updateBreadcrumb(path) {
        path = this.normalize(path);
        const bar = this.shadowRoot.getElementById("breadcrumb");
        bar.innerHTML = "";

        const parts = path.split("/").filter(Boolean);

        // If root
        if (parts.length === 0) {
            const rootBtn = this.makeBreadcrumbSegment("/", "/");
            bar.appendChild(rootBtn);
            return;
        }

        // Build breadcrumb segments
        let current = "";
        parts.forEach((p, index) => {
            current += "/" + p;
            const segment = this.makeBreadcrumbSegment(p, current);
            bar.appendChild(segment);

            // Arrow › except last
            if (index < parts.length - 1) {
                const sep = document.createElement("span");
                sep.textContent = " › ";
                sep.className = "breadcrumb-sep";
                bar.appendChild(sep);
            }
        });
    }

    makeBreadcrumbSegment(label, path) {
        const btn = document.createElement("span");
        btn.className = "breadcrumb-segment";
        btn.textContent = label;

        // highlight current
        if (this.normalize(path) === this.normalize(this.selectedPath)) {
            btn.classList.add("active-segment");
        }

        // DOUBLE CLICK to navigate
        btn.addEventListener("dblclick", () => {
            this.navigateFromBreadcrumb(path);
        });

        return btn;
    }

    navigateFromBreadcrumb(path) {
        path = this.normalize(path);
        
        // RULE:
        // col1 = parent of path
        // col2 = path
        // col3 = children of path

        const parent = this.parentOf(path) || "/";
        const grandparent = this.parentOf(parent);
        
        const node = this.findNode(path);
        const parentNode = this.findNode(parent);
        const grandparentNode = this.findNode(grandparent)

        if (parent == "/") {
          this.renderColumn("col1", parentNode?.children || []);
          this.renderColumn("col2", node?.children || []);  
          this.renderColumn("col3", []);  
        }
        else if (node) {
          this.renderColumn("col1", grandparentNode.children || []);
          this.renderColumn("col2", parentNode.children || []);
          this.renderColumn("col3", node.children || []);
        } else {
            this.renderColumn("col3", []);
        }

        setTimeout(() => this.highlightPath(path), 0);

        this.selectedPath = path;
        this.pathParts = this.selectedPath.split("/");
        this.updateBreadcrumb(path);
        this.pushHistory(path);
    }

    /* -------------------------------------------------------------
     * Directory double-click logic (Finder sliding)
     * ------------------------------------------------------------- */

    handleDoubleClickItem(colId, item) {
        const path = this.normalize(item.path);

        if (item.type === "file") {
            this.dispatchEvent(new CustomEvent("open-file", {
                detail: { fullpath: path }
            }));
            return;
        }

        const node = this.findNode(path);

        if (!node) return;

        if (colId === "col1") {
          this.slideRight(path)
        } else if (colId === "col2") {
            this.renderColumn("col3", node.children || []);
        } else if (colId === "col3") {
            this.slideLeft(path);
        }

        setTimeout(() => this.highlightPath(path), 0);

        this.selectedPath = path;
        this.updateBreadcrumb(path);
        this.pushHistory(path);
    }

    slideLeft(path) {
      path = this.normalize(path)

      const parent = this.parentOf(path) || "/";
      const grandparent = this.parentOf(parent) || "/";

      const node = this.findNode(path);
      const parentNode = this.findNode(parent);
      const grandparentNode = this.findNode(grandparent);

      this.renderColumn("col1", grandparentNode.children || []);
      this.renderColumn("col2", parentNode.children || []);  
      this.renderColumn("col3", node.children || []);  


    }

    slideRight(path) {
      path = this.normalize(path)

      const parent = this.parentOf(path) || "/";
      const grandparent = this.parentOf(parent) || "/";
      
      const node = this.findNode(path);
      const parentNode = this.findNode(parent);
      const grandparentNode = this.findNode(grandparent)

      if (parent == "/") {
        this.renderColumn("col1", parentNode?.children || []);
        this.renderColumn("col2", node.children || []);  
        this.renderColumn("col3", []);  
      }
      else {
        this.renderColumn("col1", grandparentNode.children || []);
        this.renderColumn("col2", parentNode.children || []);
        this.renderColumn("col3", node?.children || []);
      }
    }

    /* -------------------------------------------------------------
     * Jump-to-path (used by back, up, and input)
     * ------------------------------------------------------------- */

    jumpToPath(full, { pushHistory = true } = {}) {
        full = this.normalize(full);

        const parts = full.split("/").filter(Boolean);
        const visible = parts.length <= 3 ? parts : parts.slice(-3);

        let parentPath = "/";
        if (parts.length > 3) {
            const parentParts = parts.slice(0, parts.length - visible.length);
            parentPath = "/" + parentParts.join("/");
            if (parentPath === "") parentPath = "/";
        }

        const parentNode = this.findNode(parentPath);
        this.renderColumn("col1", parentNode?.children || []);

        if (visible.length >= 2) {
            const p2 = "/" + visible.slice(0, 2).join("/");
            const n2 = this.findNode(p2);
            this.renderColumn("col2", n2?.children || []);
        } else {
            this.renderColumn("col2", []);
        }

        if (visible.length >= 3) {
            const p3 = "/" + visible.slice(0, 3).join("/");
            const n3 = this.findNode(p3);
            this.renderColumn("col3", n3?.children || []);
        } else {
            this.renderColumn("col3", []);
        }

        setTimeout(() => this.highlightPath(full), 0);

        this.selectedPath = full;
        this.updateBreadcrumb(full);

        if (pushHistory) this.pushHistory(full);
    }

    /* -------------------------------------------------------------
     * UI (with breadcrumb)
     * ------------------------------------------------------------- */

    render() {
        this.shadowRoot.innerHTML = `
        <style>
        :host {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.4);
            display:flex;
            align-items:center;
            justify-content:center;
            z-index:9999;
        }
        .window {
            background:white;
            width:780px;
            height:400px;
            padding:10px;
            border-radius:8px;
            box-shadow:0 4px 20px rgba(0,0,0,0.3);
            display:flex;
            flex-direction:column;
            gap:10px;
        }
        #breadcrumb {
            font-size:14px;
            padding:4px 6px;
            white-space:nowrap;
            overflow-x:auto;
        }
        .breadcrumb-segment {
            cursor:pointer;
            padding:2px 4px;
            border-radius:4px;
        }
        .breadcrumb-segment:hover {
            background:#eee;
        }
        .active-segment {
            font-weight:600;
            background:#d9e9ff;
        }
        .breadcrumb-sep {
            opacity:0.5;
        }

        .container {
            display:grid;
            grid-template-columns:1fr 1fr 1fr;
            height:260px;
            border:1px solid #aaa;
        }
        .column {
            overflow-y:auto;
            border-right:1px solid #ddd;
            padding:6px;
        }
        .column:last-child { border-right:none; }

        .row {
            padding:6px 8px;
            border-radius:4px;
            cursor:pointer;
            user-select:none;
        }
        .row:hover { background:#f3f3f3; }
        .row.selected { background:#b6d5ff; }
        .dir { font-weight:600; }

        #controls {
            display:flex;
            justify-content:space-between;
            align-items:center;
        }
        #controls-left { display:flex; gap:8px; align-items:center; }
        input { padding:5px; width:400px; }
        button { padding:6px 10px; }
        </style>

        <div class="window">
            <div id="breadcrumb"></div>

            <div class="container">
                <div id="col1" class="column"></div>
                <div id="col2" class="column"></div>
                <div id="col3" class="column"></div>
            </div>

            <div id="controls">
                <div id="controls-left">
                    <button id="backBtn">&ShortLeftArrow;</button>
                    <button id="upBtn">↑ Up</button>
                    <input id="pathInput" placeholder="/vijay/vilas/vishay" />
                </div>

                <div>
                    <button id="closeBtn">Close</button>
                    <button id="openBtn">Open</button>
                </div>
            </div>
        </div>
        `;

        /* Wire controls */
        this.shadowRoot.getElementById("closeBtn").onclick = () => {
            this.setAttribute("style", "display:none");
            this.dispatchEvent(new CustomEvent("close"));
        };

        this.shadowRoot.getElementById("openBtn").onclick = () => {
            if (!this.selectedPath) return;
            
            this.dispatchEvent(new CustomEvent("opfs-file", { detail: { filePath: this.selectedPath }}));
        };

        this.shadowRoot.getElementById("backBtn").onclick = () => this.back();

        this.shadowRoot.getElementById("upBtn").onclick = () => {
            const parent = this.parentOf(this.selectedPath || "/");
            if (parent) this.jumpToPath(parent);
        };

        this.shadowRoot.getElementById("pathInput").addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const v = e.target.value.trim();
                if (v) this.jumpToPath(v);
            }
        });
    }
}

customElements.define("opfs-picker", OpfsPicker);
