export async function dirtree(path = "/") {
    const root = await navigator.storage.getDirectory();

    async function walk(dirHandle, name, currentPath) {
        const node = {
            name,
            type: "directory",
            path: currentPath,
            children: []
        };

        for await (const [childName, childHandle] of dirHandle.entries()) {
            const childpath = currentPath === "/" 
                ? `/${childName}` 
                : `${currentPath}/${childName}`;

            if (childHandle.kind === "file") {
                node.children.push({
                    name: childName,
                    type: "file",
                    path: childpath
                });
            } else {
                const subdir = await walk(childHandle, childName, childpath);
                node.children.push(subdir);
            }
        }

        return node;
    }

    // Normalize and resolve starting directory
    const clean = path === "/" ? [] : path.split("/").filter(Boolean);

    let start = root;
    for (const p of clean) {
        start = await start.getDirectoryHandle(p);
    }

    const dirName = clean.length ? clean[clean.length - 1] : "";
    return walk(start, dirName, path === "/" ? "/" : `/${clean.join("/")}`);
}


export async function listdir(path) {
    const root = await navigator.storage.getDirectory();
    let dir = root;

    // Normalize path
    path = path || "/";
    const clean = path === "/" ? [] : path.split("/").filter(Boolean);

    // Traverse directories
    for (const p of clean) {
        dir = await dir.getDirectoryHandle(p);
    }

    const result = [];
    for await (const [name, handle] of dir.entries()) {
        path = path === "/" ? `/${name}` : `${path}/${name}`;

        result.push({
            name,
            type: handle.kind,  // "file" or "directory"
            path
        });
    }

    // Sort directories first
    result.sort((a, b) => a.type.localeCompare(b.type) || a.name.localeCompare(b.name));

    return result;
}

export async function mkdir(path) {
    const root = await navigator.storage.getDirectory();
    let dir = root;

    // Normalize path
    path = path || "/";
    const clean = path === "/" ? [] : path.split("/").filter(Boolean);

    // Traverse directories
    for (const p of clean) {
        dir = await dir.getDirectoryHandle(p, {create : true});
    }
    return "ok"
}

export async function readFile(path, options = {}) {
    let fileHandle = await getFileHandle(path, options)
    return fileHandle.getFile()
}

export async function writeFile(path, data, options = {}) {
    let fileHandle = await getFileHandle(path, { ...options, create: true });

    const writable = await fileHandle.createWritable(options);

    await writable.write(data);
    await writable.close();

    return "ok";
}

/** Utilites */
async function getDirectoryHandle(path, options) {
    const root = await navigator.storage.getDirectory();
    let dir = root;

    // Normalize path
    path = path || "/";
    const clean = path === "/" ? [] : path.split("/").filter(Boolean);

    // Traverse directories
    for (const p of clean) {
        dir = await dir.getDirectoryHandle(p);
    }

    return dir;
}

async function getFileHandle(path, options) {
    const root = await navigator.storage.getDirectory();
    let dir = root;

    // Normalize path
    path = path || "/";
    const clean = path === "/" ? [] : path.split("/").filter(Boolean);
    console.log("clean : ", clean);
    
    let file;
    // Traverse directories
    for (let i = 0; i < clean.length; i++) {
        let p = clean[i]
        if(i == clean.length - 1) {
            file = await dir.getFileHandle(p, options);
        } else {
            dir = await dir.getDirectoryHandle(p, options);
        }
    }

    return file
}