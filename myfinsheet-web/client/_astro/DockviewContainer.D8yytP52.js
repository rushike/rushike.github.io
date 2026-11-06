import{B as e,F as t,K as n,L as r,R as i,_t as a,c as o,gt as s,j as c,ot as l,s as u,st as d,u as f}from"./client.D5vZcn6q.js";import"./disclose-version.xihTtKlq.js";import{t as p}from"./Configuration.CBe_YNYq.js";import"./legacy.D7aAE8Ku.js";function m(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>`u`)){var r=document.head||document.getElementsByTagName(`head`)[0],i=document.createElement(`style`);i.type=`text/css`,n===`top`&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}m(`.dv-scrollable {
  position: relative;
  overflow: hidden;
}
.dv-scrollable .dv-scrollbar {
  position: absolute;
  border-radius: 2px;
  background-color: transparent;
  /* GPU optimizations */
  will-change: background-color, transform;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  transition-property: background-color;
  transition-timing-function: ease-in-out;
  transition-duration: 1s;
  transition-delay: 0s;
}
.dv-scrollable .dv-scrollbar-horizontal {
  bottom: 0px;
  left: 0px;
  height: 4px;
}
.dv-scrollable .dv-scrollbar-vertical {
  right: 0px;
  top: 0px;
  width: 4px;
}
.dv-scrollable:hover .dv-scrollbar, .dv-scrollable.dv-scrollable-resizing .dv-scrollbar, .dv-scrollable.dv-scrollable-scrolling .dv-scrollbar {
  background-color: var(--dv-scrollbar-background-color, rgba(255, 255, 255, 0.25));
}
.dv-svg {
  display: inline-block;
  fill: currentcolor;
  line-height: 1;
  stroke: currentcolor;
  stroke-width: 0;
}
.dockview-theme-dark {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  --dv-group-view-background-color: #1e1e1e;
  --dv-tabs-and-actions-container-background-color: #252526;
  --dv-activegroup-visiblepanel-tab-background-color: #1e1e1e;
  --dv-activegroup-hiddenpanel-tab-background-color: #2d2d2d;
  --dv-inactivegroup-visiblepanel-tab-background-color: #1e1e1e;
  --dv-inactivegroup-hiddenpanel-tab-background-color: #2d2d2d;
  --dv-tab-divider-color: #1e1e1e;
  --dv-activegroup-visiblepanel-tab-color: white;
  --dv-activegroup-hiddenpanel-tab-color: #969696;
  --dv-inactivegroup-visiblepanel-tab-color: #8f8f8f;
  --dv-inactivegroup-hiddenpanel-tab-color: #626262;
  --dv-separator-border: rgb(68, 68, 68);
  --dv-paneview-header-border-color: rgba(204, 204, 204, 0.2);
}
.dockview-theme-dark .dv-drop-target-container .dv-drop-target-anchor.dv-drop-target-anchor-container-changed {
  opacity: 0;
  transition: none;
}

.dockview-theme-light {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  --dv-group-view-background-color: white;
  --dv-tabs-and-actions-container-background-color: #f3f3f3;
  --dv-activegroup-visiblepanel-tab-background-color: white;
  --dv-activegroup-hiddenpanel-tab-background-color: #ececec;
  --dv-inactivegroup-visiblepanel-tab-background-color: white;
  --dv-inactivegroup-hiddenpanel-tab-background-color: #ececec;
  --dv-tab-divider-color: white;
  --dv-activegroup-visiblepanel-tab-color: rgb(51, 51, 51);
  --dv-activegroup-hiddenpanel-tab-color: rgba(51, 51, 51, 0.7);
  --dv-inactivegroup-visiblepanel-tab-color: rgba(51, 51, 51, 0.7);
  --dv-inactivegroup-hiddenpanel-tab-color: rgba(51, 51, 51, 0.35);
  --dv-separator-border: rgba(128, 128, 128, 0.35);
  --dv-paneview-header-border-color: rgb(51, 51, 51);
  --dv-scrollbar-background-color: rgba(0, 0, 0, 0.25);
}
.dockview-theme-light .dv-drop-target-container .dv-drop-target-anchor.dv-drop-target-anchor-container-changed {
  opacity: 0;
  transition: none;
}

.dockview-theme-vs {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  --dv-group-view-background-color: #1e1e1e;
  --dv-tabs-and-actions-container-background-color: #252526;
  --dv-activegroup-visiblepanel-tab-background-color: #1e1e1e;
  --dv-activegroup-hiddenpanel-tab-background-color: #2d2d2d;
  --dv-inactivegroup-visiblepanel-tab-background-color: #1e1e1e;
  --dv-inactivegroup-hiddenpanel-tab-background-color: #2d2d2d;
  --dv-tab-divider-color: #1e1e1e;
  --dv-activegroup-visiblepanel-tab-color: white;
  --dv-activegroup-hiddenpanel-tab-color: #969696;
  --dv-inactivegroup-visiblepanel-tab-color: #8f8f8f;
  --dv-inactivegroup-hiddenpanel-tab-color: #626262;
  --dv-separator-border: rgb(68, 68, 68);
  --dv-paneview-header-border-color: rgba(204, 204, 204, 0.2);
  --dv-tabs-and-actions-container-background-color: #2d2d30;
  --dv-tabs-and-actions-container-height: 20px;
  --dv-tabs-and-actions-container-font-size: 11px;
  --dv-activegroup-visiblepanel-tab-background-color: #007acc;
  --dv-inactivegroup-visiblepanel-tab-background-color: #3f3f46;
  --dv-activegroup-visiblepanel-tab-color: white;
  --dv-activegroup-hiddenpanel-tab-color: white;
  --dv-inactivegroup-visiblepanel-tab-color: white;
  --dv-inactivegroup-hiddenpanel-tab-color: white;
}
.dockview-theme-vs .dv-drop-target-container .dv-drop-target-anchor.dv-drop-target-anchor-container-changed {
  opacity: 0;
  transition: none;
}
.dockview-theme-vs .dv-groupview.dv-active-group > .dv-tabs-and-actions-container {
  box-sizing: content-box;
  border-bottom: 2px solid var(--dv-activegroup-visiblepanel-tab-background-color);
}
.dockview-theme-vs .dv-groupview.dv-active-group > .dv-tabs-and-actions-container .dv-tab.dv-active-tab {
  border-top: 2px solid var(--dv-activegroup-visiblepanel-tab-background-color);
}
.dockview-theme-vs .dv-groupview.dv-active-group > .dv-tabs-and-actions-container .dv-tab.dv-inactive-tab {
  border-top: 2px solid var(--dv-activegroup-hiddenpanel-tab-background-color);
}
.dockview-theme-vs .dv-groupview.dv-inactive-group > .dv-tabs-and-actions-container {
  box-sizing: content-box;
  border-bottom: 2px solid var(--dv-inactivegroup-visiblepanel-tab-background-color);
}
.dockview-theme-vs .dv-groupview.dv-inactive-group > .dv-tabs-and-actions-container .dv-tab.dv-active-tab {
  border-top: 2px solid var(--dv-inactivegroup-visiblepanel-tab-background-color);
}
.dockview-theme-vs .dv-groupview.dv-inactive-group > .dv-tabs-and-actions-container .dv-tab.dv-inactive-tab {
  border-top: 2px solid var(--dv-inactivegroup-hiddenpanel-tab-background-color);
}

.dockview-theme-abyss {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  --dv-color-abyss-dark: #000c18;
  --dv-color-abyss: #10192c;
  --dv-color-abyss-light: #1c1c2a;
  --dv-color-abyss-lighter: #2b2b4a;
  --dv-color-abyss-accent: rgb(91, 30, 207);
  --dv-color-abyss-primary-text: white;
  --dv-color-abyss-secondary-text: rgb(148, 151, 169);
  --dv-group-view-background-color: var(--dv-color-abyss-dark);
  --dv-tabs-and-actions-container-background-color: var(
      --dv-color-abyss-light
  );
  --dv-activegroup-visiblepanel-tab-background-color: var(
      --dv-color-abyss-dark
  );
  --dv-activegroup-hiddenpanel-tab-background-color: var(--dv-color-abyss);
  --dv-inactivegroup-visiblepanel-tab-background-color: var(
      --dv-color-abyss-dark
  );
  --dv-inactivegroup-hiddenpanel-tab-background-color: var(--dv-color-abyss);
  --dv-tab-divider-color: var(--dv-color-abyss-lighter);
  --dv-activegroup-visiblepanel-tab-color: white;
  --dv-activegroup-hiddenpanel-tab-color: rgba(255, 255, 255, 0.5);
  --dv-inactivegroup-visiblepanel-tab-color: rgba(255, 255, 255, 0.5);
  --dv-inactivegroup-hiddenpanel-tab-color: rgba(255, 255, 255, 0.25);
  --dv-separator-border: var(--dv-color-abyss-lighter);
  --dv-paneview-header-border-color: var(--dv-color-abyss-lighter);
  --dv-paneview-active-outline-color: #596f99;
}
.dockview-theme-abyss .dv-drop-target-container .dv-drop-target-anchor.dv-drop-target-anchor-container-changed {
  opacity: 0;
  transition: none;
}

.dockview-theme-dracula {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  --dv-group-view-background-color: #282a36;
  --dv-tabs-and-actions-container-background-color: #191a21;
  --dv-activegroup-visiblepanel-tab-background-color: #282a36;
  --dv-activegroup-hiddenpanel-tab-background-color: #21222c;
  --dv-inactivegroup-visiblepanel-tab-background-color: #282a36;
  --dv-inactivegroup-hiddenpanel-tab-background-color: #21222c;
  --dv-tab-divider-color: #191a21;
  --dv-activegroup-visiblepanel-tab-color: rgb(248, 248, 242);
  --dv-activegroup-hiddenpanel-tab-color: rgb(98, 114, 164);
  --dv-inactivegroup-visiblepanel-tab-color: rgba(248, 248, 242, 0.5);
  --dv-inactivegroup-hiddenpanel-tab-color: rgba(98, 114, 164, 0.5);
  --dv-separator-border: #bd93f9;
  --dv-paneview-header-border-color: #bd93f9;
  --dv-paneview-active-outline-color: #6272a4;
}
.dockview-theme-dracula .dv-drop-target-container .dv-drop-target-anchor.dv-drop-target-anchor-container-changed {
  opacity: 0;
  transition: none;
}
.dockview-theme-dracula .dv-groupview.dv-active-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-active-tab {
  position: relative;
}
.dockview-theme-dracula .dv-groupview.dv-active-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-active-tab::after {
  position: absolute;
  left: 0px;
  top: 0px;
  content: "";
  width: 100%;
  height: 1px;
  background-color: #94527e;
  z-index: 999;
}
.dockview-theme-dracula .dv-groupview.dv-inactive-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-active-tab {
  position: relative;
}
.dockview-theme-dracula .dv-groupview.dv-inactive-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-active-tab::after {
  position: absolute;
  left: 0px;
  bottom: 0px;
  content: "";
  width: 100%;
  height: 1px;
  background-color: #5e3d5a;
  z-index: 999;
}

.dockview-theme-replit {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  box-sizing: border-box;
  padding: 10px;
  background-color: #ebeced;
  --dv-group-view-background-color: #ebeced;
  --dv-tabs-and-actions-container-background-color: #fcfcfc;
  --dv-activegroup-visiblepanel-tab-background-color: #f0f1f2;
  --dv-activegroup-hiddenpanel-tab-background-color: #fcfcfc;
  --dv-inactivegroup-visiblepanel-tab-background-color: #f0f1f2;
  --dv-inactivegroup-hiddenpanel-tab-background-color: #fcfcfc;
  --dv-tab-divider-color: transparent;
  --dv-activegroup-visiblepanel-tab-color: rgb(51, 51, 51);
  --dv-activegroup-hiddenpanel-tab-color: rgb(51, 51, 51);
  --dv-inactivegroup-visiblepanel-tab-color: rgb(51, 51, 51);
  --dv-inactivegroup-hiddenpanel-tab-color: rgb(51, 51, 51);
  --dv-separator-border: transparent;
  --dv-paneview-header-border-color: rgb(51, 51, 51);
  --dv-sash-color: #cfd1d3;
  --dv-active-sash-color: #babbbb;
}
.dockview-theme-replit .dv-drop-target-container .dv-drop-target-anchor.dv-drop-target-anchor-container-changed {
  opacity: 0;
  transition: none;
}
.dockview-theme-replit .dv-resize-container:has(> .dv-groupview) {
  border-radius: 8px;
}
.dockview-theme-replit .dv-resize-container {
  border-radius: 10px !important;
  border: none;
}
.dockview-theme-replit .dv-groupview {
  overflow: hidden;
  border-radius: 10px;
}
.dockview-theme-replit .dv-groupview .dv-tabs-and-actions-container {
  border-bottom: 1px solid rgba(128, 128, 128, 0.35);
}
.dockview-theme-replit .dv-groupview .dv-tabs-and-actions-container .dv-tab {
  margin: 4px;
  border-radius: 8px;
}
.dockview-theme-replit .dv-groupview .dv-tabs-and-actions-container .dv-tab .dv-svg {
  height: 8px;
  width: 8px;
}
.dockview-theme-replit .dv-groupview .dv-tabs-and-actions-container .dv-tab:hover {
  background-color: #e4e5e6 !important;
}
.dockview-theme-replit .dv-groupview .dv-content-container {
  background-color: #fcfcfc;
}
.dockview-theme-replit .dv-groupview.dv-active-group {
  border: 1px solid rgba(128, 128, 128, 0.35);
}
.dockview-theme-replit .dv-groupview.dv-inactive-group {
  border: 1px solid transparent;
}
.dockview-theme-replit .dv-vertical > .dv-sash-container > .dv-sash {
  background-color: transparent;
}
.dockview-theme-replit .dv-vertical > .dv-sash-container > .dv-sash:not(.disabled)::after {
  content: "";
  height: 4px;
  width: 40px;
  border-radius: 2px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--dv-sash-color);
  position: absolute;
}
.dockview-theme-replit .dv-vertical > .dv-sash-container > .dv-sash:not(.disabled):hover, .dockview-theme-replit .dv-vertical > .dv-sash-container > .dv-sash:not(.disabled):active {
  background-color: transparent;
}
.dockview-theme-replit .dv-vertical > .dv-sash-container > .dv-sash:not(.disabled):hover::after, .dockview-theme-replit .dv-vertical > .dv-sash-container > .dv-sash:not(.disabled):active::after {
  background-color: var(--dv-active-sash-color);
}
.dockview-theme-replit .dv-horizontal > .dv-sash-container > .dv-sash {
  background-color: transparent;
}
.dockview-theme-replit .dv-horizontal > .dv-sash-container > .dv-sash:not(.disabled)::after {
  content: "";
  height: 40px;
  width: 4px;
  border-radius: 2px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--dv-sash-color);
  position: absolute;
}
.dockview-theme-replit .dv-horizontal > .dv-sash-container > .dv-sash:not(.disabled):hover, .dockview-theme-replit .dv-horizontal > .dv-sash-container > .dv-sash:not(.disabled):active {
  background-color: transparent;
}
.dockview-theme-replit .dv-horizontal > .dv-sash-container > .dv-sash:not(.disabled):hover::after, .dockview-theme-replit .dv-horizontal > .dv-sash-container > .dv-sash:not(.disabled):active::after {
  background-color: var(--dv-active-sash-color);
}

.dockview-theme-abyss-spaced {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  --dv-tab-font-size: 12px;
  --dv-border-radius: 20px;
  --dv-tab-margin: 0.5rem 0.25rem;
  --dv-tabs-and-actions-container-height: 44px;
  --dv-border-radius: 20px;
  box-sizing: border-box;
  --dv-color-abyss-dark: rgb(11, 6, 17);
  --dv-color-abyss: #16121f;
  --dv-color-abyss-light: #201d2b;
  --dv-color-abyss-lighter: #2a2837;
  --dv-color-abyss-accent: rgb(91, 30, 207);
  --dv-color-abyss-primary-text: white;
  --dv-color-abyss-secondary-text: rgb(148, 151, 169);
  --dv-drag-over-border: 2px solid var(--dv-color-abyss-accent);
  --dv-drag-over-background-color: "";
  --dv-group-view-background-color: var(--dv-color-abyss-dark);
  --dv-tabs-and-actions-container-background-color: var(--dv-color-abyss);
  --dv-activegroup-visiblepanel-tab-background-color: var(
      --dv-color-abyss-lighter
  );
  --dv-activegroup-hiddenpanel-tab-background-color: var(
      --dv-color-abyss-light
  );
  --dv-inactivegroup-visiblepanel-tab-background-color: var(
      --dv-color-abyss-lighter
  );
  --dv-inactivegroup-hiddenpanel-tab-background-color: var(
      --dv-color-abyss-light
  );
  --dv-tab-divider-color: transparent;
  --dv-activegroup-visiblepanel-tab-color: var(--dv-color-abyss-primary-text);
  --dv-activegroup-hiddenpanel-tab-color: var(
      --dv-color-abyss-secondary-text
  );
  --dv-inactivegroup-visiblepanel-tab-color: var(
      --dv-color-abyss-primary-text
  );
  --dv-inactivegroup-hiddenpanel-tab-color: var(
      --dv-color-abyss-secondary-text
  );
  --dv-separator-border: transparent;
  --dv-paneview-header-border-color: rgb(51, 51, 51);
  --dv-active-sash-color: var(--dv-color-abyss-accent);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.5);
  padding: 10px;
  background-color: var(--dv-color-abyss-dark);
}
.dockview-theme-abyss-spaced .dv-resize-container:has(> .dv-groupview) {
  border-radius: 8px;
}
.dockview-theme-abyss-spaced .dv-sash {
  border-radius: 4px;
}
.dockview-theme-abyss-spaced .dv-drop-target-anchor {
  border-radius: calc(var(--dv-border-radius) / 4);
}
.dockview-theme-abyss-spaced .dv-drop-target-anchor.dv-drop-target-content {
  border-radius: var(--dv-border-radius);
}
.dockview-theme-abyss-spaced .dv-resize-container {
  border-radius: var(--dv-border-radius) !important;
  border: none;
}
.dockview-theme-abyss-spaced .dv-tabs-overflow-container,
.dockview-theme-abyss-spaced .dv-tabs-overflow-dropdown-default {
  border-radius: 8px;
  height: unset !important;
}
.dockview-theme-abyss-spaced .dv-tab {
  border-radius: 8px;
}
.dockview-theme-abyss-spaced .dv-tab .dv-svg {
  height: 8px;
  width: 8px;
}
.dockview-theme-abyss-spaced .dv-groupview {
  border-radius: var(--dv-border-radius);
}
.dockview-theme-abyss-spaced .dv-groupview .dv-tabs-and-actions-container {
  padding: 0px calc(var(--dv-border-radius) / 2);
}
.dockview-theme-abyss-spaced .dv-groupview .dv-content-container {
  background-color: var(--dv-tabs-and-actions-container-background-color);
}
.dockview-theme-abyss-spaced .dv-resize-container .dv-groupview {
  border: 2px solid var(--dv-color-abyss-dark);
}

.dockview-theme-light-spaced {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  --dv-tab-font-size: 12px;
  --dv-border-radius: 20px;
  --dv-tab-margin: 0.5rem 0.25rem;
  --dv-tabs-and-actions-container-height: 44px;
  --dv-border-radius: 20px;
  box-sizing: border-box;
  --dv-drag-over-border: 2px solid rgb(91, 30, 207);
  --dv-drag-over-background-color: "";
  --dv-group-view-background-color: #f6f5f9;
  --dv-tabs-and-actions-container-background-color: white;
  --dv-activegroup-visiblepanel-tab-background-color: #ededf0;
  --dv-activegroup-hiddenpanel-tab-background-color: #f9f9fa;
  --dv-inactivegroup-visiblepanel-tab-background-color: #ededf0;
  --dv-inactivegroup-hiddenpanel-tab-background-color: #f9f9fa;
  --dv-tab-divider-color: transparent;
  --dv-activegroup-visiblepanel-tab-color: rgb(104, 107, 130);
  --dv-activegroup-hiddenpanel-tab-color: rgb(148, 151, 169);
  --dv-inactivegroup-visiblepanel-tab-color: rgb(104, 107, 130);
  --dv-inactivegroup-hiddenpanel-tab-color: rgb(148, 151, 169);
  --dv-separator-border: transparent;
  --dv-paneview-header-border-color: rgb(51, 51, 51);
  --dv-active-sash-color: rgb(91, 30, 207);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.1);
  padding: 10px;
  background-color: #f6f5f9;
  --dv-scrollbar-background-color: rgba(0, 0, 0, 0.25);
}
.dockview-theme-light-spaced .dv-resize-container:has(> .dv-groupview) {
  border-radius: 8px;
}
.dockview-theme-light-spaced .dv-sash {
  border-radius: 4px;
}
.dockview-theme-light-spaced .dv-drop-target-anchor {
  border-radius: calc(var(--dv-border-radius) / 4);
}
.dockview-theme-light-spaced .dv-drop-target-anchor.dv-drop-target-content {
  border-radius: var(--dv-border-radius);
}
.dockview-theme-light-spaced .dv-resize-container {
  border-radius: var(--dv-border-radius) !important;
  border: none;
}
.dockview-theme-light-spaced .dv-tabs-overflow-container,
.dockview-theme-light-spaced .dv-tabs-overflow-dropdown-default {
  border-radius: 8px;
  height: unset !important;
}
.dockview-theme-light-spaced .dv-tab {
  border-radius: 8px;
}
.dockview-theme-light-spaced .dv-tab .dv-svg {
  height: 8px;
  width: 8px;
}
.dockview-theme-light-spaced .dv-groupview {
  border-radius: var(--dv-border-radius);
}
.dockview-theme-light-spaced .dv-groupview .dv-tabs-and-actions-container {
  padding: 0px calc(var(--dv-border-radius) / 2);
}
.dockview-theme-light-spaced .dv-groupview .dv-content-container {
  background-color: var(--dv-tabs-and-actions-container-background-color);
}
.dockview-theme-light-spaced .dv-resize-container .dv-groupview {
  border: 2px solid rgba(255, 255, 255, 0.1);
}
.dv-drop-target-container {
  position: absolute;
  z-index: 9999;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  pointer-events: none;
  overflow: hidden;
  --dv-transition-duration: 300ms;
}
.dv-drop-target-container .dv-drop-target-anchor {
  position: relative;
  border: var(--dv-drag-over-border);
  background-color: var(--dv-drag-over-background-color);
  opacity: 1;
  /* GPU optimizations */
  will-change: transform, opacity;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  contain: layout paint;
  transition: opacity var(--dv-transition-duration) ease-in, transform var(--dv-transition-duration) ease-out;
}
.dv-drop-target {
  position: relative;
  --dv-transition-duration: 70ms;
}
.dv-drop-target > .dv-drop-target-dropzone {
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
  z-index: 1000;
  pointer-events: none;
}
.dv-drop-target > .dv-drop-target-dropzone > .dv-drop-target-selection {
  position: relative;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  border: var(--dv-drag-over-border);
  background-color: var(--dv-drag-over-background-color);
  transition: top var(--dv-transition-duration) ease-out, left var(--dv-transition-duration) ease-out, width var(--dv-transition-duration) ease-out, height var(--dv-transition-duration) ease-out, opacity var(--dv-transition-duration) ease-out;
  will-change: transform;
  pointer-events: none;
}
.dv-drop-target > .dv-drop-target-dropzone > .dv-drop-target-selection.dv-drop-target-top.dv-drop-target-small-vertical {
  border-top: 1px solid var(--dv-drag-over-border-color);
}
.dv-drop-target > .dv-drop-target-dropzone > .dv-drop-target-selection.dv-drop-target-bottom.dv-drop-target-small-vertical {
  border-bottom: 1px solid var(--dv-drag-over-border-color);
}
.dv-drop-target > .dv-drop-target-dropzone > .dv-drop-target-selection.dv-drop-target-left.dv-drop-target-small-horizontal {
  border-left: 1px solid var(--dv-drag-over-border-color);
}
.dv-drop-target > .dv-drop-target-dropzone > .dv-drop-target-selection.dv-drop-target-right.dv-drop-target-small-horizontal {
  border-right: 1px solid var(--dv-drag-over-border-color);
}
.dv-dockview {
  position: relative;
  background-color: var(--dv-group-view-background-color);
  contain: layout;
}
.dv-dockview .dv-watermark-container {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  z-index: 1;
}
.dv-dockview .dv-overlay-render-container {
  position: relative;
}

.dv-groupview.dv-active-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-active-tab {
  background-color: var(--dv-activegroup-visiblepanel-tab-background-color);
  color: var(--dv-activegroup-visiblepanel-tab-color);
}
.dv-groupview.dv-active-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-inactive-tab {
  background-color: var(--dv-activegroup-hiddenpanel-tab-background-color);
  color: var(--dv-activegroup-hiddenpanel-tab-color);
}
.dv-groupview.dv-inactive-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-active-tab {
  background-color: var(--dv-inactivegroup-visiblepanel-tab-background-color);
  color: var(--dv-inactivegroup-visiblepanel-tab-color);
}
.dv-groupview.dv-inactive-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-inactive-tab {
  background-color: var(--dv-inactivegroup-hiddenpanel-tab-background-color);
  color: var(--dv-inactivegroup-hiddenpanel-tab-color);
}

/**
 * when a tab is dragged we lose the above stylings because they are conditional on parent elements
 * therefore we also set some stylings for the dragging event
 **/
.dv-tab.dv-tab-dragging {
  background-color: var(--dv-activegroup-visiblepanel-tab-background-color);
  color: var(--dv-activegroup-visiblepanel-tab-color);
}
.dv-groupview {
  display: flex;
  height: 100%;
  background-color: var(--dv-group-view-background-color);
  overflow: hidden;
  flex-direction: column;
}
.dv-groupview:focus {
  outline: none;
}
.dv-groupview > .dv-content-container {
  flex-grow: 1;
  min-height: 0;
  outline: none;
}
.dv-groupview.dv-groupview-header-bottom {
  flex-direction: column-reverse;
}
.dv-groupview.dv-groupview-header-left {
  flex-direction: row;
}
.dv-groupview.dv-groupview-header-right {
  flex-direction: row-reverse;
}
.dv-root-wrapper {
  height: 100%;
  width: 100%;
}
.dv-grid-view,
.dv-branch-node {
  height: 100%;
  width: 100%;
}
.dv-debug .dv-resize-container .dv-resize-handle-top {
  background-color: red;
}
.dv-debug .dv-resize-container .dv-resize-handle-bottom {
  background-color: green;
}
.dv-debug .dv-resize-container .dv-resize-handle-left {
  background-color: yellow;
}
.dv-debug .dv-resize-container .dv-resize-handle-right {
  background-color: blue;
}
.dv-debug .dv-resize-container .dv-resize-handle-topleft,
.dv-debug .dv-resize-container .dv-resize-handle-topright,
.dv-debug .dv-resize-container .dv-resize-handle-bottomleft,
.dv-debug .dv-resize-container .dv-resize-handle-bottomright {
  background-color: cyan;
}

.dv-resize-container {
  --dv-overlay-z-index: var(--dv-overlay-z-index, 999);
  position: absolute;
  z-index: calc(var(--dv-overlay-z-index) - 2);
  border: 1px solid var(--dv-tab-divider-color);
  box-shadow: var(--dv-floating-box-shadow);
  /* GPU optimizations for floating group movement */
  will-change: transform, opacity;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}
.dv-resize-container.dv-hidden {
  display: none;
}
.dv-resize-container.dv-resize-container-dragging {
  opacity: 0.5;
  /* Enhanced GPU acceleration during drag */
  will-change: transform, opacity;
}
.dv-resize-container .dv-resize-handle-top {
  height: 4px;
  width: calc(100% - 8px);
  left: 4px;
  top: -2px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: ns-resize;
}
.dv-resize-container .dv-resize-handle-bottom {
  height: 4px;
  width: calc(100% - 8px);
  left: 4px;
  bottom: -2px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: ns-resize;
}
.dv-resize-container .dv-resize-handle-left {
  height: calc(100% - 8px);
  width: 4px;
  left: -2px;
  top: 4px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: ew-resize;
}
.dv-resize-container .dv-resize-handle-right {
  height: calc(100% - 8px);
  width: 4px;
  right: -2px;
  top: 4px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: ew-resize;
}
.dv-resize-container .dv-resize-handle-topleft {
  height: 4px;
  width: 4px;
  top: -2px;
  left: -2px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: nw-resize;
}
.dv-resize-container .dv-resize-handle-topright {
  height: 4px;
  width: 4px;
  right: -2px;
  top: -2px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: ne-resize;
}
.dv-resize-container .dv-resize-handle-bottomleft {
  height: 4px;
  width: 4px;
  left: -2px;
  bottom: -2px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: sw-resize;
}
.dv-resize-container .dv-resize-handle-bottomright {
  height: 4px;
  width: 4px;
  right: -2px;
  bottom: -2px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: se-resize;
}
.dv-render-overlay {
  --dv-overlay-z-index: var(--dv-overlay-z-index, 999);
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  contain: layout paint;
  isolation: isolate;
  /* GPU optimizations */
  will-change: transform;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}
.dv-render-overlay.dv-render-overlay-float {
  z-index: calc(var(--dv-overlay-z-index) - 1);
}

.dv-debug .dv-render-overlay {
  outline: 1px solid red;
  outline-offset: -1;
}
.dv-pane-container {
  height: 100%;
  width: 100%;
}
.dv-pane-container.dv-animated .dv-view {
  /* GPU optimizations for smooth pane animations */
  will-change: transform;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  transition: transform 0.15s ease-out;
}
.dv-pane-container .dv-view {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0px !important;
}
.dv-pane-container .dv-view:not(:first-child)::before {
  background-color: transparent !important;
}
.dv-pane-container .dv-view:not(:first-child) .dv-pane > .dv-pane-header {
  border-top: 1px solid var(--dv-paneview-header-border-color);
}
.dv-pane-container .dv-view .dv-default-header {
  background-color: var(--dv-group-view-background-color);
  color: var(--dv-activegroup-visiblepanel-tab-color);
  display: flex;
  padding: 0px 8px;
  cursor: pointer;
}
.dv-pane-container .dv-view .dv-default-header .dv-pane-header-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.dv-pane-container .dv-view .dv-default-header > span {
  padding-left: 8px;
  flex-grow: 1;
}
.dv-pane-container:first-of-type > .dv-pane > .dv-pane-header {
  border-top: none !important;
}
.dv-pane-container .dv-pane {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
}
.dv-pane-container .dv-pane .dv-pane-header {
  box-sizing: border-box;
  user-select: none;
  position: relative;
  outline: none;
}
.dv-pane-container .dv-pane .dv-pane-header.dv-pane-draggable {
  cursor: pointer;
}
.dv-pane-container .dv-pane .dv-pane-header:focus:before, .dv-pane-container .dv-pane .dv-pane-header:focus-within:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  content: "";
  pointer-events: none;
  outline: 1px solid;
  outline-width: -1px;
  outline-style: solid;
  outline-offset: -1px;
  outline-color: var(--dv-paneview-active-outline-color);
}
.dv-pane-container .dv-pane .dv-pane-body {
  overflow-y: auto;
  overflow-x: hidden;
  flex-grow: 1;
  position: relative;
  outline: none;
}
.dv-pane-container .dv-pane .dv-pane-body:focus:before, .dv-pane-container .dv-pane .dv-pane-body:focus-within:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  content: "";
  pointer-events: none;
  outline: 1px solid;
  outline-width: -1px;
  outline-style: solid;
  outline-offset: -1px;
  outline-color: var(--dv-paneview-active-outline-color);
}
.dv-debug .dv-split-view-container .dv-sash-container .dv-sash.dv-enabled {
  background-color: black;
}
.dv-debug .dv-split-view-container .dv-sash-container .dv-sash.dv-disabled {
  background-color: orange;
}
.dv-debug .dv-split-view-container .dv-sash-container .dv-sash.dv-maximum {
  background-color: green;
}
.dv-debug .dv-split-view-container .dv-sash-container .dv-sash.dv-minimum {
  background-color: red;
}

.dv-split-view-container {
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
}
.dv-split-view-container.dv-splitview-disabled > .dv-sash-container > .dv-sash {
  pointer-events: none;
}
.dv-split-view-container.dv-animation .dv-view,
.dv-split-view-container.dv-animation .dv-sash {
  /* GPU optimizations for smooth animations */
  will-change: transform;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  transition: transform 0.15s ease-out;
}
.dv-split-view-container.dv-horizontal {
  height: 100%;
}
.dv-split-view-container.dv-horizontal > .dv-sash-container > .dv-sash {
  height: 100%;
  width: 4px;
}
.dv-split-view-container.dv-horizontal > .dv-sash-container > .dv-sash.dv-enabled {
  cursor: ew-resize;
}
.dv-split-view-container.dv-horizontal > .dv-sash-container > .dv-sash.dv-disabled {
  cursor: default;
}
.dv-split-view-container.dv-horizontal > .dv-sash-container > .dv-sash.dv-maximum {
  cursor: w-resize;
}
.dv-split-view-container.dv-horizontal > .dv-sash-container > .dv-sash.dv-minimum {
  cursor: e-resize;
}
.dv-split-view-container.dv-horizontal > .dv-view-container > .dv-view:not(:first-child)::before {
  height: 100%;
  width: 1px;
}
.dv-split-view-container.dv-vertical {
  width: 100%;
}
.dv-split-view-container.dv-vertical > .dv-sash-container > .dv-sash {
  width: 100%;
  height: 4px;
}
.dv-split-view-container.dv-vertical > .dv-sash-container > .dv-sash.dv-enabled {
  cursor: ns-resize;
}
.dv-split-view-container.dv-vertical > .dv-sash-container > .dv-sash.dv-disabled {
  cursor: default;
}
.dv-split-view-container.dv-vertical > .dv-sash-container > .dv-sash.dv-maximum {
  cursor: n-resize;
}
.dv-split-view-container.dv-vertical > .dv-sash-container > .dv-sash.dv-minimum {
  cursor: s-resize;
}
.dv-split-view-container.dv-vertical > .dv-view-container > .dv-view {
  width: 100%;
}
.dv-split-view-container.dv-vertical > .dv-view-container > .dv-view:not(:first-child)::before {
  height: 1px;
  width: 100%;
}
.dv-split-view-container .dv-sash-container {
  height: 100%;
  width: 100%;
  position: absolute;
}
.dv-split-view-container .dv-sash-container .dv-sash {
  position: absolute;
  z-index: 99;
  outline: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  touch-action: none;
  background-color: var(--dv-sash-color, transparent);
}
.dv-split-view-container .dv-sash-container .dv-sash:not(.disabled):active, .dv-split-view-container .dv-sash-container .dv-sash:not(.disabled):hover {
  background-color: var(--dv-active-sash-color, transparent);
  transition-property: background-color;
  transition-timing-function: ease-in-out;
  transition-duration: var(--dv-active-sash-transition-duration, 0.1s);
  transition-delay: var(--dv-active-sash-transition-delay, 0.5s);
}
.dv-split-view-container .dv-view-container {
  position: relative;
  height: 100%;
  width: 100%;
}
.dv-split-view-container .dv-view-container .dv-view {
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
  position: absolute;
}
.dv-split-view-container.dv-separator-border .dv-view:not(:first-child)::before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  pointer-events: none;
  background-color: var(--dv-separator-border);
}
.dv-dragged {
  transform: translate3d(0px, 0px, 0px); /* forces tab to be drawn on a separate layer (see https://github.com/microsoft/vscode/issues/18733) */
}

.dv-tab {
  flex-shrink: 0;
}
.dv-tab:focus-within, .dv-tab:focus {
  position: relative;
}
.dv-tab:focus-within::after, .dv-tab:focus::after {
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  pointer-events: none;
  outline: 1px solid var(--dv-tab-divider-color) !important;
  outline-offset: -1px;
  z-index: 5;
}
.dv-tab.dv-tab-dragging .dv-default-tab-action {
  background-color: var(--dv-activegroup-visiblepanel-tab-color);
}
.dv-tab.dv-active-tab .dv-default-tab .dv-default-tab-action {
  visibility: visible;
}
.dv-tab.dv-inactive-tab .dv-default-tab .dv-default-tab-action {
  visibility: hidden;
}
.dv-tab.dv-inactive-tab .dv-default-tab:hover .dv-default-tab-action {
  visibility: visible;
}
.dv-tab .dv-default-tab {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.dv-tab .dv-default-tab .dv-default-tab-content {
  flex-grow: 1;
  margin-right: 4px;
}
.dv-tab .dv-default-tab .dv-default-tab-action {
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.dv-tab .dv-default-tab .dv-default-tab-action:hover {
  border-radius: 2px;
  background-color: var(--dv-icon-hover-background-color);
}
.dv-tabs-overflow-dropdown-default {
  height: 100%;
  color: var(--dv-activegroup-hiddenpanel-tab-color);
  margin: var(--dv-tab-margin);
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
}
.dv-tabs-overflow-dropdown-default > span {
  padding-left: 0.25rem;
}
.dv-tabs-overflow-dropdown-default > svg {
  transform: rotate(90deg);
}
.dv-tabs-container {
  display: flex;
  height: 100%;
  overflow: auto;
  scrollbar-width: thin;
  /* GPU optimizations for smooth scrolling */
  will-change: scroll-position;
  transform: translate3d(0, 0, 0);
  /* Track */
  /* Handle */
}
.dv-tabs-container.dv-tabs-container-vertical {
  width: 100%;
  height: fit-content;
  max-height: 100%;
  writing-mode: vertical-rl;
}
.dv-tabs-container.dv-horizontal .dv-tab:not(:first-child)::before, .dv-tabs-container.dv-vertical .dv-tab:not(:first-child)::before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  pointer-events: none;
  background-color: var(--dv-tab-divider-color);
}
.dv-tabs-container.dv-horizontal .dv-tab:not(:first-child)::before {
  width: 1px;
  height: 100%;
}
.dv-tabs-container.dv-vertical .dv-tab:not(:first-child)::before {
  width: 100%;
  height: 1px;
}
.dv-tabs-container::-webkit-scrollbar {
  height: 3px;
}
.dv-tabs-container::-webkit-scrollbar-track {
  background: transparent;
}
.dv-tabs-container::-webkit-scrollbar-thumb {
  background: var(--dv-tabs-container-scrollbar-color);
}

.dv-scrollable > .dv-tabs-container {
  overflow: hidden;
}

.dv-tab {
  -webkit-user-drag: element;
  outline: none;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  font-size: var(--dv-tab-font-size);
  margin: var(--dv-tab-margin);
}

.dv-tabs-container-vertical .dv-tab {
  padding: 0.5rem 0.25rem;
}

.dv-tabs-overflow-container {
  flex-direction: column;
  height: unset;
  max-height: min(50vh, 400px);
  overflow-y: auto;
  border: 1px solid var(--dv-tab-divider-color);
  background-color: var(--dv-group-view-background-color);
  /* Scrollbar styling for webkit browsers */
  /* Firefox scrollbar */
  scrollbar-width: thin;
}
.dv-tabs-overflow-container::-webkit-scrollbar {
  width: 6px;
}
.dv-tabs-overflow-container::-webkit-scrollbar-track {
  background: transparent;
}
.dv-tabs-overflow-container::-webkit-scrollbar-thumb {
  background: var(--dv-tabs-container-scrollbar-color);
  border-radius: 3px;
}
.dv-tabs-overflow-container .dv-tab:not(:last-child) {
  border-bottom: 1px solid var(--dv-tab-divider-color);
}
.dv-tabs-overflow-container .dv-active-tab {
  background-color: var(--dv-activegroup-visiblepanel-tab-background-color);
  color: var(--dv-activegroup-visiblepanel-tab-color);
}
.dv-tabs-overflow-container .dv-inactive-tab {
  background-color: var(--dv-activegroup-hiddenpanel-tab-background-color);
  color: var(--dv-activegroup-hiddenpanel-tab-color);
}
.dv-tabs-and-actions-container {
  display: flex;
  background-color: var(--dv-tabs-and-actions-container-background-color);
  flex-shrink: 0;
  box-sizing: border-box;
  height: var(--dv-tabs-and-actions-container-height);
  font-size: var(--dv-tabs-and-actions-container-font-size);
}
.dv-tabs-and-actions-container.dv-single-tab.dv-full-width-single-tab .dv-scrollable {
  flex-grow: 1;
}
.dv-tabs-and-actions-container.dv-single-tab.dv-full-width-single-tab .dv-tabs-container {
  flex-grow: 1;
}
.dv-tabs-and-actions-container.dv-single-tab.dv-full-width-single-tab .dv-tabs-container .dv-tab {
  flex-grow: 1;
  padding: 0px;
}
.dv-tabs-and-actions-container.dv-single-tab.dv-full-width-single-tab .dv-void-container {
  flex-grow: 0;
}
.dv-tabs-and-actions-container .dv-void-container {
  display: flex;
  flex-grow: 1;
}
.dv-tabs-and-actions-container .dv-void-container.dv-draggable {
  cursor: grab;
}
.dv-tabs-and-actions-container .dv-right-actions-container {
  display: flex;
}
.dv-tabs-and-actions-container .dv-right-actions-container.dv-right-actions-container-vertical {
  flex-direction: column;
}
.dv-tabs-and-actions-container.dv-groupview-header-vertical {
  flex-direction: column;
  height: auto;
  width: var(--dv-tabs-and-actions-container-height);
}
.dv-watermark {
  display: flex;
  height: 100%;
}`);var h=class{},g=class extends h{constructor(e,t,n){super(),this.viewId=e,this.groupId=t,this.panelId=n}},_=class e{constructor(){}static getInstance(){return e.INSTANCE}hasData(e){return e&&e===this.proto}clearData(e){this.hasData(e)&&(this.proto=void 0,this.data=void 0)}getData(e){if(this.hasData(e))return this.data}setData(e,t){t&&(this.data=e,this.proto=t)}};_.INSTANCE=new _;function v(){let e=_.getInstance();if(e.hasData(g.prototype))return e.getData(g.prototype)[0]}var y;(function(e){e.any=(...e)=>t=>{let n=e.map(e=>e(t));return{dispose:()=>{n.forEach(e=>{e.dispose()})}}}})(y||={});var b=class{constructor(){this._defaultPrevented=!1}get defaultPrevented(){return this._defaultPrevented}preventDefault(){this._defaultPrevented=!0}},x=class{constructor(){this._isAccepted=!1}get isAccepted(){return this._isAccepted}accept(){this._isAccepted=!0}},S=class{constructor(){this.events=new Map}get size(){return this.events.size}add(e,t){this.events.set(e,t)}delete(e){this.events.delete(e)}clear(){this.events.clear()}},C=class e{static create(){return new e(Error().stack??``)}constructor(e){this.value=e}print(){console.warn(`dockview: stacktrace`,this.value)}},ee=class{constructor(e,t){this.callback=e,this.stacktrace=t}},w=class e{static setLeakageMonitorEnabled(t){t!==e.ENABLE_TRACKING&&e.MEMORY_LEAK_WATCHER.clear(),e.ENABLE_TRACKING=t}get value(){return this._last}constructor(e){this.options=e,this._listeners=[],this._disposed=!1}get event(){return this._event||(this._event=t=>{this.options?.replay&&this._last!==void 0&&t(this._last);let n=new ee(t,e.ENABLE_TRACKING?C.create():void 0);return this._listeners.push(n),{dispose:()=>{let t=this._listeners.indexOf(n);t>-1?this._listeners.splice(t,1):e.ENABLE_TRACKING}}},e.ENABLE_TRACKING&&e.MEMORY_LEAK_WATCHER.add(this._event,C.create())),this._event}fire(e){this.options?.replay&&(this._last=e);for(let t of this._listeners)t.callback(e)}dispose(){this._disposed||(this._disposed=!0,this._listeners.length>0&&(e.ENABLE_TRACKING&&queueMicrotask(()=>{for(let e of this._listeners)console.warn(`dockview: stacktrace`,e.stacktrace?.print())}),this._listeners=[]),e.ENABLE_TRACKING&&this._event&&e.MEMORY_LEAK_WATCHER.delete(this._event))}};w.ENABLE_TRACKING=!1,w.MEMORY_LEAK_WATCHER=new S;function T(e,t,n,r){return e.addEventListener(t,n,r),{dispose:()=>{e.removeEventListener(t,n,r)}}}var te=class{constructor(){this._onFired=new w,this._currentFireCount=0,this._queued=!1,this.onEvent=e=>{let t=this._currentFireCount;return this._onFired.event(()=>{this._currentFireCount>t&&e()})}}fire(){this._currentFireCount++,!this._queued&&(this._queued=!0,queueMicrotask(()=>{this._queued=!1,this._onFired.fire()}))}dispose(){this._onFired.dispose()}},E;(function(e){e.NONE={dispose:()=>{}};function t(e){return{dispose:()=>{e()}}}e.from=t})(E||={});var D=class{get isDisposed(){return this._isDisposed}constructor(...e){this._isDisposed=!1,this._disposables=new Set(e)}addDisposables(...e){e.forEach(e=>this._disposables.add(e))}removeDisposable(e){this._disposables.delete(e)}dispose(){this._isDisposed||(this._isDisposed=!0,this._disposables.forEach(e=>e.dispose()),this._disposables.clear())}},O=class{constructor(){this._disposable=E.NONE}set value(e){this._disposable&&this._disposable.dispose(),this._disposable=e}dispose(){this._disposable&&=(this._disposable.dispose(),E.NONE)}},ne=class extends D{constructor(e){super(),this._onDidChange=new w,this.onDidChange=this._onDidChange.event,this._value=null,this.addDisposables(this._onDidChange,k(e,e=>{let t=e.target.scrollWidth>e.target.clientWidth,n=e.target.scrollHeight>e.target.clientHeight;this._value={hasScrollX:t,hasScrollY:n},this._onDidChange.fire(this._value)}))}};function k(e,t){let n=new ResizeObserver(e=>{requestAnimationFrame(()=>{let n=e[0];t(n)})});return n.observe(e),{dispose:()=>{n.unobserve(e),n.disconnect()}}}var A=(e,...t)=>{for(let n of t)e.classList.contains(n)&&e.classList.remove(n)},j=(e,...t)=>{for(let n of t)e.classList.contains(n)||e.classList.add(n)},M=(e,t,n)=>{let r=e.classList.contains(t);n&&!r&&e.classList.add(t),!n&&r&&e.classList.remove(t)};function re(e,t){for(;e;){if(e===t)return!0;e=e.parentNode}return!1}function ie(e){return new ae(e)}var ae=class extends D{constructor(e){super(),this._onDidFocus=new w,this.onDidFocus=this._onDidFocus.event,this._onDidBlur=new w,this.onDidBlur=this._onDidBlur.event,this.addDisposables(this._onDidFocus,this._onDidBlur);let t=re(document.activeElement,e),n=!1,r=()=>{n=!1,t||(t=!0,this._onDidFocus.fire())},i=()=>{t&&(n=!0,window.setTimeout(()=>{n&&(n=!1,t=!1,this._onDidBlur.fire())},0))};this._refreshStateHandler=()=>{re(document.activeElement,e)!==t&&(t?i():r())},this.addDisposables(T(e,`focus`,r,!0)),this.addDisposables(T(e,`blur`,i,!0))}refreshState(){this._refreshStateHandler()}},oe=`dv-quasiPreventDefault`;function se(e){e[oe]=!0}function ce(e){return e[oe]}function le(e,t){let n=Array.from(t);for(let t of n){if(t.href){let n=e.createElement(`link`);n.href=t.href,n.type=t.type,n.rel=`stylesheet`,e.head.appendChild(n)}let n=[];try{t.cssRules&&(n=Array.from(t.cssRules).map(e=>e.cssText))}catch{}for(let t of n){let n=e.createElement(`style`);n.appendChild(e.createTextNode(t)),e.head.appendChild(n)}}}function ue(e){let{left:t,top:n,width:r,height:i}=e.getBoundingClientRect();return{left:t+window.scrollX,top:n+window.scrollY,width:r,height:i}}function de(e){let t=e;for(;t?.parentNode;)if(t.parentNode===document)return!0;else t=t.parentNode instanceof DocumentFragment?t.parentNode.host:t.parentNode;return!1}function fe(e,t){e.setAttribute(`data-testid`,t)}function pe(e){let t=[];function n(r){if(r.nodeType===Node.ELEMENT_NODE){e.includes(r.tagName)&&t.push(r),r.shadowRoot&&n(r.shadowRoot);for(let e of r.children)n(e)}}return n(document.documentElement),t}function N(e=document){let t=pe([`IFRAME`,`WEBVIEW`]),n=new WeakMap;for(let e of t)n.set(e,e.style.pointerEvents),e.style.pointerEvents=`none`;return{release:()=>{for(let e of t)e.style.pointerEvents=n.get(e)??`auto`;t.splice(0,t.length)}}}function me(e){function t(e){let t=[];for(let n=0;n<e.classList.length;n++)t.push(e.classList.item(n));return t}let n,r=e;for(;r!==null&&(n=t(r).find(e=>e.startsWith(`dockview-theme-`)),typeof n!=`string`);)r=r.parentElement;return n}var he=class{constructor(e){this.element=e,this._classNames=[]}setClassNames(e){for(let e of this._classNames)M(this.element,e,!1);this._classNames=e.split(` `).filter(e=>e.trim().length>0);for(let e of this._classNames)M(this.element,e,!0)}},ge=100;function _e(e,t){let n=ue(e),r=ue(t);return!(n.left<r.left||n.left+n.width>r.left+r.width||n.top<r.top||n.top+n.height>r.top+r.height)}function ve(e){let t=new w,n=e.screenX,r=e.screenY,i,a=()=>{if(e.closed)return;let o=e.screenX,s=e.screenY;(o!==n||s!==r)&&(clearTimeout(i),i=setTimeout(()=>{t.fire()},ge),n=o,r=s),requestAnimationFrame(a)};return a(),t}function ye(e,t){let n;return new D(T(e,`resize`,()=>{clearTimeout(n),n=setTimeout(()=>{t()},ge)}))}function be(e,t,n={buffer:10}){let r=n.buffer,i=e.getBoundingClientRect(),a=t.getBoundingClientRect(),o=0,s=0,c=i.left-a.left,l=i.top-a.top,u=i.bottom-a.bottom,d=i.right-a.right;c<r?o=r-c:d>r&&(o=-r-d),l<r?s=r-l:u>r&&(s=-u-r),(o!==0||s!==0)&&(e.style.transform=`translate(${o}px, ${s}px)`)}function xe(e){let t=e;for(;t&&(t.style.zIndex===`auto`||t.style.zIndex===``);)t=t.parentElement;return t}function P(e){if(e.length===0)throw Error(`Invalid tail call`);return[e.slice(0,e.length-1),e[e.length-1]]}function Se(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Ce(e,t){let n=e.indexOf(t);n>-1&&(e.splice(n,1),e.unshift(t))}function F(e,t){let n=e.indexOf(t);n>-1&&(e.splice(n,1),e.push(t))}function we(e,t){for(let n=0;n<e.length;n++){let r=e[n];if(t(r))return n}return-1}function Te(e,t){let n=e.findIndex(e=>e===t);return n>-1&&(e.splice(n,1),!0)}var I=(e,t,n)=>t>n?t:Math.min(n,Math.max(e,t)),Ee=()=>{let e=1;return{next:()=>(e++).toString()}},L=(e,t)=>{let n=[];if(typeof t!=`number`&&(t=e,e=0),e<=t)for(let r=e;r<t;r++)n.push(r);else for(let r=e;r>t;r--)n.push(r);return n},De=class{set size(e){this._size=e}get size(){return this._size}get cachedVisibleSize(){return this._cachedVisibleSize}get visible(){return this._cachedVisibleSize===void 0}get minimumSize(){return this.visible?this.view.minimumSize:0}get viewMinimumSize(){return this.view.minimumSize}get maximumSize(){return this.visible?this.view.maximumSize:0}get viewMaximumSize(){return this.view.maximumSize}get priority(){return this.view.priority}get snap(){return!!this.view.snap}set enabled(e){this.container.style.pointerEvents=e?``:`none`}constructor(e,t,n,r){this.container=e,this.view=t,this.disposable=r,this._cachedVisibleSize=void 0,typeof n==`number`?(this._size=n,this._cachedVisibleSize=void 0,e.classList.add(`visible`)):(this._size=0,this._cachedVisibleSize=n.cachedVisibleSize)}setVisible(e,t){e!==this.visible&&(e?(this.size=I(this._cachedVisibleSize??0,this.viewMinimumSize,this.viewMaximumSize),this._cachedVisibleSize=void 0):(this._cachedVisibleSize=typeof t==`number`?t:this.size,this.size=0),this.container.classList.toggle(`visible`,e),this.view.setVisible&&this.view.setVisible(e))}dispose(){return this.disposable.dispose(),this.view}},R;(function(e){e.HORIZONTAL=`HORIZONTAL`,e.VERTICAL=`VERTICAL`})(R||={});var z;(function(e){e[e.MAXIMUM=0]=`MAXIMUM`,e[e.MINIMUM=1]=`MINIMUM`,e[e.DISABLED=2]=`DISABLED`,e[e.ENABLED=3]=`ENABLED`})(z||={});var B;(function(e){e.Low=`low`,e.High=`high`,e.Normal=`normal`})(B||={});var V;(function(e){e.Distribute={type:`distribute`};function t(e){return{type:`split`,index:e}}e.Split=t;function n(e){return{type:`invisible`,cachedVisibleSize:e}}e.Invisible=n})(V||={});var Oe=class{get contentSize(){return this._contentSize}get size(){return this._size}set size(e){this._size=e}get orthogonalSize(){return this._orthogonalSize}set orthogonalSize(e){this._orthogonalSize=e}get length(){return this.viewItems.length}get proportions(){return this._proportions?[...this._proportions]:void 0}get orientation(){return this._orientation}set orientation(e){this._orientation=e;let t=this.size;this.size=this.orthogonalSize,this.orthogonalSize=t,A(this.element,`dv-horizontal`,`dv-vertical`),this.element.classList.add(this.orientation==R.HORIZONTAL?`dv-horizontal`:`dv-vertical`)}get minimumSize(){return this.viewItems.reduce((e,t)=>e+t.minimumSize,0)}get maximumSize(){return this.length===0?1/0:this.viewItems.reduce((e,t)=>e+t.maximumSize,0)}get startSnappingEnabled(){return this._startSnappingEnabled}set startSnappingEnabled(e){this._startSnappingEnabled!==e&&(this._startSnappingEnabled=e,this.updateSashEnablement())}get endSnappingEnabled(){return this._endSnappingEnabled}set endSnappingEnabled(e){this._endSnappingEnabled!==e&&(this._endSnappingEnabled=e,this.updateSashEnablement())}get disabled(){return this._disabled}set disabled(e){this._disabled=e,M(this.element,`dv-splitview-disabled`,e)}get margin(){return this._margin}set margin(e){this._margin=e,M(this.element,`dv-splitview-has-margin`,e!==0)}constructor(e,t){this.container=e,this.viewItems=[],this.sashes=[],this._size=0,this._orthogonalSize=0,this._contentSize=0,this._proportions=void 0,this._startSnappingEnabled=!0,this._endSnappingEnabled=!0,this._disabled=!1,this._margin=0,this._onDidSashEnd=new w,this.onDidSashEnd=this._onDidSashEnd.event,this._onDidAddView=new w,this.onDidAddView=this._onDidAddView.event,this._onDidRemoveView=new w,this.onDidRemoveView=this._onDidRemoveView.event,this.resize=(e,t,n=this.viewItems.map(e=>e.size),r,i,a=-1/0,o=1/0,s,c)=>{if(e<0||e>this.viewItems.length)return 0;let l=L(e,-1),u=L(e+1,this.viewItems.length);if(i)for(let e of i)Ce(l,e),Ce(u,e);if(r)for(let e of r)F(l,e),F(u,e);let d=l.map(e=>this.viewItems[e]),f=l.map(e=>n[e]),p=u.map(e=>this.viewItems[e]),m=u.map(e=>n[e]),h=l.reduce((e,t)=>e+this.viewItems[t].minimumSize-n[t],0),g=l.reduce((e,t)=>e+this.viewItems[t].maximumSize-n[t],0),_=u.length===0?1/0:u.reduce((e,t)=>e+n[t]-this.viewItems[t].minimumSize,0),v=u.length===0?-1/0:u.reduce((e,t)=>e+n[t]-this.viewItems[t].maximumSize,0),y=Math.max(h,v),b=Math.min(_,g),x=!1;if(s){let e=this.viewItems[s.index],n=t>=s.limitDelta;x=n!==e.visible,e.setVisible(n,s.size)}if(!x&&c){let e=this.viewItems[c.index],n=t<c.limitDelta;x=n!==e.visible,e.setVisible(n,c.size)}if(x)return this.resize(e,t,n,r,i,a,o);let S=I(t,y,b),C=0,ee=S;for(let e=0;e<d.length;e++){let t=d[e],n=I(f[e]+ee,t.minimumSize,t.maximumSize),r=n-f[e];C+=r,ee-=r,t.size=n}let w=C;for(let e=0;e<p.length;e++){let t=p[e],n=I(m[e]-w,t.minimumSize,t.maximumSize),r=n-m[e];w+=r,t.size=n}return t},this._orientation=t.orientation??R.VERTICAL,this.element=this.createContainer(),this.margin=t.margin??0,this.proportionalLayout=t.proportionalLayout===void 0||!!t.proportionalLayout,this.viewContainer=this.createViewContainer(),this.sashContainer=this.createSashContainer(),this.element.appendChild(this.sashContainer),this.element.appendChild(this.viewContainer),this.container.appendChild(this.element),this.style(t.styles),t.descriptor&&(this._size=t.descriptor.size,t.descriptor.views.forEach((e,t)=>{let n=e.visible===void 0||e.visible?e.size:{type:`invisible`,cachedVisibleSize:e.size},r=e.view;this.addView(r,n,t,!0)}),this._contentSize=this.viewItems.reduce((e,t)=>e+t.size,0),this.saveProportions())}style(e){e?.separatorBorder===`transparent`?(A(this.element,`dv-separator-border`),this.element.style.removeProperty(`--dv-separator-border`)):(j(this.element,`dv-separator-border`),e?.separatorBorder&&this.element.style.setProperty(`--dv-separator-border`,e.separatorBorder))}isViewVisible(e){if(e<0||e>=this.viewItems.length)throw Error(`Index out of bounds`);return this.viewItems[e].visible}setViewVisible(e,t){if(e<0||e>=this.viewItems.length)throw Error(`Index out of bounds`);let n=this.viewItems[e];n.setVisible(t,n.size),this.distributeEmptySpace(e),this.layoutViews(),this.saveProportions()}getViewSize(e){return e<0||e>=this.viewItems.length?-1:this.viewItems[e].size}resizeView(e,t){if(e<0||e>=this.viewItems.length)return;let n=L(this.viewItems.length).filter(t=>t!==e),r=[...n.filter(e=>this.viewItems[e].priority===B.Low),e],i=n.filter(e=>this.viewItems[e].priority===B.High),a=this.viewItems[e];t=Math.round(t),t=I(t,a.minimumSize,Math.min(a.maximumSize,this._size)),a.size=t,this.relayout(r,i)}getViews(){return this.viewItems.map(e=>e.view)}onDidChange(e,t){let n=this.viewItems.indexOf(e);if(n<0||n>=this.viewItems.length)return;t=typeof t==`number`?t:e.size,t=I(t,e.minimumSize,e.maximumSize),e.size=t;let r=L(this.viewItems.length).filter(e=>e!==n),i=[...r.filter(e=>this.viewItems[e].priority===B.Low),n],a=r.filter(e=>this.viewItems[e].priority===B.High);this.relayout([...i,n],a)}addView(e,t={type:`distribute`},n=this.viewItems.length,r){let i=document.createElement(`div`);i.className=`dv-view`,i.appendChild(e.element);let a;a=typeof t==`number`?t:t.type===`split`?this.getViewSize(t.index)/2:t.type===`invisible`?{cachedVisibleSize:t.cachedVisibleSize}:e.minimumSize;let o=e.onDidChange(e=>this.onDidChange(s,e.size)),s=new De(i,e,a,{dispose:()=>{o.dispose(),this.viewContainer.removeChild(i)}});if(n===this.viewItems.length?this.viewContainer.appendChild(i):this.viewContainer.insertBefore(i,this.viewContainer.children.item(n)),this.viewItems.splice(n,0,s),this.viewItems.length>1){let e=document.createElement(`div`);e.className=`dv-sash`;let t=t=>{for(let e of this.viewItems)e.enabled=!1;let n=N(),r=this._orientation===R.HORIZONTAL?t.clientX:t.clientY,i=we(this.sashes,t=>t.container===e),a=this.viewItems.map(e=>e.size),o,s,c=L(i,-1),l=L(i+1,this.viewItems.length),u=c.reduce((e,t)=>e+(this.viewItems[t].minimumSize-a[t]),0),d=c.reduce((e,t)=>e+(this.viewItems[t].viewMaximumSize-a[t]),0),f=l.length===0?1/0:l.reduce((e,t)=>e+(a[t]-this.viewItems[t].minimumSize),0),p=l.length===0?-1/0:l.reduce((e,t)=>e+(a[t]-this.viewItems[t].viewMaximumSize),0),m=Math.max(u,p),h=Math.min(f,d),g=this.findFirstSnapIndex(c),_=this.findFirstSnapIndex(l);if(typeof g==`number`){let e=this.viewItems[g],t=Math.floor(e.viewMinimumSize/2);o={index:g,limitDelta:e.visible?m-t:m+t,size:e.size}}if(typeof _==`number`){let e=this.viewItems[_],t=Math.floor(e.viewMinimumSize/2);s={index:_,limitDelta:e.visible?h+t:h-t,size:e.size}}let v=e=>{let t=(this._orientation===R.HORIZONTAL?e.clientX:e.clientY)-r;this.resize(i,t,a,void 0,void 0,m,h,o,s),this.distributeEmptySpace(),this.layoutViews()},y=()=>{for(let e of this.viewItems)e.enabled=!0;n.release(),this.saveProportions(),document.removeEventListener(`pointermove`,v),document.removeEventListener(`pointerup`,y),document.removeEventListener(`pointercancel`,y),document.removeEventListener(`contextmenu`,y),this._onDidSashEnd.fire(void 0)};document.addEventListener(`pointermove`,v),document.addEventListener(`pointerup`,y),document.addEventListener(`pointercancel`,y),document.addEventListener(`contextmenu`,y)};e.addEventListener(`pointerdown`,t);let n={container:e,disposable:()=>{e.removeEventListener(`pointerdown`,t),this.sashContainer.removeChild(e)}};this.sashContainer.appendChild(e),this.sashes.push(n)}r||this.relayout([n]),!r&&typeof t!=`number`&&t.type===`distribute`&&this.distributeViewSizes(),this._onDidAddView.fire(e)}distributeViewSizes(){let e=[],t=0;for(let n of this.viewItems)n.maximumSize-n.minimumSize>0&&(e.push(n),t+=n.size);let n=Math.floor(t/e.length);for(let t of e)t.size=I(n,t.minimumSize,t.maximumSize);let r=L(this.viewItems.length),i=r.filter(e=>this.viewItems[e].priority===B.Low),a=r.filter(e=>this.viewItems[e].priority===B.High);this.relayout(i,a)}removeView(e,t,n=!1){let r=this.viewItems.splice(e,1)[0];if(r.dispose(),this.viewItems.length>=1){let t=Math.max(e-1,0);this.sashes.splice(t,1)[0].disposable()}return n||this.relayout(),t&&t.type===`distribute`&&this.distributeViewSizes(),this._onDidRemoveView.fire(r.view),r.view}getViewCachedVisibleSize(e){if(e<0||e>=this.viewItems.length)throw Error(`Index out of bounds`);return this.viewItems[e].cachedVisibleSize}moveView(e,t){let n=this.getViewCachedVisibleSize(e),r=n===void 0?this.getViewSize(e):V.Invisible(n),i=this.removeView(e,void 0,!0);this.addView(i,r,t)}layout(e,t){let n=Math.max(this.size,this._contentSize);if(this.size=e,this.orthogonalSize=t,this.proportions){let t=0;for(let n=0;n<this.viewItems.length;n++){let r=this.viewItems[n],i=this.proportions[n];typeof i==`number`?t+=i:e-=r.size}for(let n=0;n<this.viewItems.length;n++){let r=this.viewItems[n],i=this.proportions[n];typeof i==`number`&&t>0&&(r.size=I(Math.round(i*e/t),r.minimumSize,r.maximumSize))}}else{let t=L(this.viewItems.length),r=t.filter(e=>this.viewItems[e].priority===B.Low),i=t.filter(e=>this.viewItems[e].priority===B.High);this.resize(this.viewItems.length-1,e-n,void 0,r,i)}this.distributeEmptySpace(),this.layoutViews()}relayout(e,t){let n=this.viewItems.reduce((e,t)=>e+t.size,0);this.resize(this.viewItems.length-1,this._size-n,void 0,e,t),this.distributeEmptySpace(),this.layoutViews(),this.saveProportions()}distributeEmptySpace(e){let t=this.viewItems.reduce((e,t)=>e+t.size,0),n=this.size-t,r=L(this.viewItems.length-1,-1),i=r.filter(e=>this.viewItems[e].priority===B.Low),a=r.filter(e=>this.viewItems[e].priority===B.High);for(let e of a)Ce(r,e);for(let e of i)F(r,e);typeof e==`number`&&F(r,e);for(let e=0;n!==0&&e<r.length;e++){let t=this.viewItems[r[e]],i=I(t.size+n,t.minimumSize,t.maximumSize),a=i-t.size;n-=a,t.size=i}}saveProportions(){this.proportionalLayout&&this._contentSize>0&&(this._proportions=this.viewItems.map(e=>e.visible?e.size/this._contentSize:void 0))}layoutViews(){if(this._contentSize=this.viewItems.reduce((e,t)=>e+t.size,0),this.updateSashEnablement(),this.viewItems.length===0)return;let e=this.viewItems.filter(e=>e.visible),t=Math.max(0,e.length-1),n=this.margin*t/Math.max(1,e.length),r=0,i=[],a=this.viewItems.reduce((e,t,n)=>{let r=+!!t.visible;return n===0?e.push(r):e.push(e[n-1]+r),e},[]);this.viewItems.forEach((e,o)=>{r+=this.viewItems[o].size,i.push(r);let s=e.visible?e.size-n:0,c=Math.max(0,a[o]-1),l=o===0||c===0?0:i[o-1]+c/t*n;if(o<this.viewItems.length-1){let t=e.visible?l+s-2+this.margin/2:l;this._orientation===R.HORIZONTAL&&(this.sashes[o].container.style.left=`${t}px`,this.sashes[o].container.style.top=`0px`),this._orientation===R.VERTICAL&&(this.sashes[o].container.style.left=`0px`,this.sashes[o].container.style.top=`${t}px`)}this._orientation===R.HORIZONTAL&&(e.container.style.width=`${s}px`,e.container.style.left=`${l}px`,e.container.style.top=``,e.container.style.height=``),this._orientation===R.VERTICAL&&(e.container.style.height=`${s}px`,e.container.style.top=`${l}px`,e.container.style.width=``,e.container.style.left=``),e.view.layout(e.size-n,this._orthogonalSize)})}findFirstSnapIndex(e){for(let t of e){let e=this.viewItems[t];if(e.visible&&e.snap)return t}for(let t of e){let e=this.viewItems[t];if(e.visible&&e.maximumSize-e.minimumSize>0)return;if(!e.visible&&e.snap)return t}}updateSashEnablement(){let e=!1,t=this.viewItems.map(t=>e=t.size-t.minimumSize>0||e);e=!1;let n=this.viewItems.map(t=>e=t.maximumSize-t.size>0||e),r=[...this.viewItems].reverse();e=!1;let i=r.map(t=>e=t.size-t.minimumSize>0||e).reverse();e=!1;let a=r.map(t=>e=t.maximumSize-t.size>0||e).reverse(),o=0;for(let e=0;e<this.sashes.length;e++){let r=this.sashes[e],s=this.viewItems[e];o+=s.size;let c=!(t[e]&&a[e+1]),l=!(n[e]&&i[e+1]);if(c&&l){let n=L(e,-1),a=L(e+1,this.viewItems.length),s=this.findFirstSnapIndex(n),c=this.findFirstSnapIndex(a),l=typeof s==`number`&&!this.viewItems[s].visible,u=typeof c==`number`&&!this.viewItems[c].visible;l&&i[e]&&(o>0||this.startSnappingEnabled)?this.updateSash(r,z.MINIMUM):u&&t[e]&&(o<this._contentSize||this.endSnappingEnabled)?this.updateSash(r,z.MAXIMUM):this.updateSash(r,z.DISABLED)}else c&&!l?this.updateSash(r,z.MINIMUM):!c&&l?this.updateSash(r,z.MAXIMUM):this.updateSash(r,z.ENABLED)}}updateSash(e,t){M(e.container,`dv-disabled`,t===z.DISABLED),M(e.container,`dv-enabled`,t===z.ENABLED),M(e.container,`dv-maximum`,t===z.MAXIMUM),M(e.container,`dv-minimum`,t===z.MINIMUM)}createViewContainer(){let e=document.createElement(`div`);return e.className=`dv-view-container`,e}createSashContainer(){let e=document.createElement(`div`);return e.className=`dv-sash-container`,e}createContainer(){let e=document.createElement(`div`);return e.className=`dv-split-view-container ${this._orientation===R.HORIZONTAL?`dv-horizontal`:`dv-vertical`}`,e}dispose(){this._onDidSashEnd.dispose(),this._onDidAddView.dispose(),this._onDidRemoveView.dispose();for(let e=0;e<this.element.children.length;e++)if(this.element.children.item(e)===this.element){this.element.removeChild(this.element);break}for(let e of this.viewItems)e.dispose();this.element.remove()}},H=class{get minimumWidth(){return this.view.minimumWidth}get maximumWidth(){return this.view.maximumWidth}get minimumHeight(){return this.view.minimumHeight}get maximumHeight(){return this.view.maximumHeight}get priority(){return this.view.priority}get snap(){return this.view.snap}get minimumSize(){return this.orientation===R.HORIZONTAL?this.minimumHeight:this.minimumWidth}get maximumSize(){return this.orientation===R.HORIZONTAL?this.maximumHeight:this.maximumWidth}get minimumOrthogonalSize(){return this.orientation===R.HORIZONTAL?this.minimumWidth:this.minimumHeight}get maximumOrthogonalSize(){return this.orientation===R.HORIZONTAL?this.maximumWidth:this.maximumHeight}get orthogonalSize(){return this._orthogonalSize}get size(){return this._size}get element(){return this.view.element}get width(){return this.orientation===R.HORIZONTAL?this.orthogonalSize:this.size}get height(){return this.orientation===R.HORIZONTAL?this.size:this.orthogonalSize}constructor(e,t,n,r=0){this.view=e,this.orientation=t,this._onDidChange=new w,this.onDidChange=this._onDidChange.event,this._orthogonalSize=n,this._size=r,this._disposable=this.view.onDidChange(e=>{e?this._onDidChange.fire({size:this.orientation===R.VERTICAL?e.width:e.height,orthogonalSize:this.orientation===R.VERTICAL?e.height:e.width}):this._onDidChange.fire({})})}setVisible(e){this.view.setVisible&&this.view.setVisible(e)}layout(e,t){this._size=e,this._orthogonalSize=t,this.view.layout(this.width,this.height)}dispose(){this._onDidChange.dispose(),this._disposable.dispose()}},U=class e extends D{get width(){return this.orientation===R.HORIZONTAL?this.size:this.orthogonalSize}get height(){return this.orientation===R.HORIZONTAL?this.orthogonalSize:this.size}get minimumSize(){return this.children.length===0?0:Math.max(...this.children.map((e,t)=>this.splitview.isViewVisible(t)?e.minimumOrthogonalSize:0))}get maximumSize(){return Math.min(...this.children.map((e,t)=>this.splitview.isViewVisible(t)?e.maximumOrthogonalSize:1/0))}get minimumOrthogonalSize(){return this.splitview.minimumSize}get maximumOrthogonalSize(){return this.splitview.maximumSize}get orthogonalSize(){return this._orthogonalSize}get size(){return this._size}get minimumWidth(){return this.orientation===R.HORIZONTAL?this.minimumOrthogonalSize:this.minimumSize}get minimumHeight(){return this.orientation===R.HORIZONTAL?this.minimumSize:this.minimumOrthogonalSize}get maximumWidth(){return this.orientation===R.HORIZONTAL?this.maximumOrthogonalSize:this.maximumSize}get maximumHeight(){return this.orientation===R.HORIZONTAL?this.maximumSize:this.maximumOrthogonalSize}get priority(){if(this.children.length===0)return B.Normal;let e=this.children.map(e=>e.priority===void 0?B.Normal:e.priority);return e.some(e=>e===B.High)?B.High:e.some(e=>e===B.Low)?B.Low:B.Normal}get disabled(){return this.splitview.disabled}set disabled(e){this.splitview.disabled=e}get margin(){return this.splitview.margin}set margin(t){this.splitview.margin=t,this.children.forEach(n=>{n instanceof e&&(n.margin=t)})}constructor(e,t,n,r,i,a,o,s){if(super(),this.orientation=e,this.proportionalLayout=t,this.styles=n,this._childrenDisposable=E.NONE,this.children=[],this._onDidChange=new w,this.onDidChange=this._onDidChange.event,this._onDidVisibilityChange=new w,this.onDidVisibilityChange=this._onDidVisibilityChange.event,this._orthogonalSize=i,this._size=r,this.element=document.createElement(`div`),this.element.className=`dv-branch-node`,!s)this.splitview=new Oe(this.element,{orientation:this.orientation,proportionalLayout:t,styles:n,margin:o}),this.splitview.layout(this.size,this.orthogonalSize);else{let e={views:s.map(e=>({view:e.node,size:e.node.size,visible:e.node instanceof H&&e.visible!==void 0?e.visible:!0})),size:this.orthogonalSize};this.children=s.map(e=>e.node),this.splitview=new Oe(this.element,{orientation:this.orientation,descriptor:e,proportionalLayout:t,styles:n,margin:o})}this.disabled=a,this.addDisposables(this._onDidChange,this._onDidVisibilityChange,this.splitview.onDidSashEnd(()=>{this._onDidChange.fire({})})),this.setupChildrenEvents()}setVisible(e){}isChildVisible(e){if(e<0||e>=this.children.length)throw Error(`Invalid index`);return this.splitview.isViewVisible(e)}setChildVisible(e,t){if(e<0||e>=this.children.length)throw Error(`Invalid index`);if(this.splitview.isViewVisible(e)===t)return;let n=this.splitview.contentSize===0;this.splitview.setViewVisible(e,t);let r=this.splitview.contentSize===0;(t&&n||!t&&r)&&this._onDidVisibilityChange.fire({visible:t})}moveChild(e,t){if(e===t)return;if(e<0||e>=this.children.length)throw Error(`Invalid from index`);e<t&&t--,this.splitview.moveView(e,t);let n=this._removeChild(e);this._addChild(n,t)}getChildSize(e){if(e<0||e>=this.children.length)throw Error(`Invalid index`);return this.splitview.getViewSize(e)}resizeChild(e,t){if(e<0||e>=this.children.length)throw Error(`Invalid index`);this.splitview.resizeView(e,t)}layout(e,t){this._size=t,this._orthogonalSize=e,this.splitview.layout(t,e)}addChild(e,t,n,r){if(n<0||n>this.children.length)throw Error(`Invalid index`);this.splitview.addView(e,t,n,r),this._addChild(e,n)}getChildCachedVisibleSize(e){if(e<0||e>=this.children.length)throw Error(`Invalid index`);return this.splitview.getViewCachedVisibleSize(e)}removeChild(e,t){if(e<0||e>=this.children.length)throw Error(`Invalid index`);return this.splitview.removeView(e,t),this._removeChild(e)}_addChild(e,t){this.children.splice(t,0,e),this.setupChildrenEvents()}_removeChild(e){let[t]=this.children.splice(e,1);return this.setupChildrenEvents(),t}setupChildrenEvents(){this._childrenDisposable.dispose(),this._childrenDisposable=new D(y.any(...this.children.map(e=>e.onDidChange))(e=>{this._onDidChange.fire({size:e.orthogonalSize})}),...this.children.map((t,n)=>t instanceof e?t.onDidVisibilityChange(({visible:e})=>{this.setChildVisible(n,e)}):E.NONE))}dispose(){this._childrenDisposable.dispose(),this.splitview.dispose(),this.children.forEach(e=>e.dispose()),super.dispose()}};function ke(e,t){if(e instanceof H)return e;if(e instanceof U)return ke(e.children[t?e.children.length-1:0],t);throw Error(`invalid node`)}function Ae(e,t,n){if(e instanceof U){let r=new U(e.orientation,e.proportionalLayout,e.styles,t,n,e.disabled,e.margin);for(let t=e.children.length-1;t>=0;t--){let n=e.children[t];r.addChild(Ae(n,n.size,n.orthogonalSize),n.size,0,!0)}return r}return new H(e.view,e.orientation,n)}function je(e,t,n){if(e instanceof U){let r=new U(K(e.orientation),e.proportionalLayout,e.styles,t,n,e.disabled,e.margin),i=0;for(let a=e.children.length-1;a>=0;a--){let o=e.children[a],s=o instanceof U?o.orthogonalSize:o.size,c=e.size===0?0:Math.round(t*s/e.size);i+=c,a===0&&(c+=t-i),r.addChild(je(o,n,c),c,0,!0)}return r}return new H(e.view,K(e.orientation),n)}function Me(e){let t=e.parentElement;if(!t)throw Error(`Invalid grid element`);let n=t.firstElementChild,r=0;for(;n!==e&&n!==t.lastElementChild&&n;)n=n.nextElementSibling,r++;return r}function W(e){let t=e.parentElement;if(!t)throw Error(`Invalid grid element`);if(/\bdv-grid-view\b/.test(t.className))return[];let n=Me(t),r=t.parentElement.parentElement.parentElement;return[...W(r),n]}function G(e,t,n){if(Pe(e,t)===Ne(n)){let[e,r]=P(t),i=r;return(n===`right`||n===`bottom`)&&(i+=1),[...e,i]}{let e=+(n===`right`||n===`bottom`);return[...t,e]}}function Ne(e){return e===`top`||e===`bottom`?R.VERTICAL:R.HORIZONTAL}function Pe(e,t){return t.length%2==0?K(e):e}var K=e=>e===R.HORIZONTAL?R.VERTICAL:R.HORIZONTAL;function Fe(e){return!!e.children}var Ie=(e,t)=>{let n=t===R.VERTICAL?e.box.width:e.box.height;return Fe(e)?{type:`branch`,data:e.children.map(e=>Ie(e,K(t))),size:n}:typeof e.cachedVisibleSize==`number`?{type:`leaf`,data:e.view.toJSON(),size:e.cachedVisibleSize,visible:!1}:{type:`leaf`,data:e.view.toJSON(),size:n}},Le=class{get length(){return this._root?this._root.children.length:0}get orientation(){return this.root.orientation}set orientation(e){if(this.root.orientation===e)return;let{size:t,orthogonalSize:n}=this.root;this.root=je(this.root,n,t),this.root.layout(t,n)}get width(){return this.root.width}get height(){return this.root.height}get minimumWidth(){return this.root.minimumWidth}get minimumHeight(){return this.root.minimumHeight}get maximumWidth(){return this.root.maximumHeight}get maximumHeight(){return this.root.maximumHeight}get locked(){return this._locked}set locked(e){this._locked=e;let t=[this.root];for(;t.length>0;){let n=t.pop();n instanceof U&&(n.disabled=e,t.push(...n.children))}}get margin(){return this._margin}set margin(e){this._margin=e,this.root.margin=e}maximizedView(){return this._maximizedNode?.leaf.view}hasMaximizedView(){return this._maximizedNode!==void 0}maximizeView(e){let t=W(e.element),[n,r]=this.getNode(t);if(!(r instanceof H)||this._maximizedNode?.leaf===r)return;this.hasMaximizedView()&&this.exitMaximizedView(),Ie(this.getView(),this.orientation);let i=[];function a(e,t){for(let n=0;n<e.children.length;n++){let r=e.children[n];r instanceof H?r!==t&&(e.isChildVisible(n)?e.setChildVisible(n,!1):i.push(r)):a(r,t)}}a(this.root,r),this._maximizedNode={leaf:r,hiddenOnMaximize:i},this._onDidMaximizedNodeChange.fire({view:r.view,isMaximized:!0})}exitMaximizedView(){if(!this._maximizedNode)return;let e=this._maximizedNode.hiddenOnMaximize;function t(n){for(let r=n.children.length-1;r>=0;r--){let i=n.children[r];i instanceof H?e.includes(i)||n.setChildVisible(r,!0):t(i)}}t(this.root);let n=this._maximizedNode.leaf;this._maximizedNode=void 0,this._onDidMaximizedNodeChange.fire({view:n.view,isMaximized:!1})}serialize(){let e=this.maximizedView(),t;e&&(t=W(e.element)),this.hasMaximizedView()&&this.exitMaximizedView();let n={root:Ie(this.getView(),this.orientation),width:this.width,height:this.height,orientation:this.orientation};return t&&(n.maximizedNode={location:t}),e&&this.maximizeView(e),n}dispose(){this.disposable.dispose(),this._onDidChange.dispose(),this._onDidMaximizedNodeChange.dispose(),this._onDidViewVisibilityChange.dispose(),this.root.dispose(),this._maximizedNode=void 0,this.element.remove()}clear(){let e=this.root.orientation;this.root=new U(e,this.proportionalLayout,this.styles,this.root.size,this.root.orthogonalSize,this.locked,this.margin)}deserialize(e,t){let n=e.orientation,r=n===R.VERTICAL?e.height:e.width;if(this._deserialize(e.root,n,t,r),this.layout(e.width,e.height),e.maximizedNode){let t=e.maximizedNode.location,[n,r]=this.getNode(t);if(!(r instanceof H))return;this.maximizeView(r.view)}}_deserialize(e,t,n,r){this.root=this._deserializeNode(e,t,n,r)}_deserializeNode(e,t,n,r){var i;let a;if(e.type===`branch`){let i=e.data.map(r=>({node:this._deserializeNode(r,K(t),n,e.size),visible:r.visible}));a=new U(t,this.proportionalLayout,this.styles,e.size,r,this.locked,this.margin,i)}else{let o=n.fromJSON(e);typeof e.visible==`boolean`&&((i=o.setVisible)==null||i.call(o,e.visible)),a=new H(o,t,r,e.size)}return a}get root(){return this._root}set root(e){let t=this._root;t&&(t.dispose(),this._maximizedNode=void 0,this.element.removeChild(t.element)),this._root=e,this.element.appendChild(this._root.element),this.disposable.value=this._root.onDidChange(e=>{this._onDidChange.fire(e)})}normalize(){if(!this._root||this._root.children.length!==1)return;let e=this.root,t=e.children[0];if(t instanceof H)return;e.element.remove();let n=e.removeChild(0);e.dispose(),n.dispose(),this._root=Ae(t,t.size,t.orthogonalSize),this.element.appendChild(this._root.element),this.disposable.value=this._root.onDidChange(e=>{this._onDidChange.fire(e)})}insertOrthogonalSplitviewAtRoot(){if(!this._root)return;let e=this.root;if(e.element.remove(),this._root=new U(K(e.orientation),this.proportionalLayout,this.styles,this.root.orthogonalSize,this.root.size,this.locked,this.margin),e.children.length!==0){if(e.children.length===1){let t=e.children[0];e.removeChild(0).dispose(),e.dispose(),this._root.addChild(je(t,t.orthogonalSize,t.size),V.Distribute,0)}else this._root.addChild(e,V.Distribute,0)}this.element.appendChild(this._root.element),this.disposable.value=this._root.onDidChange(e=>{this._onDidChange.fire(e)})}next(e){return this.progmaticSelect(e)}previous(e){return this.progmaticSelect(e,!0)}getView(e){let t=e?this.getNode(e)[1]:this.root;return this._getViews(t,this.orientation)}_getViews(e,t,n){let r={height:e.height,width:e.width};if(e instanceof H)return{box:r,view:e.view,cachedVisibleSize:n};let i=[];for(let n=0;n<e.children.length;n++){let r=e.children[n],a=e.getChildCachedVisibleSize(n);i.push(this._getViews(r,K(t),a))}return{box:r,children:i}}progmaticSelect(e,t=!1){let[n,r]=this.getNode(e);if(!(r instanceof H))throw Error(`invalid location`);for(let r=n.length-1;r>-1;r--){let i=n[r],a=e[r]||0;if(t?a-1>-1:a+1<i.children.length)return ke(i.children[t?a-1:a+1],t)}return ke(this.root,t)}constructor(e,t,n,r,i){this.proportionalLayout=e,this.styles=t,this._locked=!1,this._margin=0,this._maximizedNode=void 0,this.disposable=new O,this._onDidChange=new w,this.onDidChange=this._onDidChange.event,this._onDidViewVisibilityChange=new w,this.onDidViewVisibilityChange=this._onDidViewVisibilityChange.event,this._onDidMaximizedNodeChange=new w,this.onDidMaximizedNodeChange=this._onDidMaximizedNodeChange.event,this.element=document.createElement(`div`),this.element.className=`dv-grid-view`,this._locked=r??!1,this._margin=i??0,this.root=new U(n,e,t,0,0,this.locked,this.margin)}isViewVisible(e){let[t,n]=P(e),[,r]=this.getNode(t);if(!(r instanceof U))throw Error(`Invalid from location`);return r.isChildVisible(n)}setViewVisible(e,t){this.hasMaximizedView()&&this.exitMaximizedView();let[n,r]=P(e),[,i]=this.getNode(n);if(!(i instanceof U))throw Error(`Invalid from location`);this._onDidViewVisibilityChange.fire(),i.setChildVisible(r,t)}moveView(e,t,n){this.hasMaximizedView()&&this.exitMaximizedView();let[,r]=this.getNode(e);if(!(r instanceof U))throw Error(`Invalid location`);r.moveChild(t,n)}addView(e,t,n){this.hasMaximizedView()&&this.exitMaximizedView();let[r,i]=P(n),[a,o]=this.getNode(r);if(o instanceof U){let n=new H(e,K(o.orientation),o.orthogonalSize);o.addChild(n,t,i)}else{let[n,...s]=[...a].reverse(),[c,...l]=[...r].reverse(),u=0,d=n.getChildCachedVisibleSize(c);typeof d==`number`&&(u=V.Invisible(d)),n.removeChild(c).dispose();let f=new U(o.orientation,this.proportionalLayout,this.styles,o.size,o.orthogonalSize,this.locked,this.margin);n.addChild(f,o.size,c);let p=new H(o.view,n.orientation,o.size);f.addChild(p,u,0),typeof t!=`number`&&t.type===`split`&&(t={type:`split`,index:0});let m=new H(e,n.orientation,o.size);f.addChild(m,t,i)}}remove(e,t){let n=W(e.element);return this.removeView(n,t)}removeView(e,t){this.hasMaximizedView()&&this.exitMaximizedView();let[n,r]=P(e),[i,a]=this.getNode(n);if(!(a instanceof U))throw Error(`Invalid location`);let o=a.children[r];if(!(o instanceof H))throw Error(`Invalid location`);if(a.removeChild(r,t),o.dispose(),a.children.length!==1)return o.view;let s=a.children[0];if(i.length===0)return s instanceof H?o.view:(a.removeChild(0,t),this.root=s,o.view);let[c,...l]=[...i].reverse(),[u,...d]=[...n].reverse(),f=a.isChildVisible(0);a.removeChild(0,t);let p=c.children.map((e,t)=>c.getChildSize(t));if(c.removeChild(u,t).dispose(),s instanceof U){p.splice(u,1,...s.children.map(e=>e.size));for(let e=0;e<s.children.length;e++){let t=s.children[e];c.addChild(t,t.size,u+e)}for(;s.children.length>0;)s.removeChild(0)}else{let e=new H(s.view,K(s.orientation),s.size),t=f?s.orthogonalSize:V.Invisible(s.orthogonalSize);c.addChild(e,t,u)}s.dispose();for(let e=0;e<p.length;e++)c.resizeChild(e,p[e]);return o.view}layout(e,t){let[n,r]=this.root.orientation===R.HORIZONTAL?[t,e]:[e,t];this.root.layout(n,r)}getNode(e,t=this.root,n=[]){if(e.length===0)return[n,t];if(!(t instanceof U))throw Error(`Invalid location`);let[r,...i]=e;if(r<0||r>=t.children.length)throw Error(`Invalid location`);let a=t.children[r];return n.push(t),this.getNode(i,a,n)}},Re=class extends D{get element(){return this._element}get disableResizing(){return this._disableResizing}set disableResizing(e){this._disableResizing=e}constructor(e,t=!1){super(),this._disableResizing=t,this._element=e,this.addDisposables(k(this._element,e=>{if(this.isDisposed||this.disableResizing||!this._element.offsetParent||!de(this._element))return;let{width:t,height:n}=e.contentRect;this.layout(t,n)}))}},ze=Ee();function Be(e){switch(e){case`left`:return`left`;case`right`:return`right`;case`above`:return`top`;case`below`:return`bottom`;default:return`center`}}var Ve=class extends Re{get id(){return this._id}get size(){return this._groups.size}get groups(){return Array.from(this._groups.values()).map(e=>e.value)}get width(){return this.gridview.width}get height(){return this.gridview.height}get minimumHeight(){return this.gridview.minimumHeight}get maximumHeight(){return this.gridview.maximumHeight}get minimumWidth(){return this.gridview.minimumWidth}get maximumWidth(){return this.gridview.maximumWidth}get activeGroup(){return this._activeGroup}get locked(){return this.gridview.locked}set locked(e){this.gridview.locked=e}constructor(e,t){super(document.createElement(`div`),t.disableAutoResizing),this._id=ze.next(),this._groups=new Map,this._onDidRemove=new w,this.onDidRemove=this._onDidRemove.event,this._onDidAdd=new w,this.onDidAdd=this._onDidAdd.event,this._onDidMaximizedChange=new w,this.onDidMaximizedChange=this._onDidMaximizedChange.event,this._onDidActiveChange=new w,this.onDidActiveChange=this._onDidActiveChange.event,this._bufferOnDidLayoutChange=new te,this.onDidLayoutChange=this._bufferOnDidLayoutChange.onEvent,this._onDidViewVisibilityChangeMicroTaskQueue=new te,this.onDidViewVisibilityChangeMicroTaskQueue=this._onDidViewVisibilityChangeMicroTaskQueue.onEvent,this.element.style.height=`100%`,this.element.style.width=`100%`,this._classNames=new he(this.element),this._classNames.setClassNames(t.className??``),e.appendChild(this.element),this.gridview=new Le(!!t.proportionalLayout,t.styles,t.orientation,t.locked,t.margin),this.gridview.locked=!!t.locked,this.element.appendChild(this.gridview.element),this.layout(0,0,!0),this.addDisposables(this.gridview.onDidMaximizedNodeChange(e=>{this._onDidMaximizedChange.fire({panel:e.view,isMaximized:e.isMaximized})}),this.gridview.onDidViewVisibilityChange(()=>this._onDidViewVisibilityChangeMicroTaskQueue.fire()),this.onDidViewVisibilityChangeMicroTaskQueue(()=>{this.layout(this.width,this.height,!0)}),E.from(()=>{var e;(e=this.element.parentElement)==null||e.removeChild(this.element)}),this.gridview.onDidChange(()=>{this._bufferOnDidLayoutChange.fire()}),y.any(this.onDidAdd,this.onDidRemove,this.onDidActiveChange)(()=>{this._bufferOnDidLayoutChange.fire()}),this._onDidMaximizedChange,this._onDidViewVisibilityChangeMicroTaskQueue,this._bufferOnDidLayoutChange)}setVisible(e,t){this.gridview.setViewVisible(W(e.element),t),this._bufferOnDidLayoutChange.fire()}isVisible(e){return this.gridview.isViewVisible(W(e.element))}updateOptions(e){e.proportionalLayout,e.orientation&&(this.gridview.orientation=e.orientation),`disableResizing`in e&&(this.disableResizing=e.disableAutoResizing??!1),`locked`in e&&(this.locked=e.locked??!1),`margin`in e&&(this.gridview.margin=e.margin??0),`className`in e&&this._classNames.setClassNames(e.className??``)}maximizeGroup(e){this.gridview.maximizeView(e),this.doSetGroupActive(e)}isMaximizedGroup(e){return this.gridview.maximizedView()===e}exitMaximizedGroup(){this.gridview.exitMaximizedView()}hasMaximizedGroup(){return this.gridview.hasMaximizedView()}doAddGroup(e,t=[0],n){this.gridview.addView(e,n??V.Distribute,t),this._onDidAdd.fire(e)}doRemoveGroup(e,t){if(!this._groups.has(e.id))throw Error(`invalid operation`);let n=this._groups.get(e.id),r=this.gridview.remove(e,V.Distribute);if(n&&!t?.skipDispose&&(n.disposable.dispose(),n.value.dispose(),this._groups.delete(e.id),this._onDidRemove.fire(e)),!t?.skipActive&&this._activeGroup===e){let e=Array.from(this._groups.values());this.doSetGroupActive(e.length>0?e[0].value:void 0)}return r}getPanel(e){return this._groups.get(e)?.value}doSetGroupActive(e){this._activeGroup!==e&&(this._activeGroup&&this._activeGroup.setActive(!1),e&&e.setActive(!0),this._activeGroup=e,this._onDidActiveChange.fire(e))}removeGroup(e){this.doRemoveGroup(e)}moveToNext(e){if(e||={},!e.group){if(!this.activeGroup)return;e.group=this.activeGroup}let t=W(e.group.element),n=this.gridview.next(t)?.view;this.doSetGroupActive(n)}moveToPrevious(e){if(e||={},!e.group){if(!this.activeGroup)return;e.group=this.activeGroup}let t=W(e.group.element),n=this.gridview.previous(t)?.view;this.doSetGroupActive(n)}layout(e,t,n){(n||e!==this.width||t!==this.height)&&(this.gridview.element.style.height=`${t}px`,this.gridview.element.style.width=`${e}px`,this.gridview.layout(e,t))}dispose(){this._onDidActiveChange.dispose(),this._onDidAdd.dispose(),this._onDidRemove.dispose();for(let e of this.groups)e.dispose();this.gridview.dispose(),super.dispose()}},q=class{get id(){return this.component.id}get width(){return this.component.width}get height(){return this.component.height}get minimumHeight(){return this.component.minimumHeight}get maximumHeight(){return this.component.maximumHeight}get minimumWidth(){return this.component.minimumWidth}get maximumWidth(){return this.component.maximumWidth}get size(){return this.component.size}get totalPanels(){return this.component.totalPanels}get onDidActiveGroupChange(){return this.component.onDidActiveGroupChange}get onDidAddGroup(){return this.component.onDidAddGroup}get onDidRemoveGroup(){return this.component.onDidRemoveGroup}get onDidActivePanelChange(){return this.component.onDidActivePanelChange}get onDidAddPanel(){return this.component.onDidAddPanel}get onDidRemovePanel(){return this.component.onDidRemovePanel}get onDidMovePanel(){return this.component.onDidMovePanel}get onDidLayoutFromJSON(){return this.component.onDidLayoutFromJSON}get onDidLayoutChange(){return this.component.onDidLayoutChange}get onDidDrop(){return this.component.onDidDrop}get onWillDrop(){return this.component.onWillDrop}get onWillShowOverlay(){return this.component.onWillShowOverlay}get onWillDragGroup(){return this.component.onWillDragGroup}get onWillDragPanel(){return this.component.onWillDragPanel}get onUnhandledDragOverEvent(){return this.component.onUnhandledDragOverEvent}get onDidPopoutGroupSizeChange(){return this.component.onDidPopoutGroupSizeChange}get onDidPopoutGroupPositionChange(){return this.component.onDidPopoutGroupPositionChange}get onDidOpenPopoutWindowFail(){return this.component.onDidOpenPopoutWindowFail}get panels(){return this.component.panels}get groups(){return this.component.groups}get activePanel(){return this.component.activePanel}get activeGroup(){return this.component.activeGroup}constructor(e){this.component=e}focus(){this.component.focus()}getPanel(e){return this.component.getGroupPanel(e)}layout(e,t,n=!1){this.component.layout(e,t,n)}addPanel(e){return this.component.addPanel(e)}removePanel(e){this.component.removePanel(e)}addGroup(e){return this.component.addGroup(e)}closeAllGroups(){return this.component.closeAllGroups()}removeGroup(e){this.component.removeGroup(e)}getGroup(e){return this.component.getPanel(e)}addFloatingGroup(e,t){return this.component.addFloatingGroup(e,t)}fromJSON(e,t){this.component.fromJSON(e,t)}toJSON(){return this.component.toJSON()}clear(){this.component.clear()}moveToNext(e){this.component.moveToNext(e)}moveToPrevious(e){this.component.moveToPrevious(e)}maximizeGroup(e){this.component.maximizeGroup(e.group)}hasMaximizedGroup(){return this.component.hasMaximizedGroup()}exitMaximizedGroup(){this.component.exitMaximizedGroup()}get onDidMaximizedGroupChange(){return this.component.onDidMaximizedGroupChange}addPopoutGroup(e,t){return this.component.addPopoutGroup(e,t)}updateOptions(e){this.component.updateOptions(e)}dispose(){this.component.dispose()}},He=class extends D{constructor(e,t){super(),this.el=e,this.disabled=t,this.dataDisposable=new O,this.pointerEventsDisposable=new O,this._onDragStart=new w,this.onDragStart=this._onDragStart.event,this.addDisposables(this._onDragStart,this.dataDisposable,this.pointerEventsDisposable),this.configure()}setDisabled(e){this.disabled=e}isCancelled(e){return!1}configure(){this.addDisposables(this._onDragStart,T(this.el,`dragstart`,e=>{if(e.defaultPrevented||this.isCancelled(e)||this.disabled){e.preventDefault();return}let t=N();this.pointerEventsDisposable.value={dispose:()=>{t.release()}},this.el.classList.add(`dv-dragged`),setTimeout(()=>this.el.classList.remove(`dv-dragged`),0),this.dataDisposable.value=this.getData(e),this._onDragStart.fire(e),e.dataTransfer&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.items.length>0||e.dataTransfer.setData(`text/plain`,``))}),T(this.el,`dragend`,()=>{this.pointerEventsDisposable.dispose(),setTimeout(()=>{this.dataDisposable.dispose()},0)}))}},Ue=class extends D{constructor(e,t){super(),this.element=e,this.callbacks=t,this.target=null,this.registerListeners()}onDragEnter(e){this.target=e.target,this.callbacks.onDragEnter(e)}onDragOver(e){e.preventDefault(),this.callbacks.onDragOver&&this.callbacks.onDragOver(e)}onDragLeave(e){this.target===e.target&&(this.target=null,this.callbacks.onDragLeave(e))}onDragEnd(e){this.target=null,this.callbacks.onDragEnd(e)}onDrop(e){this.callbacks.onDrop(e)}registerListeners(){this.addDisposables(T(this.element,`dragenter`,e=>{this.onDragEnter(e)},!0)),this.addDisposables(T(this.element,`dragover`,e=>{this.onDragOver(e)},!0)),this.addDisposables(T(this.element,`dragleave`,e=>{this.onDragLeave(e)})),this.addDisposables(T(this.element,`dragend`,e=>{this.onDragEnd(e)})),this.addDisposables(T(this.element,`drop`,e=>{this.onDrop(e)}))}};function We(e,t){let{top:n,left:r,width:i,height:a}=t,o=`${Math.round(n)}px`,s=`${Math.round(r)}px`,c=`${Math.round(i)}px`,l=`${Math.round(a)}px`;e.style.top=o,e.style.left=s,e.style.width=c,e.style.height=l,e.style.visibility=`visible`,(!e.style.transform||e.style.transform===``)&&(e.style.transform=`translate3d(0, 0, 0)`)}function Ge(e,t){let{top:n,left:r,width:i,height:a}=t;e.style.top=n,e.style.left=r,e.style.width=i,e.style.height=a,e.style.visibility=`visible`,(!e.style.transform||e.style.transform===``)&&(e.style.transform=`translate3d(0, 0, 0)`)}function Ke(e,t){let{top:n,left:r,width:i,height:a}=t,o=`${Math.round(n)}px`,s=`${Math.round(r)}px`,c=`${Math.round(i)}px`,l=`${Math.round(a)}px`;return e.style.top!==o||e.style.left!==s||e.style.width!==c||e.style.height!==l}var qe=class extends b{get nativeEvent(){return this.options.nativeEvent}get position(){return this.options.position}constructor(e){super(),this.options=e}};function Je(e){switch(e){case`above`:return`top`;case`below`:return`bottom`;case`left`:return`left`;case`right`:return`right`;case`within`:return`center`;default:throw Error(`invalid direction '${e}'`)}}function Ye(e){switch(e){case`top`:return`above`;case`bottom`:return`below`;case`left`:return`left`;case`right`:return`right`;case`center`:return`within`;default:throw Error(`invalid position '${e}'`)}}var Xe={value:20,type:`percentage`},Ze={value:50,type:`percentage`},Qe=100,$e=100,J=class e extends D{get disabled(){return this._disabled}set disabled(e){this._disabled=e}get state(){return this._state}constructor(t,n){super(),this.element=t,this.options=n,this._onDrop=new w,this.onDrop=this._onDrop.event,this._onWillShowOverlay=new w,this.onWillShowOverlay=this._onWillShowOverlay.event,this._disabled=!1,this._acceptedTargetZonesSet=new Set(this.options.acceptedTargetZones),this.dnd=new Ue(this.element,{onDragEnter:()=>{var e,t;(t=(e=this.options).getOverrideTarget?.call(e))==null||t.getElements()},onDragOver:t=>{var n,r;e.ACTUAL_TARGET=this;let i=(n=this.options).getOverrideTarget?.call(n);if(this._acceptedTargetZonesSet.size===0){if(i)return;this.removeDropTarget();return}let a=(r=this.options).getOverlayOutline?.call(r)??this.element,o=a.offsetWidth,s=a.offsetHeight;if(o===0||s===0)return;let c=t.currentTarget.getBoundingClientRect(),l=(t.clientX??0)-c.left,u=(t.clientY??0)-c.top,d=this.calculateQuadrant(this._acceptedTargetZonesSet,l,u,o,s);if(this.isAlreadyUsed(t)||d===null){this.removeDropTarget();return}if(!this.options.canDisplayOverlay(t,d)){if(i)return;this.removeDropTarget();return}let f=new qe({nativeEvent:t,position:d});if(this._onWillShowOverlay.fire(f),f.defaultPrevented){this.removeDropTarget();return}this.markAsUsed(t),i||this.targetElement||(this.targetElement=document.createElement(`div`),this.targetElement.className=`dv-drop-target-dropzone`,this.overlayElement=document.createElement(`div`),this.overlayElement.className=`dv-drop-target-selection`,this._state=`center`,this.targetElement.appendChild(this.overlayElement),a.classList.add(`dv-drop-target`),a.append(this.targetElement)),this.toggleClasses(d,o,s),this._state=d},onDragLeave:()=>{var e;(e=this.options).getOverrideTarget?.call(e)||this.removeDropTarget()},onDragEnd:t=>{var n;let r=(n=this.options).getOverrideTarget?.call(n);r&&e.ACTUAL_TARGET===this&&this._state&&(t.stopPropagation(),this._onDrop.fire({position:this._state,nativeEvent:t})),this.removeDropTarget(),r?.clear()},onDrop:e=>{var t,n;e.preventDefault();let r=this._state;this.removeDropTarget(),(n=(t=this.options).getOverrideTarget?.call(t))==null||n.clear(),r&&(e.stopPropagation(),this._onDrop.fire({position:r,nativeEvent:e}))}}),this.addDisposables(this._onDrop,this._onWillShowOverlay,this.dnd)}setTargetZones(e){this._acceptedTargetZonesSet=new Set(e)}setOverlayModel(e){this.options.overlayModel=e}dispose(){this.removeDropTarget(),super.dispose()}markAsUsed(t){t[e.USED_EVENT_ID]=!0}isAlreadyUsed(t){let n=t[e.USED_EVENT_ID];return typeof n==`boolean`&&n}toggleClasses(e,t,n){var r,i;let a=(r=this.options).getOverrideTarget?.call(r);if(!a&&!this.overlayElement)return;let o=t<Qe,s=n<$e,c=e===`left`,l=e===`right`,u=e===`top`,d=e===`bottom`,f=!o&&l,p=!o&&c,m=!s&&u,h=!s&&d,g=1,_=this.options.overlayModel?.size??Ze;if(_.type===`percentage`?g=I(_.value,0,100)/100:((f||p)&&(g=I(0,_.value,t)/t),(m||h)&&(g=I(0,_.value,n)/n)),a){let r=(i=this.options).getOverlayOutline?.call(i)??this.element,s=r.getBoundingClientRect(),_=a.getElements(void 0,r),v=_.root,y=_.overlay,b=v.getBoundingClientRect(),x=s.top-b.top,S=s.left-b.left,C={top:x,left:S,width:t,height:n};if(f?(C.left=S+t*(1-g),C.width=t*g):p?C.width=t*g:m?C.height=n*g:h&&(C.top=x+n*(1-g),C.height=n*g),o&&c&&(C.width=4),o&&l&&(C.left=S+t-4,C.width=4),!Ke(y,C))return;We(y,C),y.className=`dv-drop-target-anchor${this.options.className?` ${this.options.className}`:``}`,M(y,`dv-drop-target-left`,c),M(y,`dv-drop-target-right`,l),M(y,`dv-drop-target-top`,u),M(y,`dv-drop-target-bottom`,d),M(y,`dv-drop-target-center`,e===`center`),_.changed&&(M(y,`dv-drop-target-anchor-container-changed`,!0),setTimeout(()=>{M(y,`dv-drop-target-anchor-container-changed`,!1)},10));return}if(!this.overlayElement)return;let v={top:`0px`,left:`0px`,width:`100%`,height:`100%`};f?(v.left=`${100*(1-g)}%`,v.width=`${100*g}%`):p?v.width=`${100*g}%`:m?v.height=`${100*g}%`:h&&(v.top=`${100*(1-g)}%`,v.height=`${100*g}%`),Ge(this.overlayElement,v),M(this.overlayElement,`dv-drop-target-small-vertical`,s),M(this.overlayElement,`dv-drop-target-small-horizontal`,o),M(this.overlayElement,`dv-drop-target-left`,c),M(this.overlayElement,`dv-drop-target-right`,l),M(this.overlayElement,`dv-drop-target-top`,u),M(this.overlayElement,`dv-drop-target-bottom`,d),M(this.overlayElement,`dv-drop-target-center`,e===`center`)}calculateQuadrant(e,t,n,r,i){let a=this.options.overlayModel?.activationSize??Xe;return a.type===`percentage`?et(e,t,n,r,i,a.value):tt(e,t,n,r,i,a.value)}removeDropTarget(){var e;this.targetElement&&(this._state=void 0,(e=this.targetElement.parentElement)==null||e.classList.remove(`dv-drop-target`),this.targetElement.remove(),this.targetElement=void 0,this.overlayElement=void 0)}};J.USED_EVENT_ID=`__dockview_droptarget_event_is_used__`;function et(e,t,n,r,i,a){let o=100*t/r,s=100*n/i;return e.has(`left`)&&o<a?`left`:e.has(`right`)&&o>100-a?`right`:e.has(`top`)&&s<a?`top`:e.has(`bottom`)&&s>100-a?`bottom`:e.has(`center`)?`center`:null}function tt(e,t,n,r,i,a){return e.has(`left`)&&t<a?`left`:e.has(`right`)&&t>r-a?`right`:e.has(`top`)&&n<a?`top`:e.has(`bottom`)&&n>i-a?`bottom`:e.has(`center`)?`center`:null}var nt=class extends b{constructor(){super()}},rt=class extends D{get isFocused(){return this._isFocused}get isActive(){return this._isActive}get isVisible(){return this._isVisible}get width(){return this._width}get height(){return this._height}constructor(e,t){super(),this.id=e,this.component=t,this._isFocused=!1,this._isActive=!1,this._isVisible=!0,this._width=0,this._height=0,this._parameters={},this.panelUpdatesDisposable=new O,this._onDidDimensionChange=new w,this.onDidDimensionsChange=this._onDidDimensionChange.event,this._onDidChangeFocus=new w,this.onDidFocusChange=this._onDidChangeFocus.event,this._onWillFocus=new w,this.onWillFocus=this._onWillFocus.event,this._onDidVisibilityChange=new w,this.onDidVisibilityChange=this._onDidVisibilityChange.event,this._onWillVisibilityChange=new w,this.onWillVisibilityChange=this._onWillVisibilityChange.event,this._onDidActiveChange=new w,this.onDidActiveChange=this._onDidActiveChange.event,this._onActiveChange=new w,this.onActiveChange=this._onActiveChange.event,this._onDidParametersChange=new w,this.onDidParametersChange=this._onDidParametersChange.event,this.addDisposables(this.onDidFocusChange(e=>{this._isFocused=e.isFocused}),this.onDidActiveChange(e=>{this._isActive=e.isActive}),this.onDidVisibilityChange(e=>{this._isVisible=e.isVisible}),this.onDidDimensionsChange(e=>{this._width=e.width,this._height=e.height}),this.panelUpdatesDisposable,this._onDidDimensionChange,this._onDidChangeFocus,this._onDidVisibilityChange,this._onDidActiveChange,this._onWillFocus,this._onActiveChange,this._onWillFocus,this._onWillVisibilityChange,this._onDidParametersChange)}getParameters(){return this._parameters}initialize(e){this.panelUpdatesDisposable.value=this._onDidParametersChange.event(t=>{this._parameters=t,e.update({params:t})})}setVisible(e){this._onWillVisibilityChange.fire({isVisible:e})}setActive(){this._onActiveChange.fire()}updateParameters(e){this._onDidParametersChange.fire(e)}},it=class extends D{get element(){return this._element}get width(){return this._width}get height(){return this._height}get params(){return this._params?.params}constructor(e,t,n){super(),this.id=e,this.component=t,this.api=n,this._height=0,this._width=0,this._element=document.createElement(`div`),this._element.tabIndex=-1,this._element.style.outline=`none`,this._element.style.height=`100%`,this._element.style.width=`100%`,this._element.style.overflow=`hidden`;let r=ie(this._element);this.addDisposables(this.api,r.onDidFocus(()=>{this.api._onDidChangeFocus.fire({isFocused:!0})}),r.onDidBlur(()=>{this.api._onDidChangeFocus.fire({isFocused:!1})}),r)}focus(){let e=new nt;this.api._onWillFocus.fire(e),!e.defaultPrevented&&this._element.focus()}layout(e,t){this._width=e,this._height=t,this.api._onDidDimensionChange.fire({width:e,height:t}),this.part&&this._params&&this.part.update(this._params.params)}init(e){this._params=e,this.part=this.getComponent()}update(e){var t;this._params=Object.assign(Object.assign({},this._params),{params:Object.assign(Object.assign({},this._params?.params),e.params)});for(let t of Object.keys(e.params))e.params[t]===void 0&&delete this._params.params[t];(t=this.part)==null||t.update({params:this._params.params})}toJSON(){let e=this._params?.params??{};return{id:this.id,component:this.component,params:Object.keys(e).length>0?e:void 0}}dispose(){var e;this.api.dispose(),(e=this.part)==null||e.dispose(),super.dispose()}},at=class extends D{get element(){return this._element}constructor(e,t){super(),this.accessor=e,this.group=t,this.disposable=new O,this._onDidFocus=new w,this.onDidFocus=this._onDidFocus.event,this._onDidBlur=new w,this.onDidBlur=this._onDidBlur.event,this._element=document.createElement(`div`),this._element.className=`dv-content-container`,this._element.tabIndex=-1,this.addDisposables(this._onDidFocus,this._onDidBlur);let n=t.dropTargetContainer;this.dropTarget=new J(this.element,{getOverlayOutline:()=>e.options.theme?.dndPanelOverlay===`group`?this.element.parentElement:null,className:`dv-drop-target-content`,acceptedTargetZones:[`top`,`bottom`,`left`,`right`,`center`],canDisplayOverlay:(e,t)=>{if(this.group.locked===`no-drop-target`||this.group.locked&&t===`center`)return!1;let n=v();return!n&&e.shiftKey&&this.group.location.type!==`floating`?!1:n&&n.viewId===this.accessor.id?!0:this.group.canDisplayOverlay(e,t,`content`)},getOverrideTarget:n?()=>n.model:void 0}),this.addDisposables(this.dropTarget)}show(){this.element.style.display=``}hide(){this.element.style.display=`none`}renderPanel(e,t={asActive:!0}){let n=t.asActive||this.panel&&this.group.isPanelActive(this.panel);this.panel&&this.panel.view.content.element.parentElement===this._element&&this._element.removeChild(this.panel.view.content.element),this.panel=e;let r;switch(e.api.renderer){case`onlyWhenVisible`:this.group.renderContainer.detatch(e),this.panel&&n&&this._element.appendChild(this.panel.view.content.element),r=this._element;break;case`always`:e.view.content.element.parentElement===this._element&&this._element.removeChild(e.view.content.element),r=this.group.renderContainer.attach({panel:e,referenceContainer:this});break;default:throw Error(`dockview: invalid renderer type '${e.api.renderer}'`)}if(n){let e=ie(r);this.focusTracker=e;let t=new D;t.addDisposables(e,e.onDidFocus(()=>this._onDidFocus.fire()),e.onDidBlur(()=>this._onDidBlur.fire())),this.disposable.value=t}}openPanel(e){this.panel!==e&&this.renderPanel(e)}layout(e,t){}closePanel(){var e;this.panel&&this.panel.api.renderer===`onlyWhenVisible`&&((e=this.panel.view.content.element.parentElement)==null||e.removeChild(this.panel.view.content.element)),this.panel=void 0}dispose(){this.disposable.dispose(),super.dispose()}refreshFocusState(){this.focusTracker?.refreshState&&this.focusTracker.refreshState()}};function ot(e,t,n){j(t,`dv-dragged`),t.style.top=`-9999px`,document.body.appendChild(t),e.setDragImage(t,n?.x??0,n?.y??0),setTimeout(()=>{A(t,`dv-dragged`),t.remove()},0)}var st=class extends He{constructor(e,t,n,r,i){super(e,i),this.accessor=t,this.group=n,this.panel=r,this.panelTransfer=_.getInstance()}getData(e){return this.panelTransfer.setData([new g(this.accessor.id,this.group.id,this.panel.id)],g.prototype),{dispose:()=>{this.panelTransfer.clearData(g.prototype)}}}},ct=class extends D{get element(){return this._element}constructor(e,t,n){super(),this.panel=e,this.accessor=t,this.group=n,this.content=void 0,this._onPointDown=new w,this.onPointerDown=this._onPointDown.event,this._onDropped=new w,this.onDrop=this._onDropped.event,this._onDragStart=new w,this.onDragStart=this._onDragStart.event,this._element=document.createElement(`div`),this._element.className=`dv-tab`,this._element.tabIndex=0,this._element.draggable=!this.accessor.options.disableDnd,M(this.element,`dv-inactive-tab`,!0),this.dragHandler=new st(this._element,this.accessor,this.group,this.panel,!!this.accessor.options.disableDnd),this.dropTarget=new J(this._element,{acceptedTargetZones:[`left`,`right`],overlayModel:{activationSize:{value:50,type:`percentage`}},canDisplayOverlay:(e,t)=>{if(this.group.locked)return!1;let n=v();return n&&this.accessor.id===n.viewId?!0:this.group.model.canDisplayOverlay(e,t,`tab`)},getOverrideTarget:()=>n.model.dropTargetContainer?.model}),this.onWillShowOverlay=this.dropTarget.onWillShowOverlay,this.addDisposables(this._onPointDown,this._onDropped,this._onDragStart,this.dragHandler.onDragStart(e=>{if(e.dataTransfer){let t=getComputedStyle(this.element),n=this.element.cloneNode(!0);Array.from(t).forEach(e=>n.style.setProperty(e,t.getPropertyValue(e),t.getPropertyPriority(e))),n.style.position=`absolute`,ot(e.dataTransfer,n,{y:-10,x:30})}this._onDragStart.fire(e)}),this.dragHandler,T(this._element,`pointerdown`,e=>{this._onPointDown.fire(e)}),this.dropTarget.onDrop(e=>{this._onDropped.fire(e)}),this.dropTarget)}setActive(e){M(this.element,`dv-active-tab`,e),M(this.element,`dv-inactive-tab`,!e)}setContent(e){this.content&&this._element.removeChild(this.content.element),this.content=e,this._element.appendChild(this.content.element)}updateDragAndDropState(){this._element.draggable=!this.accessor.options.disableDnd,this.dragHandler.setDisabled(!!this.accessor.options.disableDnd)}dispose(){super.dispose()}},Y=class{get kind(){return this.options.kind}get nativeEvent(){return this.event.nativeEvent}get position(){return this.event.position}get defaultPrevented(){return this.event.defaultPrevented}get panel(){return this.options.panel}get api(){return this.options.api}get group(){return this.options.group}preventDefault(){this.event.preventDefault()}getData(){return this.options.getData()}constructor(e,t){this.event=e,this.options=t}},lt=class extends He{constructor(e,t,n,r){super(e,r),this.accessor=t,this.group=n,this.panelTransfer=_.getInstance(),this.addDisposables(T(e,`pointerdown`,e=>{e.shiftKey&&se(e)},!0))}isCancelled(e){return this.group.api.location.type===`floating`&&!e.shiftKey}getData(e){let t=e.dataTransfer;this.panelTransfer.setData([new g(this.accessor.id,this.group.id,null)],g.prototype);let n=window.getComputedStyle(this.el),r=n.getPropertyValue(`--dv-activegroup-visiblepanel-tab-background-color`),i=n.getPropertyValue(`--dv-activegroup-visiblepanel-tab-color`);if(t){let e=document.createElement(`div`);e.style.backgroundColor=r,e.style.color=i,e.style.padding=`2px 8px`,e.style.height=`24px`,e.style.fontSize=`11px`,e.style.lineHeight=`20px`,e.style.borderRadius=`12px`,e.style.position=`absolute`,e.style.pointerEvents=`none`,e.style.top=`-9999px`,e.textContent=`Multiple Panels (${this.group.size})`,ot(t,e,{y:-10,x:30})}return{dispose:()=>{this.panelTransfer.clearData(g.prototype)}}}},ut=class extends D{get element(){return this._element}constructor(e,t){super(),this.accessor=e,this.group=t,this._onDrop=new w,this.onDrop=this._onDrop.event,this._onDragStart=new w,this.onDragStart=this._onDragStart.event,this._element=document.createElement(`div`),this._element.className=`dv-void-container`,this._element.draggable=!this.accessor.options.disableDnd,M(this._element,`dv-draggable`,!this.accessor.options.disableDnd),this.addDisposables(this._onDrop,this._onDragStart,T(this._element,`pointerdown`,()=>{this.accessor.doSetGroupActive(this.group)})),this.handler=new lt(this._element,e,t,!!this.accessor.options.disableDnd),this.dropTarget=new J(this._element,{acceptedTargetZones:[`center`],canDisplayOverlay:(e,n)=>{let r=v();return r&&this.accessor.id===r.viewId?!0:t.model.canDisplayOverlay(e,n,`header_space`)},getOverrideTarget:()=>t.model.dropTargetContainer?.model}),this.onWillShowOverlay=this.dropTarget.onWillShowOverlay,this.addDisposables(this.handler,this.handler.onDragStart(e=>{this._onDragStart.fire(e)}),this.dropTarget.onDrop(e=>{this._onDrop.fire(e)}),this.dropTarget)}updateDragAndDropState(){this._element.draggable=!this.accessor.options.disableDnd,M(this._element,`dv-draggable`,!this.accessor.options.disableDnd),this.handler.setDisabled(!!this.accessor.options.disableDnd)}},dt=class e extends D{get element(){return this._element}get orientation(){return this._orientation}set orientation(e){this._orientation!==e&&(this._scrollOffset=0,this._orientation=e,A(this._scrollbar,`dv-scrollbar-vertical`,`dv-scrollbar-horizontal`),e===`vertical`?j(this._scrollbar,`dv-scrollbar-vertical`):j(this._scrollbar,`dv-scrollbar-horizontal`))}constructor(t){super(),this.scrollableElement=t,this._scrollOffset=0,this._orientation=`horizontal`,this._element=document.createElement(`div`),this._element.className=`dv-scrollable`,this._scrollbar=document.createElement(`div`),this._scrollbar.className=`dv-scrollbar dv-scrollbar-horizontal`,this.element.appendChild(t),this.element.appendChild(this._scrollbar),this.addDisposables(T(this.element,`wheel`,t=>{this._scrollOffset+=t.deltaY*e.MouseWheelSpeed,this.calculateScrollbarStyles()}),T(this._scrollbar,`pointerdown`,e=>{e.preventDefault(),M(this.element,`dv-scrollable-scrolling`,!0);let t=this._orientation===`horizontal`?e.clientX:e.clientY,n=this._scrollOffset,r=e=>{let r=this._orientation===`horizontal`?e.clientX-t:e.clientY-t,i=(this._orientation===`horizontal`?this.element.clientWidth:this.element.clientHeight)/(this._orientation===`horizontal`?this.scrollableElement.scrollWidth:this.scrollableElement.scrollHeight);this._scrollOffset=n+r/i,this.calculateScrollbarStyles()},i=()=>{M(this.element,`dv-scrollable-scrolling`,!1),document.removeEventListener(`pointermove`,r),document.removeEventListener(`pointerup`,i),document.removeEventListener(`pointercancel`,i)};document.addEventListener(`pointermove`,r),document.addEventListener(`pointerup`,i),document.addEventListener(`pointercancel`,i)}),T(this.element,`scroll`,()=>{this.calculateScrollbarStyles()}),T(this.scrollableElement,`scroll`,()=>{this._scrollOffset=this._orientation===`horizontal`?this.scrollableElement.scrollLeft:this.scrollableElement.scrollTop,this.calculateScrollbarStyles()}),k(this.element,()=>{M(this.element,`dv-scrollable-resizing`,!0),this._animationTimer&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(()=>{clearTimeout(this._animationTimer),M(this.element,`dv-scrollable-resizing`,!1)},500),this.calculateScrollbarStyles()}))}calculateScrollbarStyles(){let e=this._orientation===`horizontal`?this.element.clientWidth:this.element.clientHeight,t=this._orientation===`horizontal`?this.scrollableElement.scrollWidth:this.scrollableElement.scrollHeight;if(t>e){let n=e/t*e;this._orientation===`horizontal`?(this._scrollbar.style.width=`${n}px`,this._scrollbar.style.height=``):(this._scrollbar.style.height=`${n}px`,this._scrollbar.style.width=``),this._scrollOffset=I(this._scrollOffset,0,t-e),this._orientation===`horizontal`?this.scrollableElement.scrollLeft=this._scrollOffset:this.scrollableElement.scrollTop=this._scrollOffset;let r=this._scrollOffset/(t-e);this._orientation===`horizontal`?(this._scrollbar.style.left=`${(e-n)*r}px`,this._scrollbar.style.top=``):(this._scrollbar.style.top=`${(e-n)*r}px`,this._scrollbar.style.left=``)}else this._orientation===`horizontal`?(this._scrollbar.style.width=`0px`,this._scrollbar.style.left=`0px`):(this._scrollbar.style.height=`0px`,this._scrollbar.style.top=`0px`),this._scrollOffset=0}};dt.MouseWheelSpeed=1;var ft=class extends D{get showTabsOverflowControl(){return this._showTabsOverflowControl}set showTabsOverflowControl(e){if(this._showTabsOverflowControl!=e&&(this._showTabsOverflowControl=e,e)){let e=new ne(this._tabsList);this._observerDisposable.value=new D(e,e.onDidChange(e=>{let t=e.hasScrollX||e.hasScrollY;this.toggleDropdown({reset:!t})}),T(this._tabsList,`scroll`,()=>{this.toggleDropdown({reset:!1})}))}}get element(){return this._element}get panels(){return this._tabs.map(e=>e.value.panel.id)}get size(){return this._tabs.length}get tabs(){return this._tabs.map(e=>e.value)}get direction(){return this._direction}set direction(e){this._direction!==e&&(this._direction=e,this._scrollbar&&(this._scrollbar.orientation=e),A(this._tabsList,`dv-horizontal`,`dv-vertical`),e===`vertical`?j(this._tabsList,`dv-tabs-container-vertical`,`dv-vertical`):(A(this._tabsList,`dv-tabs-container-vertical`),j(this._tabsList,`dv-horizontal`)))}constructor(e,t,n){super(),this.group=e,this.accessor=t,this._observerDisposable=new O,this._scrollbar=null,this._tabs=[],this.selectedIndex=-1,this._showTabsOverflowControl=!1,this._direction=`horizontal`,this._onTabDragStart=new w,this.onTabDragStart=this._onTabDragStart.event,this._onDrop=new w,this.onDrop=this._onDrop.event,this._onWillShowOverlay=new w,this.onWillShowOverlay=this._onWillShowOverlay.event,this._onOverflowTabsChange=new w,this.onOverflowTabsChange=this._onOverflowTabsChange.event,this._tabsList=document.createElement(`div`),this._tabsList.className=`dv-tabs-container`,this.showTabsOverflowControl=n.showTabsOverflowControl,t.options.scrollbars===`native`?this._element=this._tabsList:(this._scrollbar=new dt(this._tabsList),this._scrollbar.orientation=this.direction,this._element=this._scrollbar.element,this.addDisposables(this._scrollbar)),this.addDisposables(this._onOverflowTabsChange,this._observerDisposable,this._onWillShowOverlay,this._onDrop,this._onTabDragStart,T(this.element,`pointerdown`,e=>{e.defaultPrevented||e.button===0&&this.accessor.doSetGroupActive(this.group)}),E.from(()=>{for(let{value:e,disposable:t}of this._tabs)t.dispose(),e.dispose();this._tabs=[]}))}indexOf(e){return this._tabs.findIndex(t=>t.value.panel.id===e)}isActive(e){return this.selectedIndex>-1&&this._tabs[this.selectedIndex].value===e}setActivePanel(e){let t=0;for(let n of this._tabs){let r=e.id===n.value.panel.id;if(n.value.setActive(r),r){let e=n.value.element,r=e.parentElement;(t<r.scrollLeft||t+e.clientWidth>r.scrollLeft+r.clientWidth)&&(r.scrollLeft=t)}t+=n.value.element.clientWidth}}openPanel(e,t=this._tabs.length){if(this._tabs.find(t=>t.value.panel.id===e.id))return;let n=new ct(e,this.accessor,this.group);n.setContent(e.view.tab);let r={value:n,disposable:new D(n.onDragStart(t=>{this._onTabDragStart.fire({nativeEvent:t,panel:e})}),n.onPointerDown(t=>{if(t.defaultPrevented)return;let r=!this.accessor.options.disableFloatingGroups,i=this.group.api.location.type===`floating`&&this.size===1;if(r&&!i&&t.shiftKey){t.preventDefault();let e=this.accessor.getGroupPanel(n.panel.id),{top:r,left:i}=n.element.getBoundingClientRect(),{top:a,left:o}=this.accessor.element.getBoundingClientRect();this.accessor.addFloatingGroup(e,{x:i-o,y:r-a,inDragMode:!0});return}t.button===0&&this.group.activePanel!==e&&this.group.model.openPanel(e)}),n.onDrop(e=>{this._onDrop.fire({event:e.nativeEvent,index:this._tabs.findIndex(e=>e.value===n)})}),n.onWillShowOverlay(e=>{this._onWillShowOverlay.fire(new Y(e,{kind:`tab`,panel:this.group.activePanel,api:this.accessor.api,group:this.group,getData:v}))}))};this.addTab(r,t)}delete(e){let t=this.indexOf(e),{value:n,disposable:r}=this._tabs.splice(t,1)[0];r.dispose(),n.dispose(),n.element.remove()}addTab(e,t=this._tabs.length){if(t<0||t>this._tabs.length)throw Error(`invalid location`);this._tabsList.insertBefore(e.value.element,this._tabsList.children[t]),this._tabs=[...this._tabs.slice(0,t),e,...this._tabs.slice(t)],this.selectedIndex<0&&(this.selectedIndex=t)}toggleDropdown(e){let t=e.reset?[]:this._tabs.filter(e=>!_e(e.value.element,this._tabsList)).map(e=>e.value.panel.id);this._onOverflowTabsChange.fire({tabs:t,reset:e.reset})}updateDragAndDropState(){for(let e of this._tabs)e.value.updateDragAndDropState()}},pt=e=>{let t=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t.setAttributeNS(null,`height`,e.height),t.setAttributeNS(null,`width`,e.width),t.setAttributeNS(null,`viewBox`,e.viewbox),t.setAttributeNS(null,`aria-hidden`,`false`),t.setAttributeNS(null,`focusable`,`false`),t.classList.add(`dv-svg`);let n=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);return n.setAttributeNS(null,`d`,e.path),t.appendChild(n),t},mt=()=>pt({width:`11`,height:`11`,viewbox:`0 0 28 28`,path:`M2.1 27.3L0 25.2L11.55 13.65L0 2.1L2.1 0L13.65 11.55L25.2 0L27.3 2.1L15.75 13.65L27.3 25.2L25.2 27.3L13.65 15.75L2.1 27.3Z`}),ht=()=>pt({width:`11`,height:`11`,viewbox:`0 0 15 25`,path:`M2.15 24.1L0 21.95L9.9 12.05L0 2.15L2.15 0L14.2 12.05L2.15 24.1Z`});function gt(){let e=document.createElement(`div`);e.className=`dv-tabs-overflow-dropdown-default`;let t=document.createElement(`span`);t.textContent=``;let n=ht();return e.appendChild(n),e.appendChild(t),{element:e,update:e=>{t.textContent=`${e.tabs}`}}}var _t=class extends D{get onTabDragStart(){return this.tabs.onTabDragStart}get panels(){return this.tabs.panels}get size(){return this.tabs.size}get hidden(){return this._hidden}set hidden(e){this._hidden=e,this.element.style.display=e?`none`:``}get direction(){return this._direction}set direction(e){this._direction=e,e===`vertical`?(j(this._element,`dv-groupview-header-vertical`),j(this.rightActionsContainer,`dv-right-actions-container-vertical`),this.tabs.direction=e):(A(this._element,`dv-groupview-header-vertical`),A(this.rightActionsContainer,`dv-right-actions-container-vertical`),this.tabs.direction=e)}get element(){return this._element}constructor(e,t){super(),this.accessor=e,this.group=t,this._hidden=!1,this._direction=`horizontal`,this.dropdownPart=null,this._overflowTabs=[],this._dropdownDisposable=new O,this._onDrop=new w,this.onDrop=this._onDrop.event,this._onGroupDragStart=new w,this.onGroupDragStart=this._onGroupDragStart.event,this._onWillShowOverlay=new w,this.onWillShowOverlay=this._onWillShowOverlay.event,this._element=document.createElement(`div`),this._element.className=`dv-tabs-and-actions-container`,M(this._element,`dv-full-width-single-tab`,this.accessor.options.singleTabMode===`fullwidth`),this.rightActionsContainer=document.createElement(`div`),this.rightActionsContainer.className=`dv-right-actions-container`,this.leftActionsContainer=document.createElement(`div`),this.leftActionsContainer.className=`dv-left-actions-container`,this.preActionsContainer=document.createElement(`div`),this.preActionsContainer.className=`dv-pre-actions-container`,this.tabs=new ft(t,e,{showTabsOverflowControl:!e.options.disableTabsOverflowList}),this.voidContainer=new ut(this.accessor,this.group),this._element.appendChild(this.preActionsContainer),this._element.appendChild(this.tabs.element),this._element.appendChild(this.leftActionsContainer),this._element.appendChild(this.voidContainer.element),this._element.appendChild(this.rightActionsContainer),this.addDisposables(this.tabs.onDrop(e=>this._onDrop.fire(e)),this.tabs.onWillShowOverlay(e=>this._onWillShowOverlay.fire(e)),e.onDidOptionsChange(()=>{this.tabs.showTabsOverflowControl=!e.options.disableTabsOverflowList}),this.tabs.onOverflowTabsChange(e=>{this.toggleDropdown(e)}),this.tabs,this._onWillShowOverlay,this._onDrop,this._onGroupDragStart,this.voidContainer,this.voidContainer.onDragStart(e=>{this._onGroupDragStart.fire({nativeEvent:e,group:this.group})}),this.voidContainer.onDrop(e=>{this._onDrop.fire({event:e.nativeEvent,index:this.tabs.size})}),this.voidContainer.onWillShowOverlay(e=>{this._onWillShowOverlay.fire(new Y(e,{kind:`header_space`,panel:this.group.activePanel,api:this.accessor.api,group:this.group,getData:v}))}),T(this.voidContainer.element,`pointerdown`,e=>{if(!e.defaultPrevented&&!this.accessor.options.disableFloatingGroups&&e.shiftKey&&this.group.api.location.type!==`floating`){e.preventDefault();let{top:t,left:n}=this.element.getBoundingClientRect(),{top:r,left:i}=this.accessor.element.getBoundingClientRect();this.accessor.addFloatingGroup(this.group,{x:n-i+20,y:t-r+20,inDragMode:!0})}}))}show(){this.hidden||(this.element.style.display=``)}hide(){this._element.style.display=`none`}setRightActionsElement(e){this.rightActions!==e&&(this.rightActions&&=(this.rightActions.remove(),void 0),e&&(this.rightActionsContainer.appendChild(e),this.rightActions=e))}setLeftActionsElement(e){this.leftActions!==e&&(this.leftActions&&=(this.leftActions.remove(),void 0),e&&(this.leftActionsContainer.appendChild(e),this.leftActions=e))}setPrefixActionsElement(e){this.preActions!==e&&(this.preActions&&=(this.preActions.remove(),void 0),e&&(this.preActionsContainer.appendChild(e),this.preActions=e))}isActive(e){return this.tabs.isActive(e)}indexOf(e){return this.tabs.indexOf(e)}setActive(e){}delete(e){this.tabs.delete(e),this.updateClassnames()}setActivePanel(e){this.tabs.setActivePanel(e)}openPanel(e,t=this.tabs.size){this.tabs.openPanel(e,t),this.updateClassnames()}closePanel(e){this.delete(e.id)}updateClassnames(){M(this._element,`dv-single-tab`,this.size===1)}toggleDropdown(e){let t=e.reset?[]:e.tabs;if(this._overflowTabs=t,this._overflowTabs.length>0&&this.dropdownPart){this.dropdownPart.update({tabs:t.length});return}if(this._overflowTabs.length===0){this._dropdownDisposable.dispose();return}let n=document.createElement(`div`);n.className=`dv-tabs-overflow-dropdown-root`;let r=gt();r.update({tabs:t.length}),this.dropdownPart=r,n.appendChild(r.element),this.rightActionsContainer.prepend(n),this._dropdownDisposable.value=new D(E.from(()=>{var e,t;n.remove(),(t=(e=this.dropdownPart)?.dispose)==null||t.call(e),this.dropdownPart=null}),T(n,`pointerdown`,e=>{e.preventDefault()},{capture:!0}),T(n,`click`,e=>{let t=document.createElement(`div`);t.style.overflow=`auto`,t.className=`dv-tabs-overflow-container`;for(let e of this.tabs.tabs.filter(e=>this._overflowTabs.includes(e.panel.id))){let n=this.group.panels.find(t=>t===e.panel),r=n.view.createTabRenderer(`headerOverflow`).element,i=document.createElement(`div`);M(i,`dv-tab`,!0),M(i,`dv-active-tab`,n.api.isActive),M(i,`dv-inactive-tab`,!n.api.isActive),i.addEventListener(`click`,t=>{this.accessor.popupService.close(),!t.defaultPrevented&&(e.element.scrollIntoView(),e.panel.api.setActive())}),i.appendChild(r),t.appendChild(i)}let r=xe(n);this.accessor.popupService.openPopover(t,{x:e.clientX,y:e.clientY,zIndex:r?.style.zIndex?`calc(${r.style.zIndex} * 2)`:void 0})}))}updateDragAndDropState(){this.tabs.updateDragAndDropState(),this.voidContainer.updateDragAndDropState()}},vt=class extends x{constructor(e,t,n,r,i){super(),this.nativeEvent=e,this.target=t,this.position=n,this.getData=r,this.group=i}};function yt(e){return!!e.referencePanel}function bt(e){return!!e.referenceGroup}function xt(e){return!!e.referencePanel}function St(e){return!!e.referenceGroup}var Ct=class extends b{get nativeEvent(){return this.options.nativeEvent}get position(){return this.options.position}get panel(){return this.options.panel}get group(){return this.options.group}get api(){return this.options.api}constructor(e){super(),this.options=e}getData(){return this.options.getData()}},wt=class extends Ct{get kind(){return this._kind}constructor(e){super(e),this._kind=e.kind}},Tt=class extends D{get element(){throw Error(`dockview: not supported`)}get activePanel(){return this._activePanel}get locked(){return this._locked}set locked(e){this._locked=e,M(this.container,`dv-locked-groupview`,e===`no-drop-target`||e)}get isActive(){return this._isGroupActive}get panels(){return this._panels}get size(){return this._panels.length}get isEmpty(){return this._panels.length===0}get hasWatermark(){return!!(this.watermark&&this.container.contains(this.watermark.element))}get header(){return this.tabsContainer}get isContentFocused(){return document.activeElement?re(document.activeElement,this.contentContainer.element):!1}get headerPosition(){return this._headerPosition??`top`}set headerPosition(e){this._headerPosition=e,A(this.container,`dv-groupview-header-top`,`dv-groupview-header-bottom`,`dv-groupview-header-left`,`dv-groupview-header-right`),j(this.container,`dv-groupview-header-${e}`);let t=e===`top`||e===`bottom`?`horizontal`:`vertical`;this.tabsContainer.direction=t,this.header.direction=t,this._activePanel?.layout&&this._activePanel.layout(this._width,this._height),(this._leftHeaderActions||this._rightHeaderActions||this._prefixHeaderActions)&&this.updateHeaderActions()}get location(){return this._location}set location(e){switch(this._location=e,M(this.container,`dv-groupview-floating`,!1),M(this.container,`dv-groupview-popout`,!1),e.type){case`grid`:this.contentContainer.dropTarget.setTargetZones([`top`,`bottom`,`left`,`right`,`center`]);break;case`floating`:this.contentContainer.dropTarget.setTargetZones([`center`]),this.contentContainer.dropTarget.setTargetZones(e?[`center`]:[`top`,`bottom`,`left`,`right`,`center`]),M(this.container,`dv-groupview-floating`,!0);break;case`popout`:this.contentContainer.dropTarget.setTargetZones([`center`]),M(this.container,`dv-groupview-popout`,!0)}this.groupPanel.api._onDidLocationChange.fire({location:this.location})}constructor(e,t,n,r,i){super(),this.container=e,this.accessor=t,this.id=n,this.options=r,this.groupPanel=i,this._isGroupActive=!1,this._locked=!1,this._rightHeaderActionsDisposable=new O,this._leftHeaderActionsDisposable=new O,this._prefixHeaderActionsDisposable=new O,this._location={type:`grid`},this.mostRecentlyUsed=[],this._overwriteRenderContainer=null,this._overwriteDropTargetContainer=null,this._onDidChange=new w,this.onDidChange=this._onDidChange.event,this._width=0,this._height=0,this._panels=[],this._panelDisposables=new Map,this._onMove=new w,this.onMove=this._onMove.event,this._onDidDrop=new w,this.onDidDrop=this._onDidDrop.event,this._onWillDrop=new w,this.onWillDrop=this._onWillDrop.event,this._onWillShowOverlay=new w,this.onWillShowOverlay=this._onWillShowOverlay.event,this._onTabDragStart=new w,this.onTabDragStart=this._onTabDragStart.event,this._onGroupDragStart=new w,this.onGroupDragStart=this._onGroupDragStart.event,this._onDidAddPanel=new w,this.onDidAddPanel=this._onDidAddPanel.event,this._onDidPanelTitleChange=new w,this.onDidPanelTitleChange=this._onDidPanelTitleChange.event,this._onDidPanelParametersChange=new w,this.onDidPanelParametersChange=this._onDidPanelParametersChange.event,this._onDidRemovePanel=new w,this.onDidRemovePanel=this._onDidRemovePanel.event,this._onDidActivePanelChange=new w,this.onDidActivePanelChange=this._onDidActivePanelChange.event,this._onUnhandledDragOverEvent=new w,this.onUnhandledDragOverEvent=this._onUnhandledDragOverEvent.event,M(this.container,`dv-groupview`,!0),this._api=new q(this.accessor),this.tabsContainer=new _t(this.accessor,this.groupPanel),this.contentContainer=new at(this.accessor,this),e.append(this.tabsContainer.element,this.contentContainer.element),this.header.hidden=!!r.hideHeader,this.locked=r.locked??!1,this.headerPosition=r.headerPosition??t.defaultHeaderPosition,this.addDisposables(this._onTabDragStart,this._onGroupDragStart,this._onWillShowOverlay,this._rightHeaderActionsDisposable,this._leftHeaderActionsDisposable,this._prefixHeaderActionsDisposable,this.tabsContainer.onTabDragStart(e=>{this._onTabDragStart.fire(e)}),this.tabsContainer.onGroupDragStart(e=>{this._onGroupDragStart.fire(e)}),this.tabsContainer.onDrop(e=>{this.handleDropEvent(`header`,e.event,`center`,e.index)}),this.contentContainer.onDidFocus(()=>{this.accessor.doSetGroupActive(this.groupPanel)}),this.contentContainer.onDidBlur(()=>{}),this.contentContainer.dropTarget.onDrop(e=>{this.handleDropEvent(`content`,e.nativeEvent,e.position)}),this.tabsContainer.onWillShowOverlay(e=>{this._onWillShowOverlay.fire(e)}),this.contentContainer.dropTarget.onWillShowOverlay(e=>{this._onWillShowOverlay.fire(new Y(e,{kind:`content`,panel:this.activePanel,api:this._api,group:this.groupPanel,getData:v}))}),this._onMove,this._onDidChange,this._onDidDrop,this._onWillDrop,this._onDidAddPanel,this._onDidRemovePanel,this._onDidActivePanelChange,this._onUnhandledDragOverEvent,this._onDidPanelTitleChange,this._onDidPanelParametersChange)}focusContent(){this.contentContainer.element.focus()}set renderContainer(e){this.panels.forEach(e=>{this.renderContainer.detatch(e)}),this._overwriteRenderContainer=e,this.panels.forEach(e=>{this.rerender(e)})}get renderContainer(){return this._overwriteRenderContainer??this.accessor.overlayRenderContainer}set dropTargetContainer(e){this._overwriteDropTargetContainer=e}get dropTargetContainer(){return this._overwriteDropTargetContainer??this.accessor.rootDropTargetContainer}initialize(){this.options.panels&&this.options.panels.forEach(e=>{this.doAddPanel(e)}),this.options.activePanel&&this.openPanel(this.options.activePanel),this.setActive(this.isActive,!0),this.updateContainer(),this.updateHeaderActions()}updateHeaderActions(){this.accessor.options.createRightHeaderActionComponent?(this._rightHeaderActions=this.accessor.options.createRightHeaderActionComponent(this.groupPanel),this._rightHeaderActionsDisposable.value=this._rightHeaderActions,this._rightHeaderActions.init({containerApi:this._api,api:this.groupPanel.api,group:this.groupPanel}),this.tabsContainer.setRightActionsElement(this._rightHeaderActions.element)):(this._rightHeaderActions=void 0,this._rightHeaderActionsDisposable.dispose(),this.tabsContainer.setRightActionsElement(void 0)),this.accessor.options.createLeftHeaderActionComponent?(this._leftHeaderActions=this.accessor.options.createLeftHeaderActionComponent(this.groupPanel),this._leftHeaderActionsDisposable.value=this._leftHeaderActions,this._leftHeaderActions.init({containerApi:this._api,api:this.groupPanel.api,group:this.groupPanel}),this.tabsContainer.setLeftActionsElement(this._leftHeaderActions.element)):(this._leftHeaderActions=void 0,this._leftHeaderActionsDisposable.dispose(),this.tabsContainer.setLeftActionsElement(void 0)),this.accessor.options.createPrefixHeaderActionComponent?(this._prefixHeaderActions=this.accessor.options.createPrefixHeaderActionComponent(this.groupPanel),this._prefixHeaderActionsDisposable.value=this._prefixHeaderActions,this._prefixHeaderActions.init({containerApi:this._api,api:this.groupPanel.api,group:this.groupPanel}),this.tabsContainer.setPrefixActionsElement(this._prefixHeaderActions.element)):(this._prefixHeaderActions=void 0,this._prefixHeaderActionsDisposable.dispose(),this.tabsContainer.setPrefixActionsElement(void 0))}rerender(e){this.contentContainer.renderPanel(e,{asActive:!1})}indexOf(e){return this.tabsContainer.indexOf(e.id)}toJSON(){let e={views:this.tabsContainer.panels,activeView:this._activePanel?.id,id:this.id};return this.locked!==!1&&(e.locked=this.locked),this.header.hidden&&(e.hideHeader=!0),this.headerPosition!==`top`&&(e.headerPosition=this.headerPosition),e}moveToNext(e){e||={},e.panel||(e.panel=this.activePanel);let t=e.panel?this.panels.indexOf(e.panel):-1,n;if(t<this.panels.length-1)n=t+1;else if(!e.suppressRoll)n=0;else return;this.openPanel(this.panels[n])}moveToPrevious(e){if(e||={},e.panel||(e.panel=this.activePanel),!e.panel)return;let t=this.panels.indexOf(e.panel),n;if(t>0)n=t-1;else if(!e.suppressRoll)n=this.panels.length-1;else return;this.openPanel(this.panels[n])}containsPanel(e){return this.panels.includes(e)}init(e){}update(e){}focus(){var e;(e=this._activePanel)==null||e.focus()}openPanel(e,t={}){(typeof t.index!=`number`||t.index>this.panels.length)&&(t.index=this.panels.length);let n=!!t.skipSetActive;if(e.updateParentGroup(this.groupPanel,{skipSetActive:t.skipSetActive}),this.doAddPanel(e,t.index,{skipSetActive:n}),this._activePanel===e){this.contentContainer.renderPanel(e,{asActive:!0});return}n||this.doSetActivePanel(e),t.skipSetGroupActive||this.accessor.doSetGroupActive(this.groupPanel),t.skipSetActive||this.updateContainer()}removePanel(e,t={skipSetActive:!1}){let n=typeof e==`string`?e:e.id,r=this._panels.find(e=>e.id===n);if(!r)throw Error(`invalid operation`);return this._removePanel(r,t)}closeAllPanels(){if(this.panels.length>0){let e=[...this.panels];for(let t of e)this.doClose(t)}else this.accessor.removeGroup(this.groupPanel)}closePanel(e){this.doClose(e)}doClose(e){let t=this.panels.length===1&&this.accessor.groups.length===1;this.accessor.removePanel(e,t&&this.accessor.options.noPanelsOverlay===`emptyGroup`?{removeEmptyGroup:!1}:void 0)}isPanelActive(e){return this._activePanel===e}updateActions(e){this.tabsContainer.setRightActionsElement(e)}setActive(e,t=!1){!t&&this.isActive===e||(this._isGroupActive=e,M(this.container,`dv-active-group`,e),M(this.container,`dv-inactive-group`,!e),this.tabsContainer.setActive(this.isActive),!this._activePanel&&this.panels.length>0&&this.doSetActivePanel(this.panels[0]),this.updateContainer())}layout(e,t){this._width=e,this._height=t,this.contentContainer.layout(this._width,this._height),this._activePanel?.layout&&this._activePanel.layout(this._width,this._height)}_removePanel(e,t){let n=this._activePanel===e;if(this.doRemovePanel(e),n&&this.panels.length>0){let e=this.mostRecentlyUsed[0];this.openPanel(e,{skipSetActive:t.skipSetActive,skipSetGroupActive:t.skipSetActiveGroup})}return this._activePanel&&this.panels.length===0&&this.doSetActivePanel(void 0),t.skipSetActive||this.updateContainer(),e}doRemovePanel(e){let t=this.panels.indexOf(e);if(this._activePanel===e&&this.contentContainer.closePanel(),this.tabsContainer.delete(e.id),this._panels.splice(t,1),this.mostRecentlyUsed.includes(e)){let t=this.mostRecentlyUsed.indexOf(e);this.mostRecentlyUsed.splice(t,1)}let n=this._panelDisposables.get(e.id);n&&(n.dispose(),this._panelDisposables.delete(e.id)),this._onDidRemovePanel.fire({panel:e})}doAddPanel(e,t=this.panels.length,n={skipSetActive:!1}){let r=this._panels.indexOf(e)>-1;this.tabsContainer.show(),this.contentContainer.show(),this.tabsContainer.openPanel(e,t),n.skipSetActive?e.api.renderer===`always`&&this.contentContainer.renderPanel(e,{asActive:!1}):this.contentContainer.openPanel(e),!r&&(this.updateMru(e),this.panels.splice(t,0,e),this._panelDisposables.set(e.id,new D(e.api.onDidTitleChange(e=>this._onDidPanelTitleChange.fire(e)),e.api.onDidParametersChange(e=>this._onDidPanelParametersChange.fire(e)))),this._onDidAddPanel.fire({panel:e}))}doSetActivePanel(e){this._activePanel!==e&&(this._activePanel=e,e&&(this.tabsContainer.setActivePanel(e),this.contentContainer.openPanel(e),e.layout(this._width,this._height),this.updateMru(e),this.contentContainer.refreshFocusState(),this._onDidActivePanelChange.fire({panel:e})))}updateMru(e){this.mostRecentlyUsed.includes(e)&&this.mostRecentlyUsed.splice(this.mostRecentlyUsed.indexOf(e),1),this.mostRecentlyUsed=[e,...this.mostRecentlyUsed]}updateContainer(){var e,t;if(this.panels.forEach(e=>e.runEvents()),this.isEmpty&&!this.watermark){let e=this.accessor.createWatermarkComponent();e.init({containerApi:this._api,group:this.groupPanel}),this.watermark=e,T(this.watermark.element,`pointerdown`,()=>{this.isActive||this.accessor.doSetGroupActive(this.groupPanel)}),this.contentContainer.element.appendChild(this.watermark.element)}!this.isEmpty&&this.watermark&&(this.watermark.element.remove(),(t=(e=this.watermark).dispose)==null||t.call(e),this.watermark=void 0)}canDisplayOverlay(e,t,n){let r=new vt(e,n,t,v,this.accessor.getPanel(this.id));return this._onUnhandledDragOverEvent.fire(r),r.isAccepted}handleDropEvent(e,t,n,r){if(this.locked===`no-drop-target`)return;function i(){switch(e){case`header`:return typeof r==`number`?`tab`:`header_space`;case`content`:return`content`}}let a=typeof r==`number`?this.panels[r]:void 0,o=new wt({nativeEvent:t,position:n,panel:a,getData:()=>v(),kind:i(),group:this.groupPanel,api:this._api});if(this._onWillDrop.fire(o),o.defaultPrevented)return;let s=v();if(s&&s.viewId===this.accessor.id){if(e===`content`&&s.groupId===this.id&&(n===`center`||s.panelId===null)||e===`header`&&s.groupId===this.id&&s.panelId===null)return;if(s.panelId===null){let{groupId:e}=s;this._onMove.fire({target:n,groupId:e,index:r});return}if(this.tabsContainer.indexOf(s.panelId)!==-1&&this.tabsContainer.size===1)return;let{groupId:t,panelId:i}=s;if(this.id===t&&!n&&this.tabsContainer.indexOf(i)===r)return;this._onMove.fire({target:n,groupId:s.groupId,itemId:s.panelId,index:r})}else this._onDidDrop.fire(new Ct({nativeEvent:t,position:n,panel:a,getData:()=>v(),group:this.groupPanel,api:this._api}))}updateDragAndDropState(){this.tabsContainer.updateDragAndDropState()}dispose(){var e,t,n;super.dispose(),(e=this.watermark)==null||e.element.remove(),(n=(t=this.watermark)?.dispose)==null||n.call(t),this.watermark=void 0;for(let e of this.panels)e.dispose();this.tabsContainer.dispose(),this.contentContainer.dispose()}},Et=class extends rt{constructor(e,t,n){super(e,t),this._onDidConstraintsChangeInternal=new w,this.onDidConstraintsChangeInternal=this._onDidConstraintsChangeInternal.event,this._onDidConstraintsChange=new w,this.onDidConstraintsChange=this._onDidConstraintsChange.event,this._onDidSizeChange=new w,this.onDidSizeChange=this._onDidSizeChange.event,this.addDisposables(this._onDidConstraintsChangeInternal,this._onDidConstraintsChange,this._onDidSizeChange),n&&this.initialize(n)}setConstraints(e){this._onDidConstraintsChangeInternal.fire(e)}setSize(e){this._onDidSizeChange.fire(e)}},Dt=class extends it{get priority(){return this._priority}get snap(){return this._snap}get minimumWidth(){return this.__minimumWidth()}get minimumHeight(){return this.__minimumHeight()}get maximumHeight(){return this.__maximumHeight()}get maximumWidth(){return this.__maximumWidth()}__minimumWidth(){let e=typeof this._minimumWidth==`function`?this._minimumWidth():this._minimumWidth;return e!==this._evaluatedMinimumWidth&&(this._evaluatedMinimumWidth=e,this.updateConstraints()),e}__maximumWidth(){let e=typeof this._maximumWidth==`function`?this._maximumWidth():this._maximumWidth;return e!==this._evaluatedMaximumWidth&&(this._evaluatedMaximumWidth=e,this.updateConstraints()),e}__minimumHeight(){let e=typeof this._minimumHeight==`function`?this._minimumHeight():this._minimumHeight;return e!==this._evaluatedMinimumHeight&&(this._evaluatedMinimumHeight=e,this.updateConstraints()),e}__maximumHeight(){let e=typeof this._maximumHeight==`function`?this._maximumHeight():this._maximumHeight;return e!==this._evaluatedMaximumHeight&&(this._evaluatedMaximumHeight=e,this.updateConstraints()),e}get isActive(){return this.api.isActive}get isVisible(){return this.api.isVisible}constructor(e,t,n,r){super(e,t,r??new Et(e,t)),this._evaluatedMinimumWidth=0,this._evaluatedMaximumWidth=2**53-1,this._evaluatedMinimumHeight=0,this._evaluatedMaximumHeight=2**53-1,this._minimumWidth=0,this._minimumHeight=0,this._maximumWidth=2**53-1,this._maximumHeight=2**53-1,this._snap=!1,this._onDidChange=new w,this.onDidChange=this._onDidChange.event,typeof n?.minimumWidth==`number`&&(this._minimumWidth=n.minimumWidth),typeof n?.maximumWidth==`number`&&(this._maximumWidth=n.maximumWidth),typeof n?.minimumHeight==`number`&&(this._minimumHeight=n.minimumHeight),typeof n?.maximumHeight==`number`&&(this._maximumHeight=n.maximumHeight),this.api.initialize(this),this.addDisposables(this.api.onWillVisibilityChange(e=>{let{isVisible:t}=e,{accessor:n}=this._params;n.setVisible(this,t)}),this.api.onActiveChange(()=>{let{accessor:e}=this._params;e.doSetGroupActive(this)}),this.api.onDidConstraintsChangeInternal(e=>{(typeof e.minimumWidth==`number`||typeof e.minimumWidth==`function`)&&(this._minimumWidth=e.minimumWidth),(typeof e.minimumHeight==`number`||typeof e.minimumHeight==`function`)&&(this._minimumHeight=e.minimumHeight),(typeof e.maximumWidth==`number`||typeof e.maximumWidth==`function`)&&(this._maximumWidth=e.maximumWidth),(typeof e.maximumHeight==`number`||typeof e.maximumHeight==`function`)&&(this._maximumHeight=e.maximumHeight)}),this.api.onDidSizeChange(e=>{this._onDidChange.fire({height:e.height,width:e.width})}),this._onDidChange)}setVisible(e){this.api._onDidVisibilityChange.fire({isVisible:e})}setActive(e){this.api._onDidActiveChange.fire({isActive:e})}init(e){e.maximumHeight&&(this._maximumHeight=e.maximumHeight),e.minimumHeight&&(this._minimumHeight=e.minimumHeight),e.maximumWidth&&(this._maximumWidth=e.maximumWidth),e.minimumWidth&&(this._minimumWidth=e.minimumWidth),this._priority=e.priority,this._snap=!!e.snap,super.init(e),typeof e.isVisible==`boolean`&&this.setVisible(e.isVisible)}updateConstraints(){this.api._onDidConstraintsChange.fire({minimumWidth:this._evaluatedMinimumWidth,maximumWidth:this._evaluatedMaximumWidth,minimumHeight:this._evaluatedMinimumHeight,maximumHeight:this._evaluatedMaximumHeight})}toJSON(){let e=super.toJSON(),t=e=>e===2**53-1?void 0:e,n=e=>e<=0?void 0:e;return Object.assign(Object.assign({},e),{minimumHeight:n(this.minimumHeight),maximumHeight:t(this.maximumHeight),minimumWidth:n(this.minimumWidth),maximumWidth:t(this.maximumWidth),snap:this.snap,priority:this.priority})}},X=`dockview: DockviewGroupPanelApiImpl not initialized`,Ot=class extends Et{get location(){if(!this._group)throw Error(X);return this._group.model.location}constructor(e,t){super(e,`__dockviewgroup__`),this.accessor=t,this._onDidLocationChange=new w,this.onDidLocationChange=this._onDidLocationChange.event,this._onDidActivePanelChange=new w,this.onDidActivePanelChange=this._onDidActivePanelChange.event,this.addDisposables(this._onDidLocationChange,this._onDidActivePanelChange,this._onDidVisibilityChange.event(e=>{e.isVisible&&this._pendingSize&&(super.setSize(this._pendingSize),this._pendingSize=void 0)}))}setSize(e){this._pendingSize=Object.assign({},e),super.setSize(e)}close(){if(this._group)return this.accessor.removeGroup(this._group)}getWindow(){return this.location.type===`popout`?this.location.getWindow():window}setHeaderPosition(e){if(!this._group)throw Error(X);this._group.model.headerPosition=e}getHeaderPosition(){if(!this._group)throw Error(X);return this._group.model.headerPosition}moveTo(e){if(!this._group)throw Error(X);let t=e.group??this.accessor.addGroup({direction:Ye(e.position??`right`),skipSetActive:e.skipSetActive??!1});this.accessor.moveGroupOrPanel({from:{groupId:this._group.id},to:{group:t,position:e.group?e.position??`center`:`center`,index:e.index},skipSetActive:e.skipSetActive})}maximize(){if(!this._group)throw Error(X);this.location.type===`grid`&&this.accessor.maximizeGroup(this._group)}isMaximized(){if(!this._group)throw Error(X);return this.accessor.isMaximizedGroup(this._group)}exitMaximized(){if(!this._group)throw Error(X);this.isMaximized()&&this.accessor.exitMaximizedGroup()}initialize(e){this._group=e}},kt=100,At=100,jt=class extends Dt{get minimumWidth(){if(typeof this._explicitConstraints.minimumWidth==`number`)return this._explicitConstraints.minimumWidth;let e=this.activePanel?.minimumWidth;return typeof e==`number`?e:super.__minimumWidth()}get minimumHeight(){if(typeof this._explicitConstraints.minimumHeight==`number`)return this._explicitConstraints.minimumHeight;let e=this.activePanel?.minimumHeight;return typeof e==`number`?e:super.__minimumHeight()}get maximumWidth(){if(typeof this._explicitConstraints.maximumWidth==`number`)return this._explicitConstraints.maximumWidth;let e=this.activePanel?.maximumWidth;return typeof e==`number`?e:super.__maximumWidth()}get maximumHeight(){if(typeof this._explicitConstraints.maximumHeight==`number`)return this._explicitConstraints.maximumHeight;let e=this.activePanel?.maximumHeight;return typeof e==`number`?e:super.__maximumHeight()}get panels(){return this._model.panels}get activePanel(){return this._model.activePanel}get size(){return this._model.size}get model(){return this._model}get locked(){return this._model.locked}set locked(e){this._model.locked=e}get header(){return this._model.header}constructor(e,t,n){super(t,`groupview_default`,{minimumHeight:n.constraints?.minimumHeight??At,minimumWidth:n.constraints?.minimumWidth??kt,maximumHeight:n.constraints?.maximumHeight,maximumWidth:n.constraints?.maximumWidth},new Ot(t,e)),this._explicitConstraints={},this.api.initialize(this),this._model=new Tt(this.element,e,t,n,this),this.addDisposables(this.model.onDidActivePanelChange(e=>{this.api._onDidActivePanelChange.fire(e)}),this.api.onDidConstraintsChangeInternal(e=>{e.minimumWidth!==void 0&&(this._explicitConstraints.minimumWidth=typeof e.minimumWidth==`function`?e.minimumWidth():e.minimumWidth),e.minimumHeight!==void 0&&(this._explicitConstraints.minimumHeight=typeof e.minimumHeight==`function`?e.minimumHeight():e.minimumHeight),e.maximumWidth!==void 0&&(this._explicitConstraints.maximumWidth=typeof e.maximumWidth==`function`?e.maximumWidth():e.maximumWidth),e.maximumHeight!==void 0&&(this._explicitConstraints.maximumHeight=typeof e.maximumHeight==`function`?e.maximumHeight():e.maximumHeight)}))}focus(){this.api.isActive||this.api.setActive(),super.focus()}initialize(){this._model.initialize()}setActive(e){super.setActive(e),this.model.setActive(e)}layout(e,t){super.layout(e,t),this.model.layout(e,t)}getComponent(){return this._model}toJSON(){return this.model.toJSON()}},Mt={name:`abyss`,className:`dockview-theme-abyss`},Nt=class extends Et{get location(){return this.group.api.location}get title(){return this.panel.title}get isGroupActive(){return this.group.isActive}get renderer(){return this.panel.renderer}set group(e){let t=this._group;this._group!==e&&(this._group=e,this._onDidGroupChange.fire({}),this.setupGroupEventListeners(t),this._onDidLocationChange.fire({location:this.group.api.location}))}get group(){return this._group}get tabComponent(){return this._tabComponent}constructor(e,t,n,r,i){super(e.id,r),this.panel=e,this.accessor=n,this._onDidTitleChange=new w,this.onDidTitleChange=this._onDidTitleChange.event,this._onDidActiveGroupChange=new w,this.onDidActiveGroupChange=this._onDidActiveGroupChange.event,this._onDidGroupChange=new w,this.onDidGroupChange=this._onDidGroupChange.event,this._onDidRendererChange=new w,this.onDidRendererChange=this._onDidRendererChange.event,this._onDidLocationChange=new w,this.onDidLocationChange=this._onDidLocationChange.event,this.groupEventsDisposable=new O,this._tabComponent=i,this.initialize(e),this._group=t,this.setupGroupEventListeners(),this.addDisposables(this.groupEventsDisposable,this._onDidRendererChange,this._onDidTitleChange,this._onDidGroupChange,this._onDidActiveGroupChange,this._onDidLocationChange)}getWindow(){return this.group.api.getWindow()}moveTo(e){this.accessor.moveGroupOrPanel({from:{groupId:this._group.id,panelId:this.panel.id},to:{group:e.group??this._group,position:e.group?e.position??`center`:`center`,index:e.index},skipSetActive:e.skipSetActive})}setTitle(e){this.panel.setTitle(e)}setRenderer(e){this.panel.setRenderer(e)}close(){this.group.model.closePanel(this.panel)}maximize(){this.group.api.maximize()}isMaximized(){return this.group.api.isMaximized()}exitMaximized(){this.group.api.exitMaximized()}setupGroupEventListeners(e){let t=e?.isActive??!1;this.groupEventsDisposable.value=new D(this.group.api.onDidVisibilityChange(e=>{let t=!e.isVisible&&this.isVisible,n=e.isVisible&&!this.isVisible,r=this.group.model.isPanelActive(this.panel);(t||n&&r)&&this._onDidVisibilityChange.fire(e)}),this.group.api.onDidLocationChange(e=>{this.group===this.panel.group&&this._onDidLocationChange.fire(e)}),this.group.api.onDidActiveChange(()=>{this.group===this.panel.group&&t!==this.isGroupActive&&(t=this.isGroupActive,this._onDidActiveGroupChange.fire({isActive:this.isGroupActive}))}))}},Z=class extends D{get params(){return this._params}get title(){return this._title}get group(){return this._group}get renderer(){return this._renderer??this.accessor.renderer}get minimumWidth(){return this._minimumWidth}get minimumHeight(){return this._minimumHeight}get maximumWidth(){return this._maximumWidth}get maximumHeight(){return this._maximumHeight}constructor(e,t,n,r,i,a,o,s){super(),this.id=e,this.accessor=r,this.containerApi=i,this.view=o,this._renderer=s.renderer,this._group=a,this._minimumWidth=s.minimumWidth,this._minimumHeight=s.minimumHeight,this._maximumWidth=s.maximumWidth,this._maximumHeight=s.maximumHeight,this.api=new Nt(this,this._group,r,t,n),this.addDisposables(this.api.onActiveChange(()=>{r.setActivePanel(this)}),this.api.onDidSizeChange(e=>{this.group.api.setSize(e)}),this.api.onDidRendererChange(()=>{this.group.model.rerender(this)}))}init(e){this._params=e.params,this.view.init(Object.assign(Object.assign({},e),{api:this.api,containerApi:this.containerApi})),this.setTitle(e.title)}focus(){let e=new nt;this.api._onWillFocus.fire(e),!e.defaultPrevented&&(this.api.isActive||this.api.setActive())}toJSON(){return{id:this.id,contentComponent:this.view.contentComponent,tabComponent:this.view.tabComponent,params:Object.keys(this._params||{}).length>0?this._params:void 0,title:this.title,renderer:this._renderer,minimumHeight:this._minimumHeight,maximumHeight:this._maximumHeight,minimumWidth:this._minimumWidth,maximumWidth:this._maximumWidth}}setTitle(e){e!==this.title&&(this._title=e,this.api._onDidTitleChange.fire({title:e}))}setRenderer(e){e!==this.renderer&&(this._renderer=e,this.api._onDidRendererChange.fire({renderer:e}))}update(e){this._params=Object.assign(Object.assign({},this._params??{}),e.params);for(let t of Object.keys(e.params))e.params[t]===void 0&&delete this._params[t];this.view.update({params:this._params})}updateFromStateModel(e){this._maximumHeight=e.maximumHeight,this._minimumHeight=e.minimumHeight,this._maximumWidth=e.maximumWidth,this._minimumWidth=e.minimumWidth,this.update({params:e.params??{}}),this.setTitle(e.title??this.id),this.setRenderer(e.renderer??this.accessor.renderer)}updateParentGroup(e,t){this._group=e,this.api.group=this._group;let n=this._group.model.isPanelActive(this),r=this.group.api.isActive&&n;t?.skipSetActive||this.api.isActive!==r&&this.api._onDidActiveChange.fire({isActive:this.group.api.isActive&&n}),this.api.isVisible!==n&&this.api._onDidVisibilityChange.fire({isVisible:n})}runEvents(){let e=this._group.model.isPanelActive(this),t=this.group.api.isActive&&e;this.api.isActive!==t&&this.api._onDidActiveChange.fire({isActive:this.group.api.isActive&&e}),this.api.isVisible!==e&&this.api._onDidVisibilityChange.fire({isVisible:e})}layout(e,t){this.api._onDidDimensionChange.fire({width:e,height:t}),this.view.layout(e,t)}dispose(){this.api.dispose(),this.view.dispose()}},Pt=class extends D{get element(){return this._element}constructor(){super(),this._element=document.createElement(`div`),this._element.className=`dv-default-tab`,this._content=document.createElement(`div`),this._content.className=`dv-default-tab-content`,this.action=document.createElement(`div`),this.action.className=`dv-default-tab-action`,this.action.appendChild(mt()),this._element.appendChild(this._content),this._element.appendChild(this.action),this.render()}init(e){this._title=e.title,this.addDisposables(e.api.onDidTitleChange(e=>{this._title=e.title,this.render()}),T(this.action,`pointerdown`,e=>{e.preventDefault()}),T(this.action,`click`,t=>{t.defaultPrevented||(t.preventDefault(),e.api.close())})),this.render()}render(){this._content.textContent!==this._title&&(this._content.textContent=this._title??``)}},Ft=class{get content(){return this._content}get tab(){return this._tab}constructor(e,t,n,r){this.accessor=e,this.id=t,this.contentComponent=n,this.tabComponent=r,this._content=this.createContentComponent(this.id,n),this._tab=this.createTabComponent(this.id,r)}createTabRenderer(e){var t;let n=this.createTabComponent(this.id,this.tabComponent);return this._params&&n.init(Object.assign(Object.assign({},this._params),{tabLocation:e})),this._updateEvent&&((t=n.update)==null||t.call(n,this._updateEvent)),n}init(e){this._params=e,this.content.init(e),this.tab.init(Object.assign(Object.assign({},e),{tabLocation:`header`}))}layout(e,t){var n,r;(r=(n=this.content).layout)==null||r.call(n,e,t)}update(e){var t,n,r,i;this._updateEvent=e,(n=(t=this.content).update)==null||n.call(t,e),(i=(r=this.tab).update)==null||i.call(r,e)}dispose(){var e,t,n,r;(t=(e=this.content).dispose)==null||t.call(e),(r=(n=this.tab).dispose)==null||r.call(n)}createContentComponent(e,t){return this.accessor.options.createComponent({id:e,name:t})}createTabComponent(e,t){let n=t??this.accessor.options.defaultTabComponent;if(n){if(this.accessor.options.createTabComponent)return this.accessor.options.createTabComponent({id:e,name:n})||new Pt;console.warn(`dockview: tabComponent '${t}' was not found. falling back to the default tab.`)}return new Pt}},It=class{constructor(e){this.accessor=e}fromJSON(e,t){let n=e.id,r=e.params,i=e.title,a=e.view,o=a?a.content.id:e.contentComponent??`unknown`,s=a?a.tab?.id:e.tabComponent,c=new Ft(this.accessor,n,o,s),l=new Z(n,o,s,this.accessor,new q(this.accessor),t,c,{renderer:e.renderer,minimumWidth:e.minimumWidth,minimumHeight:e.minimumHeight,maximumWidth:e.maximumWidth,maximumHeight:e.maximumHeight});return l.init({title:i??n,params:r??{}}),l}},Lt=class extends D{get element(){return this._element}constructor(){super(),this._element=document.createElement(`div`),this._element.className=`dv-watermark`}init(e){}},Q=new class{constructor(){this._orderedList=[]}push(e){this._orderedList=[...this._orderedList.filter(t=>t!==e),e],this.update()}destroy(e){this._orderedList=this._orderedList.filter(t=>t!==e),this.update()}update(){for(let e=0;e<this._orderedList.length;e++)this._orderedList[e].setAttribute(`aria-level`,`${e}`),this._orderedList[e].style.zIndex=`calc(var(--dv-overlay-z-index, 999) + ${e*2})`}},Rt=class e extends D{set minimumInViewportWidth(e){this.options.minimumInViewportWidth=e}set minimumInViewportHeight(e){this.options.minimumInViewportHeight=e}get element(){return this._element}get isVisible(){return this._isVisible}constructor(e){super(),this.options=e,this._element=document.createElement(`div`),this._onDidChange=new w,this.onDidChange=this._onDidChange.event,this._onDidChangeEnd=new w,this.onDidChangeEnd=this._onDidChangeEnd.event,this.addDisposables(this._onDidChange,this._onDidChangeEnd),this._element.className=`dv-resize-container`,this._isVisible=!0,this.setupResize(`top`),this.setupResize(`bottom`),this.setupResize(`left`),this.setupResize(`right`),this.setupResize(`topleft`),this.setupResize(`topright`),this.setupResize(`bottomleft`),this.setupResize(`bottomright`),this._element.appendChild(this.options.content),this.options.container.appendChild(this._element),this.setBounds(Object.assign(Object.assign(Object.assign(Object.assign({height:this.options.height,width:this.options.width},`top`in this.options&&{top:this.options.top}),`bottom`in this.options&&{bottom:this.options.bottom}),`left`in this.options&&{left:this.options.left}),`right`in this.options&&{right:this.options.right})),Q.push(this._element)}setVisible(e){e!==this.isVisible&&(this._isVisible=e,M(this.element,`dv-hidden`,!this.isVisible))}bringToFront(){Q.push(this._element)}setBounds(e={}){typeof e.height==`number`&&(this._element.style.height=`${e.height}px`),typeof e.width==`number`&&(this._element.style.width=`${e.width}px`),`top`in e&&typeof e.top==`number`&&(this._element.style.top=`${e.top}px`,this._element.style.bottom=`auto`,this.verticalAlignment=`top`),`bottom`in e&&typeof e.bottom==`number`&&(this._element.style.bottom=`${e.bottom}px`,this._element.style.top=`auto`,this.verticalAlignment=`bottom`),`left`in e&&typeof e.left==`number`&&(this._element.style.left=`${e.left}px`,this._element.style.right=`auto`,this.horiziontalAlignment=`left`),`right`in e&&typeof e.right==`number`&&(this._element.style.right=`${e.right}px`,this._element.style.left=`auto`,this.horiziontalAlignment=`right`);let t=this.options.container.getBoundingClientRect(),n=this._element.getBoundingClientRect(),r=Math.max(0,this.getMinimumWidth(n.width)),i=Math.max(0,this.getMinimumHeight(n.height));if(this.verticalAlignment===`top`){let e=I(n.top-t.top,-i,Math.max(0,t.height-n.height+i));this._element.style.top=`${e}px`,this._element.style.bottom=`auto`}if(this.verticalAlignment===`bottom`){let e=I(t.bottom-n.bottom,-i,Math.max(0,t.height-n.height+i));this._element.style.bottom=`${e}px`,this._element.style.top=`auto`}if(this.horiziontalAlignment===`left`){let e=I(n.left-t.left,-r,Math.max(0,t.width-n.width+r));this._element.style.left=`${e}px`,this._element.style.right=`auto`}if(this.horiziontalAlignment===`right`){let e=I(t.right-n.right,-r,Math.max(0,t.width-n.width+r));this._element.style.right=`${e}px`,this._element.style.left=`auto`}this._onDidChange.fire()}toJSON(){let e=this.options.container.getBoundingClientRect(),t=this._element.getBoundingClientRect(),n={};return this.verticalAlignment===`top`?n.top=parseFloat(this._element.style.top):this.verticalAlignment===`bottom`?n.bottom=parseFloat(this._element.style.bottom):n.top=t.top-e.top,this.horiziontalAlignment===`left`?n.left=parseFloat(this._element.style.left):this.horiziontalAlignment===`right`?n.right=parseFloat(this._element.style.right):n.left=t.left-e.left,n.width=t.width,n.height=t.height,n}setupDrag(e,t={inDragMode:!1}){let n=new O,r=()=>{let e=null,t=N();n.value=new D({dispose:()=>{t.release()}},T(window,`pointermove`,t=>{let n=this.options.container.getBoundingClientRect(),r=t.clientX-n.left,i=t.clientY-n.top;M(this._element,`dv-resize-container-dragging`,!0);let a=this._element.getBoundingClientRect();e===null&&(e={x:t.clientX-a.left,y:t.clientY-a.top});let o=Math.max(0,this.getMinimumWidth(a.width)),s=Math.max(0,this.getMinimumHeight(a.height)),c=I(i-e.y,-s,Math.max(0,n.height-a.height+s)),l=I(e.y-i+n.height-a.height,-s,Math.max(0,n.height-a.height+s)),u=I(r-e.x,-o,Math.max(0,n.width-a.width+o)),d=I(e.x-r+n.width-a.width,-o,Math.max(0,n.width-a.width+o)),f={};c<=l?f.top=c:f.bottom=l,u<=d?f.left=u:f.right=d,this.setBounds(f)}),T(window,`pointerup`,()=>{M(this._element,`dv-resize-container-dragging`,!1),n.dispose(),this._onDidChangeEnd.fire()}))};this.addDisposables(n,T(e,`pointerdown`,e=>{if(e.defaultPrevented){e.preventDefault();return}ce(e)||r()}),T(this.options.content,`pointerdown`,e=>{e.defaultPrevented||ce(e)||e.shiftKey&&r()}),T(this.options.content,`pointerdown`,()=>{Q.push(this._element)},!0)),t.inDragMode&&r()}setupResize(t){let n=document.createElement(`div`);n.className=`dv-resize-handle-${t}`,this._element.appendChild(n);let r=new O;this.addDisposables(r,T(n,`pointerdown`,n=>{n.preventDefault();let i=null,a=N();r.value=new D(T(window,`pointermove`,n=>{let r=this.options.container.getBoundingClientRect(),a=this._element.getBoundingClientRect(),o=n.clientY-r.top,s=n.clientX-r.left;i===null&&(i={originalY:o,originalHeight:a.height,originalX:s,originalWidth:a.width});let c,l,u,d,f,p,m=()=>{let t=i.originalY+i.originalHeight>r.height?Math.max(0,r.height-e.MINIMUM_HEIGHT):Math.max(0,i.originalY+i.originalHeight-e.MINIMUM_HEIGHT);c=I(o,0,t),u=i.originalY+i.originalHeight-c,l=r.height-c-u},h=()=>{c=i.originalY-i.originalHeight;let t=c<0&&typeof this.options.minimumInViewportHeight==`number`?-c+this.options.minimumInViewportHeight:e.MINIMUM_HEIGHT,n=r.height-Math.max(0,c);u=I(o-c,t,n),l=r.height-c-u},g=()=>{let t=i.originalX+i.originalWidth>r.width?Math.max(0,r.width-e.MINIMUM_WIDTH):Math.max(0,i.originalX+i.originalWidth-e.MINIMUM_WIDTH);d=I(s,0,t),p=i.originalX+i.originalWidth-d,f=r.width-d-p},_=()=>{d=i.originalX-i.originalWidth;let t=d<0&&typeof this.options.minimumInViewportWidth==`number`?-d+this.options.minimumInViewportWidth:e.MINIMUM_WIDTH,n=r.width-Math.max(0,d);p=I(s-d,t,n),f=r.width-d-p};switch(t){case`top`:m();break;case`bottom`:h();break;case`left`:g();break;case`right`:_();break;case`topleft`:m(),g();break;case`topright`:m(),_();break;case`bottomleft`:h(),g();break;case`bottomright`:h(),_()}let v={};c<=l?v.top=c:v.bottom=l,d<=f?v.left=d:v.right=f,v.height=u,v.width=p,this.setBounds(v)}),{dispose:()=>{a.release()}},T(window,`pointerup`,()=>{r.dispose(),this._onDidChangeEnd.fire()}))}))}getMinimumWidth(e){return typeof this.options.minimumInViewportWidth==`number`?e-this.options.minimumInViewportWidth:0}getMinimumHeight(e){return typeof this.options.minimumInViewportHeight==`number`?e-this.options.minimumInViewportHeight:0}dispose(){Q.destroy(this._element),this._element.remove(),super.dispose()}};Rt.MINIMUM_HEIGHT=20,Rt.MINIMUM_WIDTH=20;var zt=class extends D{constructor(e,t){super(),this.group=e,this.overlay=t,this.addDisposables(t)}position(e){this.overlay.setBounds(e)}},Bt=100,$={left:100,top:100,width:300,height:300},Vt=100,Ht=class{constructor(){this.cache=new Map,this.currentFrameId=0,this.rafId=null}getPosition(e){let t=this.cache.get(e);if(t&&t.frameId===this.currentFrameId)return t.rect;this.scheduleFrameUpdate();let n=ue(e);return this.cache.set(e,{rect:n,frameId:this.currentFrameId}),n}invalidate(){this.currentFrameId++}scheduleFrameUpdate(){this.rafId||=requestAnimationFrame(()=>{this.currentFrameId++,this.rafId=null})}};function Ut(){let e=document.createElement(`div`);return e.tabIndex=-1,e}var Wt=class extends D{constructor(e,t){super(),this.element=e,this.accessor=t,this.map={},this._disposed=!1,this.positionCache=new Ht,this.pendingUpdates=new Set,this.addDisposables(E.from(()=>{for(let e of Object.values(this.map))e.disposable.dispose(),e.destroy.dispose();this._disposed=!0}))}updateAllPositions(){if(!this._disposed){this.positionCache.invalidate();for(let e of Object.values(this.map))e.panel.api.isVisible&&e.resize&&e.resize()}}detatch(e){if(this.map[e.api.id]){let{disposable:t,destroy:n}=this.map[e.api.id];return t.dispose(),n.dispose(),delete this.map[e.api.id],!0}return!1}attach(e){let{panel:t,referenceContainer:n}=e;if(!this.map[t.api.id]){let e=Ut();e.className=`dv-render-overlay`,this.map[t.api.id]={panel:t,disposable:E.NONE,destroy:E.NONE,element:e}}let r=this.map[t.api.id].element;t.view.content.element.parentElement!==r&&r.appendChild(t.view.content.element),r.parentElement!==this.element&&this.element.appendChild(r);let i=()=>{let e=t.api.id;this.pendingUpdates.has(e)||(this.pendingUpdates.add(e),requestAnimationFrame(()=>{if(this.pendingUpdates.delete(e),this.isDisposed||!this.map[e])return;let i=this.positionCache.getPosition(n.element),a=this.positionCache.getPosition(this.element),o=i.left-a.left,s=i.top-a.top,c=i.width,l=i.height;r.style.left=`${o}px`,r.style.top=`${s}px`,r.style.width=`${c}px`,r.style.height=`${l}px`,M(r,`dv-render-overlay-float`,t.group.api.location.type===`floating`)}))},a=()=>{t.api.isVisible&&(this.positionCache.invalidate(),i()),r.style.display=t.api.isVisible?``:`none`},o=new O,s=()=>{t.api.location.type===`floating`?queueMicrotask(()=>{let e=this.accessor.floatingGroups.find(e=>e.group===t.api.group);if(!e)return;let n=e.overlay.element,i=()=>{let e=Number(n.getAttribute(`aria-level`));r.style.zIndex=`calc(var(--dv-overlay-z-index, 999) + ${e*2+1})`},a=new MutationObserver(()=>{i()});o.value=E.from(()=>a.disconnect()),a.observe(n,{attributeFilter:[`aria-level`],attributes:!0}),i()}):r.style.zIndex=``},c=new D(o,new Ue(r,{onDragEnd:e=>{n.dropTarget.dnd.onDragEnd(e)},onDragEnter:e=>{n.dropTarget.dnd.onDragEnter(e)},onDragLeave:e=>{n.dropTarget.dnd.onDragLeave(e)},onDrop:e=>{n.dropTarget.dnd.onDrop(e)},onDragOver:e=>{n.dropTarget.dnd.onDragOver(e)}}),t.api.onDidVisibilityChange(()=>{a()}),t.api.onDidDimensionsChange(()=>{t.api.isVisible&&i()}),t.api.onDidLocationChange(()=>{s()}));return this.map[t.api.id].destroy=E.from(()=>{var e;t.view.content.element.parentElement===r&&r.removeChild(t.view.content.element),(e=r.parentElement)==null||e.removeChild(r)}),s(),queueMicrotask(()=>{this.isDisposed||a()}),this.map[t.api.id].disposable.dispose(),this.map[t.api.id].disposable=c,this.map[t.api.id].resize=i,r}};function Gt(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})}var Kt=class extends D{get window(){return this._window?.value??null}constructor(e,t,n){super(),this.target=e,this.className=t,this.options=n,this._onWillClose=new w,this.onWillClose=this._onWillClose.event,this._onDidClose=new w,this.onDidClose=this._onDidClose.event,this._window=null,this.addDisposables(this._onWillClose,this._onDidClose,{dispose:()=>{this.close()}})}dimensions(){if(!this._window)return null;let e=this._window.value.screenX;return{top:this._window.value.screenY,left:e,width:this._window.value.innerWidth,height:this._window.value.innerHeight}}close(){var e,t;this._window&&(this._onWillClose.fire(),(t=(e=this.options).onWillClose)==null||t.call(e,{id:this.target,window:this._window.value}),this._window.disposable.dispose(),this._window=null,this._onDidClose.fire())}open(){var e,t;return Gt(this,void 0,void 0,function*(){if(this._window)throw Error(`instance of popout window is already open`);let n=`${this.options.url}`,r=Object.entries({top:this.options.top,left:this.options.left,width:this.options.width,height:this.options.height}).map(([e,t])=>`${e}=${t}`).join(`,`),i=window.open(n,this.target,r);if(!i)return null;let a=new D;this._window={value:i,disposable:a},a.addDisposables(E.from(()=>{i.close()}),T(window,`beforeunload`,()=>{this.close()}));let o=this.createPopoutWindowContainer();return this.className&&o.classList.add(this.className),(t=(e=this.options).onDidOpen)==null||t.call(e,{id:this.target,window:i}),new Promise((e,t)=>{i.addEventListener(`unload`,e=>{}),i.addEventListener(`load`,()=>{try{let t=i.document;t.title=document.title,t.body.appendChild(o),le(t,window.document.styleSheets),T(i,`beforeunload`,()=>{this.close()}),e(o)}catch(e){t(e)}})})})}createPopoutWindowContainer(){let e=document.createElement(`div`);return e.classList.add(`dv-popout-window`),e.id=`dv-popout-window`,e.style.position=`absolute`,e.style.width=`100%`,e.style.height=`100%`,e.style.top=`0px`,e.style.left=`0px`,e}},qt=class extends D{constructor(e){super(),this.accessor=e,this.init()}init(){let e=new Set,t=new Set;this.addDisposables(this.accessor.onDidAddPanel(t=>{if(e.has(t.api.id))throw Error(`dockview: Invalid event sequence. [onDidAddPanel] called for panel ${t.api.id} but panel already exists`);e.add(t.api.id)}),this.accessor.onDidRemovePanel(t=>{if(e.has(t.api.id))e.delete(t.api.id);else throw Error(`dockview: Invalid event sequence. [onDidRemovePanel] called for panel ${t.api.id} but panel does not exists`)}),this.accessor.onDidAddGroup(e=>{if(t.has(e.api.id))throw Error(`dockview: Invalid event sequence. [onDidAddGroup] called for group ${e.api.id} but group already exists`);t.add(e.api.id)}),this.accessor.onDidRemoveGroup(e=>{if(t.has(e.api.id))t.delete(e.api.id);else throw Error(`dockview: Invalid event sequence. [onDidRemoveGroup] called for group ${e.api.id} but group does not exists`)}))}},Jt=class extends D{constructor(e){super(),this.root=e,this._active=null,this._activeDisposable=new O,this._element=document.createElement(`div`),this._element.className=`dv-popover-anchor`,this._element.style.position=`relative`,this.root.prepend(this._element),this.addDisposables(E.from(()=>{this.close()}),this._activeDisposable)}openPopover(e,t){this.close();let n=document.createElement(`div`);n.style.position=`absolute`,n.style.zIndex=t.zIndex??`var(--dv-overlay-z-index)`,n.appendChild(e);let r=this._element.getBoundingClientRect(),i=r.left,a=r.top;n.style.top=`${t.y-a}px`,n.style.left=`${t.x-i}px`,this._element.appendChild(n),this._active=n,this._activeDisposable.value=new D(T(window,`pointerdown`,e=>{let t=e.target;if(!(t instanceof HTMLElement))return;let r=t;for(;r&&r!==n;)r=r?.parentElement??null;r||this.close()}),T(window,`resize`,()=>{this.close()})),requestAnimationFrame(()=>{be(n,this.root)})}close(){this._active&&=(this._active.remove(),this._activeDisposable.dispose(),null)}},Yt=class extends D{get disabled(){return this._disabled}set disabled(e){var t;this.disabled!==e&&(this._disabled=e,e&&((t=this.model)==null||t.clear()))}get model(){if(!this.disabled)return{clear:()=>{var e;this._model&&((e=this._model.root.parentElement)==null||e.removeChild(this._model.root)),this._model=void 0},exists:()=>!!this._model,getElements:(e,t)=>{let n=this._outline!==t;if(this._outline=t,this._model)return this._model.changed=n,this._model;let r=this.createContainer(),i=this.createAnchor();if(this._model={root:r,overlay:i,changed:n},r.appendChild(i),this.element.appendChild(r),e?.target instanceof HTMLElement){let t=e.target.getBoundingClientRect(),n=this.element.getBoundingClientRect();i.style.left=`${t.left-n.left}px`,i.style.top=`${t.top-n.top}px`}return this._model}}}constructor(e,t){super(),this.element=e,this._disabled=!1,this._disabled=t.disabled,this.addDisposables(E.from(()=>{var e;(e=this.model)==null||e.clear()}))}createContainer(){let e=document.createElement(`div`);return e.className=`dv-drop-target-container`,e}createAnchor(){let e=document.createElement(`div`);return e.className=`dv-drop-target-anchor`,e.style.visibility=`hidden`,e}},Xt={activationSize:{type:`pixels`,value:10},size:{type:`pixels`,value:20}};function Zt(e){let t=e.from.activePanel;[...e.from.panels].map(t=>{let n=e.from.model.removePanel(t);return e.from.model.renderContainer.detatch(t),n}).forEach(n=>{e.to.model.openPanel(n,{skipSetActive:t!==n,skipSetGroupActive:!0})})}var Qt=class extends Ve{get orientation(){return this.gridview.orientation}get totalPanels(){return this.panels.length}get panels(){return this.groups.flatMap(e=>e.panels)}get options(){return this._options}get activePanel(){let e=this.activeGroup;if(e)return e.activePanel}get renderer(){return this.options.defaultRenderer??`onlyWhenVisible`}get defaultHeaderPosition(){return this.options.defaultHeaderPosition??`top`}get api(){return this._api}get floatingGroups(){return this._floatingGroups}get popoutRestorationPromise(){return this._popoutRestorationPromise}constructor(e,t){super(e,{proportionalLayout:!0,orientation:R.HORIZONTAL,styles:t.hideBorders?{separatorBorder:`transparent`}:void 0,disableAutoResizing:t.disableAutoResizing,locked:t.locked,margin:t.theme?.gap??0,className:t.className}),this.nextGroupId=Ee(),this._deserializer=new It(this),this._watermark=null,this._onWillDragPanel=new w,this.onWillDragPanel=this._onWillDragPanel.event,this._onWillDragGroup=new w,this.onWillDragGroup=this._onWillDragGroup.event,this._onDidDrop=new w,this.onDidDrop=this._onDidDrop.event,this._onWillDrop=new w,this.onWillDrop=this._onWillDrop.event,this._onWillShowOverlay=new w,this.onWillShowOverlay=this._onWillShowOverlay.event,this._onUnhandledDragOverEvent=new w,this.onUnhandledDragOverEvent=this._onUnhandledDragOverEvent.event,this._onDidRemovePanel=new w,this.onDidRemovePanel=this._onDidRemovePanel.event,this._onDidAddPanel=new w,this.onDidAddPanel=this._onDidAddPanel.event,this._onDidPopoutGroupSizeChange=new w,this.onDidPopoutGroupSizeChange=this._onDidPopoutGroupSizeChange.event,this._onDidPopoutGroupPositionChange=new w,this.onDidPopoutGroupPositionChange=this._onDidPopoutGroupPositionChange.event,this._onDidOpenPopoutWindowFail=new w,this.onDidOpenPopoutWindowFail=this._onDidOpenPopoutWindowFail.event,this._onDidLayoutFromJSON=new w,this.onDidLayoutFromJSON=this._onDidLayoutFromJSON.event,this._onDidActivePanelChange=new w({replay:!0}),this.onDidActivePanelChange=this._onDidActivePanelChange.event,this._onDidMovePanel=new w,this.onDidMovePanel=this._onDidMovePanel.event,this._onDidMaximizedGroupChange=new w,this.onDidMaximizedGroupChange=this._onDidMaximizedGroupChange.event,this._floatingGroups=[],this._popoutGroups=[],this._popoutRestorationPromise=Promise.resolve(),this._onDidRemoveGroup=new w,this.onDidRemoveGroup=this._onDidRemoveGroup.event,this._onDidAddGroup=new w,this.onDidAddGroup=this._onDidAddGroup.event,this._onDidOptionsChange=new w,this.onDidOptionsChange=this._onDidOptionsChange.event,this._onDidActiveGroupChange=new w,this.onDidActiveGroupChange=this._onDidActiveGroupChange.event,this._moving=!1,this._options=t,this.popupService=new Jt(this.element),this._themeClassnames=new he(this.element),this._api=new q(this),this.rootDropTargetContainer=new Yt(this.element,{disabled:!0}),this.overlayRenderContainer=new Wt(this.gridview.element,this),this._rootDropTarget=new J(this.element,{className:`dv-drop-target-edge`,canDisplayOverlay:(e,t)=>{let n=v();if(n)return n.viewId===this.id?t!==`center`||this.gridview.length===0:!1;if(t===`center`&&this.gridview.length!==0)return!1;let r=new vt(e,`edge`,t,v);return this._onUnhandledDragOverEvent.fire(r),r.isAccepted},acceptedTargetZones:[`top`,`bottom`,`left`,`right`,`center`],overlayModel:t.rootOverlayModel??Xt,getOverrideTarget:()=>this.rootDropTargetContainer?.model}),this.updateDropTargetModel(t),M(this.gridview.element,`dv-dockview`,!0),M(this.element,`dv-debug`,!!t.debug),this.updateTheme(),this.updateWatermark(),t.debug&&this.addDisposables(new qt(this)),this.addDisposables(this.rootDropTargetContainer,this.overlayRenderContainer,this._onWillDragPanel,this._onWillDragGroup,this._onWillShowOverlay,this._onDidActivePanelChange,this._onDidAddPanel,this._onDidRemovePanel,this._onDidLayoutFromJSON,this._onDidDrop,this._onWillDrop,this._onDidMovePanel,this._onDidMovePanel.event(()=>{this.debouncedUpdateAllPositions()}),this._onDidAddGroup,this._onDidRemoveGroup,this._onDidActiveGroupChange,this._onUnhandledDragOverEvent,this._onDidMaximizedGroupChange,this._onDidOptionsChange,this._onDidPopoutGroupSizeChange,this._onDidPopoutGroupPositionChange,this._onDidOpenPopoutWindowFail,this.onDidViewVisibilityChangeMicroTaskQueue(()=>{this.updateWatermark()}),this.onDidAdd(e=>{this._moving||this._onDidAddGroup.fire(e)}),this.onDidRemove(e=>{this._moving||this._onDidRemoveGroup.fire(e)}),this.onDidActiveChange(e=>{this._moving||this._onDidActiveGroupChange.fire(e)}),this.onDidMaximizedChange(e=>{this._onDidMaximizedGroupChange.fire({group:e.panel,isMaximized:e.isMaximized})}),y.any(this.onDidAdd,this.onDidRemove)(()=>{this.updateWatermark()}),y.any(this.onDidAddPanel,this.onDidRemovePanel,this.onDidAddGroup,this.onDidRemove,this.onDidMovePanel,this.onDidActivePanelChange,this.onDidPopoutGroupPositionChange,this.onDidPopoutGroupSizeChange)(()=>{this._bufferOnDidLayoutChange.fire()}),E.from(()=>{for(let e of[...this._floatingGroups])e.dispose();for(let e of[...this._popoutGroups])e.disposable.dispose()}),this._rootDropTarget,this._rootDropTarget.onWillShowOverlay(e=>{this.gridview.length>0&&e.position===`center`||this._onWillShowOverlay.fire(new Y(e,{kind:`edge`,panel:void 0,api:this._api,group:void 0,getData:v}))}),this._rootDropTarget.onDrop(e=>{let t=new wt({nativeEvent:e.nativeEvent,position:e.position,panel:void 0,api:this._api,group:void 0,getData:v,kind:`edge`});if(this._onWillDrop.fire(t),t.defaultPrevented)return;let n=v();n?this.moveGroupOrPanel({from:{groupId:n.groupId,panelId:n.panelId??void 0},to:{group:this.orthogonalize(e.position),position:`center`}}):this._onDidDrop.fire(new Ct({nativeEvent:e.nativeEvent,position:e.position,panel:void 0,api:this._api,group:void 0,getData:v}))}),this._rootDropTarget)}setVisible(e,t){switch(e.api.location.type){case`grid`:super.setVisible(e,t);break;case`floating`:{let n=this.floatingGroups.find(t=>t.group===e);n&&(n.overlay.setVisible(t),e.api._onDidVisibilityChange.fire({isVisible:t}));break}case`popout`:console.warn(`dockview: You cannot hide a group that is in a popout window`)}}addPopoutGroup(e,t){if(e instanceof Z&&e.group.size===1)return this.addPopoutGroup(e.group,t);let n=me(this.gridview.element),r=this.element;function i(){return t?.position?t.position:e instanceof jt?e.element.getBoundingClientRect():e.group?e.group.element.getBoundingClientRect():r.getBoundingClientRect()}let a=i(),o=t?.overridePopoutGroup?.id??this.getNextGroupId(),s=new Kt(`${this.id}-${o}`,n??``,{url:t?.popoutUrl??this.options?.popoutUrl??`/popout.html`,left:window.screenX+a.left,top:window.screenY+a.top,width:a.width,height:a.height,onDidOpen:t?.onDidOpen,onWillClose:t?.onWillClose}),c=new D(s,s.onDidClose(()=>{c.dispose()}));return s.open().then(n=>{if(s.isDisposed)return!1;let r=t?.referenceGroup?t.referenceGroup:e instanceof Z?e.group:e,i=e.api.location.type,a=r.element.parentElement!==null,l;if(a?t?.overridePopoutGroup?l=t.overridePopoutGroup:(l=this.createGroup({id:o}),n&&this._onDidAddGroup.fire(l)):l=r,n===null)return console.error(`dockview: failed to create popout. perhaps you need to allow pop-ups for this website`),c.dispose(),this._onDidOpenPopoutWindowFail.fire(),this.movingLock(()=>Zt({from:l,to:r})),r.api.isVisible||r.api.setVisible(!0),!1;let u=document.createElement(`div`);u.className=`dv-overlay-render-container`;let d=new Wt(u,this);l.model.renderContainer=d,l.layout(s.window.innerWidth,s.window.innerHeight);let f;if(!t?.overridePopoutGroup&&a){if(e instanceof Z)this.movingLock(()=>{let t=r.model.removePanel(e);l.model.openPanel(t)});else switch(this.movingLock(()=>Zt({from:r,to:l})),i){case`grid`:r.api.setVisible(!1);break;case`floating`:case`popout`:f=this._floatingGroups.find(t=>t.group.api.id===e.api.id)?.overlay.toJSON(),this.removeGroup(r)}}n.classList.add(`dv-dockview`),n.style.overflow=`hidden`,n.appendChild(u),n.appendChild(l.element);let p=document.createElement(`div`),m=new Yt(p,{disabled:this.rootDropTargetContainer.disabled});n.appendChild(p),l.model.dropTargetContainer=m,l.model.location={type:`popout`,getWindow:()=>s.window,popoutUrl:t?.popoutUrl},a&&e.api.location.type===`grid`&&e.api.setVisible(!1),this.doSetGroupAndPanelActive(l),c.addDisposables(l.api.onDidActiveChange(e=>{var t;e.isActive&&((t=s.window)==null||t.focus())}),l.api.onWillFocus(()=>{var e;(e=s.window)==null||e.focus()}));let h,g=a&&r&&this.getPanel(r.id),_={window:s,popoutGroup:l,referenceGroup:g?r.id:void 0,disposable:{dispose:()=>(c.dispose(),h)}},v=ve(s.window);return c.addDisposables(v,ye(s.window,()=>{this._onDidPopoutGroupSizeChange.fire({width:s.window.innerWidth,height:s.window.innerHeight,group:l})}),v.event(()=>{this._onDidPopoutGroupPositionChange.fire({screenX:s.window.screenX,screenY:s.window.screenX,group:l})}),T(s.window,`resize`,()=>{l.layout(s.window.innerWidth,s.window.innerHeight)}),d,E.from(()=>{if(!this.isDisposed){if(a&&this.getPanel(r.id))this.movingLock(()=>Zt({from:l,to:r})),r.api.isVisible||r.api.setVisible(!0),this.getPanel(l.id)&&this.doRemoveGroup(l,{skipPopoutAssociated:!0});else if(this.getPanel(l.id)){if(l.model.renderContainer=this.overlayRenderContainer,l.model.dropTargetContainer=this.rootDropTargetContainer,h=l,!this._popoutGroups.find(e=>e.popoutGroup===l))return;f?this.addFloatingGroup(l,{height:f.height,width:f.width,position:f}):(this.doRemoveGroup(l,{skipDispose:!0,skipActive:!0,skipPopoutReturn:!0}),l.model.location={type:`grid`},this.movingLock(()=>{this.doAddGroup(l,[0])})),this.doSetGroupAndPanelActive(l)}}})),this._popoutGroups.push(_),this.updateWatermark(),!0}).catch(e=>(console.error(`dockview: failed to create popout.`,e),!1))}addFloatingGroup(e,t){let n;if(e instanceof Z)n=this.createGroup(),this._onDidAddGroup.fire(n),this.movingLock(()=>this.removePanel(e,{removeEmptyGroup:!0,skipDispose:!0,skipSetActiveGroup:!0})),this.movingLock(()=>n.model.openPanel(e,{skipSetGroupActive:!0}));else{n=e;let r=this._popoutGroups.find(e=>e.popoutGroup===n)?.referenceGroup,i=r?this.getPanel(r):void 0;typeof t?.skipRemoveGroup==`boolean`&&t.skipRemoveGroup||(i?(this.movingLock(()=>Zt({from:e,to:i})),this.doRemoveGroup(e,{skipPopoutReturn:!0,skipPopoutAssociated:!0}),this.doRemoveGroup(i,{skipDispose:!0}),n=i):this.doRemoveGroup(e,{skipDispose:!0,skipPopoutReturn:!0,skipPopoutAssociated:!1}))}function r(){if(t?.position){let e={};return`left`in t.position?e.left=Math.max(t.position.left,0):`right`in t.position?e.right=Math.max(t.position.right,0):e.left=$.left,`top`in t.position?e.top=Math.max(t.position.top,0):`bottom`in t.position?e.bottom=Math.max(t.position.bottom,0):e.top=$.top,e.width=typeof t.width==`number`?Math.max(t.width,0):$.width,e.height=typeof t.height==`number`?Math.max(t.height,0):$.height,e}return{left:typeof t?.x==`number`?Math.max(t.x,0):$.left,top:typeof t?.y==`number`?Math.max(t.y,0):$.top,width:typeof t?.width==`number`?Math.max(t.width,0):$.width,height:typeof t?.height==`number`?Math.max(t.height,0):$.height}}let i=r(),a=new Rt(Object.assign(Object.assign({container:this.gridview.element,content:n.element},i),{minimumInViewportWidth:this.options.floatingGroupBounds===`boundedWithinViewport`?void 0:this.options.floatingGroupBounds?.minimumWidthWithinViewport??Bt,minimumInViewportHeight:this.options.floatingGroupBounds===`boundedWithinViewport`?void 0:this.options.floatingGroupBounds?.minimumHeightWithinViewport??Bt})),o=n.element.querySelector(`.dv-void-container`);if(!o)throw Error(`dockview: failed to find drag handle`);a.setupDrag(o,{inDragMode:typeof t?.inDragMode==`boolean`&&t.inDragMode});let s=new zt(n,a),c=new D(n.api.onDidActiveChange(e=>{e.isActive&&a.bringToFront()}),k(n.element,e=>{let{width:t,height:r}=e.contentRect;n.layout(t,r)}));s.addDisposables(a.onDidChange(()=>{n.layout(n.width,n.height)}),a.onDidChangeEnd(()=>{this._bufferOnDidLayoutChange.fire()}),n.onDidChange(e=>{a.setBounds({height:e?.height,width:e?.width})}),{dispose:()=>{c.dispose(),Te(this._floatingGroups,s),n.model.location={type:`grid`},this.updateWatermark()}}),this._floatingGroups.push(s),n.model.location={type:`floating`},t?.skipActiveGroup||this.doSetGroupAndPanelActive(n),this.updateWatermark()}orthogonalize(e,t){switch(this.gridview.normalize(),e){case`top`:case`bottom`:this.gridview.orientation===R.HORIZONTAL&&this.gridview.insertOrthogonalSplitviewAtRoot();break;case`left`:case`right`:this.gridview.orientation===R.VERTICAL&&this.gridview.insertOrthogonalSplitviewAtRoot()}switch(e){case`top`:case`left`:case`center`:return this.createGroupAtLocation([0],void 0,t);case`bottom`:case`right`:return this.createGroupAtLocation([this.gridview.length],void 0,t);default:throw Error(`dockview: unsupported position ${e}`)}}updateOptions(e){if(super.updateOptions(e),`floatingGroupBounds`in e)for(let t of this._floatingGroups){switch(e.floatingGroupBounds){case`boundedWithinViewport`:t.overlay.minimumInViewportHeight=void 0,t.overlay.minimumInViewportWidth=void 0;break;case void 0:t.overlay.minimumInViewportHeight=Bt,t.overlay.minimumInViewportWidth=Bt;break;default:t.overlay.minimumInViewportHeight=e.floatingGroupBounds?.minimumHeightWithinViewport,t.overlay.minimumInViewportWidth=e.floatingGroupBounds?.minimumWidthWithinViewport}t.overlay.setBounds()}this.updateDropTargetModel(e);let t=this.options.disableDnd;if(this._options=Object.assign(Object.assign({},this.options),e),t!==this.options.disableDnd&&this.updateDragAndDropState(),`theme`in e&&this.updateTheme(),`createRightHeaderActionComponent`in e||`createLeftHeaderActionComponent`in e||`createPrefixHeaderActionComponent`in e)for(let e of this.groups)e.model.updateHeaderActions();this.layout(this.gridview.width,this.gridview.height,!0)}layout(e,t,n){if(super.layout(e,t,n),this._floatingGroups)for(let e of this._floatingGroups)e.overlay.setBounds()}updateDragAndDropState(){for(let e of this.groups)e.model.updateDragAndDropState()}focus(){var e;(e=this.activeGroup)==null||e.focus()}getGroupPanel(e){return this.panels.find(t=>t.id===e)}setActivePanel(e){e.group.model.openPanel(e),this.doSetGroupAndPanelActive(e.group)}moveToNext(e={}){if(!e.group){if(!this.activeGroup)return;e.group=this.activeGroup}if(e.includePanel&&e.group&&e.group.activePanel!==e.group.panels[e.group.panels.length-1]){e.group.model.moveToNext({suppressRoll:!0});return}let t=W(e.group.element),n=this.gridview.next(t)?.view;this.doSetGroupAndPanelActive(n)}moveToPrevious(e={}){if(!e.group){if(!this.activeGroup)return;e.group=this.activeGroup}if(e.includePanel&&e.group&&e.group.activePanel!==e.group.panels[0]){e.group.model.moveToPrevious({suppressRoll:!0});return}let t=W(e.group.element),n=this.gridview.previous(t)?.view;n&&this.doSetGroupAndPanelActive(n)}toJSON(){let e=this.gridview.serialize(),t=this.panels.reduce((e,t)=>(e[t.id]=t.toJSON(),e),{}),n=this._floatingGroups.map(e=>({data:e.group.toJSON(),position:e.overlay.toJSON()})),r=this._popoutGroups.map(e=>({data:e.popoutGroup.toJSON(),gridReferenceGroup:e.referenceGroup,position:e.window.dimensions(),url:e.popoutGroup.api.location.type===`popout`?e.popoutGroup.api.location.popoutUrl:void 0})),i={grid:e,panels:t,activeGroup:this.activeGroup?.id};return n.length>0&&(i.floatingGroups=n),r.length>0&&(i.popoutGroups=r),i}fromJSON(e,t){let n=new Map,r;if(t?.reuseExistingPanels){r=this.createGroup(),this._groups.delete(r.api.id);let t=Object.keys(e.panels);for(let e of this.panels)t.includes(e.api.id)&&n.set(e.api.id,e);this.movingLock(()=>{Array.from(n.values()).forEach(e=>{this.moveGroupOrPanel({from:{groupId:e.api.group.api.id,panelId:e.api.id},to:{group:r,position:`center`},keepEmptyGroups:!0})})})}if(this.clear(),typeof e!=`object`||!e)throw Error(`dockview: serialized layout must be a non-null object`);let{grid:i,panels:a,activeGroup:o}=e;if(i.root.type!==`branch`||!Array.isArray(i.root.data))throw Error(`dockview: root must be of type branch`);try{let t=this.width,s=this.height,c=e=>{let{id:t,locked:i,hideHeader:o,headerPosition:s,views:c,activeView:l}=e;if(typeof t!=`string`)throw Error(`dockview: group id must be of type string`);let u=this.createGroup({id:t,locked:!!i,hideHeader:!!o,headerPosition:s});this._onDidAddGroup.fire(u);let d=[];for(let e of c){let t=n.get(e);if(r&&t)this.movingLock(()=>{r.model.removePanel(t)}),d.push(t),t.updateFromStateModel(a[e]);else{let t=this._deserializer.fromJSON(a[e],u);d.push(t)}}for(let e=0;e<c.length;e++){let t=d[e],r=typeof l==`string`&&l===t.id;n.has(t.api.id)?this.movingLock(()=>{u.model.openPanel(t,{skipSetActive:!r,skipSetGroupActive:!0})}):u.model.openPanel(t,{skipSetActive:!r,skipSetGroupActive:!0})}return!u.activePanel&&u.panels.length>0&&u.model.openPanel(u.panels[u.panels.length-1],{skipSetGroupActive:!0}),u};this.gridview.deserialize(i,{fromJSON:e=>c(e.data)}),this.layout(t,s,!0);let l=e.floatingGroups??[];for(let e of l){let{data:t,position:n}=e,r=c(t);this.addFloatingGroup(r,{position:n,width:n.width,height:n.height,skipRemoveGroup:!0,inDragMode:!1})}let u=e.popoutGroups??[],d=[];u.forEach((e,t)=>{let{data:n,position:r,gridReferenceGroup:i,url:a}=e,o=c(n),s=new Promise(e=>{setTimeout(()=>{this.addPopoutGroup(o,{position:r??void 0,overridePopoutGroup:i?o:void 0,referenceGroup:i?this.getPanel(i):void 0,popoutUrl:a}),e()},t*Vt)});d.push(s)}),this._popoutRestorationPromise=Promise.all(d).then(()=>void 0);for(let e of this._floatingGroups)e.overlay.setBounds();if(typeof o==`string`){let e=this.getPanel(o);e&&this.doSetGroupAndPanelActive(e)}}catch(e){console.error(`dockview: failed to deserialize layout. Reverting changes`,e);for(let e of this.groups)for(let t of e.panels)this.removePanel(t,{removeEmptyGroup:!1,skipDispose:!1});for(let e of this.groups)e.dispose(),this._groups.delete(e.id),this._onDidRemoveGroup.fire(e);for(let e of[...this._floatingGroups])e.dispose();throw this.clear(),e}this.updateWatermark(),this.debouncedUpdateAllPositions(),this._onDidLayoutFromJSON.fire()}clear(){let e=Array.from(this._groups.values()).map(e=>e.value),t=!!this.activeGroup;for(let t of e)this.removeGroup(t,{skipActive:!0});t&&this.doSetGroupAndPanelActive(void 0),this.gridview.clear()}closeAllGroups(){for(let e of this._groups.entries()){let[t,n]=e;n.value.model.closeAllPanels()}}addPanel(e){if(this.panels.find(t=>t.id===e.id))throw Error(`dockview: panel with id ${e.id} already exists`);let t;if(e.position&&e.floating)throw Error(`dockview: you can only provide one of: position, floating as arguments to .addPanel(...)`);let n={width:e.initialWidth,height:e.initialHeight},r;if(e.position){if(yt(e.position)){let n=typeof e.position.referencePanel==`string`?this.getGroupPanel(e.position.referencePanel):e.position.referencePanel;if(r=e.position.index,!n)throw Error(`dockview: referencePanel '${e.position.referencePanel}' does not exist`);t=this.findGroup(n)}else if(bt(e.position)){if(t=typeof e.position.referenceGroup==`string`?this._groups.get(e.position.referenceGroup)?.value:e.position.referenceGroup,r=e.position.index,!t)throw Error(`dockview: referenceGroup '${e.position.referenceGroup}' does not exist`)}else{let t=this.orthogonalize(Je(e.position.direction)),i=this.createPanel(e,t);return t.model.openPanel(i,{skipSetActive:e.inactive,skipSetGroupActive:e.inactive,index:r}),e.inactive||this.doSetGroupAndPanelActive(t),t.api.setSize({height:n?.height,width:n?.width}),i}}else t=this.activeGroup;let i;if(t){let a=Be(e.position?.direction||`within`);if(e.floating){let t=this.createGroup();this._onDidAddGroup.fire(t);let n=typeof e.floating==`object`&&e.floating!==null?e.floating:{};this.addFloatingGroup(t,Object.assign(Object.assign({},n),{inDragMode:!1,skipRemoveGroup:!0,skipActiveGroup:!0})),i=this.createPanel(e,t),t.model.openPanel(i,{skipSetActive:e.inactive,skipSetGroupActive:e.inactive,index:r})}else if(t.api.location.type===`floating`||a===`center`)i=this.createPanel(e,t),t.model.openPanel(i,{skipSetActive:e.inactive,skipSetGroupActive:e.inactive,index:r}),t.api.setSize({width:n?.width,height:n?.height}),e.inactive||this.doSetGroupAndPanelActive(t);else{let o=W(t.element),s=G(this.gridview.orientation,o,a),c=this.createGroupAtLocation(s,this.orientationAtLocation(s)===R.VERTICAL?n?.height:n?.width);i=this.createPanel(e,c),c.model.openPanel(i,{skipSetActive:e.inactive,skipSetGroupActive:e.inactive,index:r}),e.inactive||this.doSetGroupAndPanelActive(c)}}else if(e.floating){let t=this.createGroup();this._onDidAddGroup.fire(t);let n=typeof e.floating==`object`&&e.floating!==null?e.floating:{};this.addFloatingGroup(t,Object.assign(Object.assign({},n),{inDragMode:!1,skipRemoveGroup:!0,skipActiveGroup:!0})),i=this.createPanel(e,t),t.model.openPanel(i,{skipSetActive:e.inactive,skipSetGroupActive:e.inactive,index:r})}else{let t=this.createGroupAtLocation([0],this.gridview.orientation===R.VERTICAL?n?.height:n?.width);i=this.createPanel(e,t),t.model.openPanel(i,{skipSetActive:e.inactive,skipSetGroupActive:e.inactive,index:r}),e.inactive||this.doSetGroupAndPanelActive(t)}return i}removePanel(e,t={removeEmptyGroup:!0}){let n=e.group;if(!n)throw Error(`dockview: cannot remove panel ${e.id}. it's missing a group.`);n.model.removePanel(e,{skipSetActiveGroup:t.skipSetActiveGroup}),t.skipDispose||(e.group.model.renderContainer.detatch(e),e.dispose()),n.size===0&&t.removeEmptyGroup&&this.removeGroup(n,{skipActive:t.skipSetActiveGroup})}createWatermarkComponent(){return this.options.createWatermarkComponent?this.options.createWatermarkComponent():new Lt}updateWatermark(){var e,t;if(this.groups.filter(e=>e.api.location.type===`grid`&&e.api.isVisible).length===0){if(!this._watermark){this._watermark=this.createWatermarkComponent(),this._watermark.init({containerApi:new q(this)});let e=document.createElement(`div`);e.className=`dv-watermark-container`,fe(e,`watermark-component`),e.appendChild(this._watermark.element),this.gridview.element.appendChild(e)}}else this._watermark&&=(this._watermark.element.parentElement.remove(),(t=(e=this._watermark).dispose)==null||t.call(e),null)}addGroup(e){if(e){let t;if(xt(e)){let n=typeof e.referencePanel==`string`?this.panels.find(t=>t.id===e.referencePanel):e.referencePanel;if(!n)throw Error(`dockview: reference panel ${e.referencePanel} does not exist`);if(t=this.findGroup(n),!t)throw Error(`dockview: reference group for reference panel ${e.referencePanel} does not exist`)}else if(St(e)){if(t=typeof e.referenceGroup==`string`?this._groups.get(e.referenceGroup)?.value:e.referenceGroup,!t)throw Error(`dockview: reference group ${e.referenceGroup} does not exist`)}else{let t=this.orthogonalize(Je(e.direction),e);return e.skipSetActive||this.doSetGroupAndPanelActive(t),t}let n=Be(e.direction||`within`),r=W(t.element),i=G(this.gridview.orientation,r,n),a=this.createGroup(e),o=this.getLocationOrientation(i)===R.VERTICAL?e.initialHeight:e.initialWidth;return this.doAddGroup(a,i,o),e.skipSetActive||this.doSetGroupAndPanelActive(a),a}{let t=this.createGroup(e);return this.doAddGroup(t),this.doSetGroupAndPanelActive(t),t}}getLocationOrientation(e){return e.length%2==0&&this.gridview.orientation===R.HORIZONTAL?R.HORIZONTAL:R.VERTICAL}removeGroup(e,t){this.doRemoveGroup(e,t)}doRemoveGroup(e,t){let n=[...e.panels];if(!t?.skipDispose)for(let e of n)this.removePanel(e,{removeEmptyGroup:!1,skipDispose:t?.skipDispose??!1});let r=this.activePanel;if(e.api.location.type===`floating`){let n=this._floatingGroups.find(t=>t.group===e);if(n){if(t?.skipDispose||(n.group.dispose(),this._groups.delete(e.id),this._onDidRemoveGroup.fire(e)),Te(this._floatingGroups,n),n.dispose(),!t?.skipActive&&this._activeGroup===e){let e=Array.from(this._groups.values());this.doSetGroupAndPanelActive(e.length>0?e[0].value:void 0)}return n.group}throw Error(`dockview: failed to find floating group`)}if(e.api.location.type===`popout`){let n=this._popoutGroups.find(t=>t.popoutGroup===e);if(n){if(!t?.skipDispose){if(!t?.skipPopoutAssociated){let e=n.referenceGroup?this.getPanel(n.referenceGroup):void 0;e&&e.panels.length===0&&this.removeGroup(e)}n.popoutGroup.dispose(),this._groups.delete(e.id),this._onDidRemoveGroup.fire(e)}Te(this._popoutGroups,n);let r=n.disposable.dispose();if(!t?.skipPopoutReturn&&r&&(this.doAddGroup(r,[0]),this.doSetGroupAndPanelActive(r)),!t?.skipActive&&this._activeGroup===e){let e=Array.from(this._groups.values());this.doSetGroupAndPanelActive(e.length>0?e[0].value:void 0)}return this.updateWatermark(),n.popoutGroup}throw Error(`dockview: failed to find popout group`)}let i=super.doRemoveGroup(e,t);return t?.skipActive||this.activePanel!==r&&this._onDidActivePanelChange.fire(this.activePanel),i}debouncedUpdateAllPositions(){this._updatePositionsFrameId!==void 0&&cancelAnimationFrame(this._updatePositionsFrameId),this._updatePositionsFrameId=requestAnimationFrame(()=>{this._updatePositionsFrameId=void 0,this.overlayRenderContainer.updateAllPositions()})}movingLock(e){let t=this._moving;try{return this._moving=!0,e()}finally{this._moving=t}}moveGroupOrPanel(e){let t=e.to.group,n=e.from.groupId,r=e.from.panelId,i=e.to.position,a=e.to.index,o=n?this._groups.get(n)?.value:void 0;if(!o)throw Error(`dockview: Failed to find group id ${n}`);if(r===void 0){this.moveGroup({from:{group:o},to:{group:t,position:i},skipSetActive:e.skipSetActive});return}if(!i||i===`center`){let n=this.movingLock(()=>o.model.removePanel(r,{skipSetActive:!1,skipSetActiveGroup:!0}));if(!n)throw Error(`dockview: No panel with id ${r}`);!e.keepEmptyGroups&&o.model.size===0&&this.doRemoveGroup(o,{skipActive:!0});let i=t.model.size===0;this.movingLock(()=>t.model.openPanel(n,{index:a,skipSetActive:(e.skipSetActive??!1)&&!i,skipSetGroupActive:!0})),e.skipSetActive||this.doSetGroupAndPanelActive(t),this._onDidMovePanel.fire({panel:n,from:o})}else{let e=W(t.element),n=G(this.gridview.orientation,e,i);if(o.size<2){let[e,a]=P(n);if(o.api.location.type===`grid`){let[t,n]=P(W(o.element));if(Se(t,e)){this.gridview.moveView(t,n,a),this._onDidMovePanel.fire({panel:this.getGroupPanel(r),from:o});return}}if(o.api.location.type===`popout`){let e=this._popoutGroups.find(e=>e.popoutGroup===o),t=this.movingLock(()=>e.popoutGroup.model.removePanel(e.popoutGroup.panels[0],{skipSetActive:!0,skipSetActiveGroup:!0}));this.doRemoveGroup(o,{skipActive:!0});let i=this.createGroupAtLocation(n);this.movingLock(()=>i.model.openPanel(t,{skipSetActive:!0})),this.doSetGroupAndPanelActive(i),this._onDidMovePanel.fire({panel:this.getGroupPanel(r),from:o});return}let s=this.movingLock(()=>this.doRemoveGroup(o,{skipActive:!0,skipDispose:!0})),c=W(t.element),l=G(this.gridview.orientation,c,i);this.movingLock(()=>this.doAddGroup(s,l)),this.doSetGroupAndPanelActive(s),this._onDidMovePanel.fire({panel:this.getGroupPanel(r),from:o})}else{let t=this.movingLock(()=>o.model.removePanel(r,{skipSetActive:!1,skipSetActiveGroup:!0}));if(!t)throw Error(`dockview: No panel with id ${r}`);let n=G(this.gridview.orientation,e,i),a=this.createGroupAtLocation(n);this.movingLock(()=>a.model.openPanel(t,{skipSetGroupActive:!0})),this.doSetGroupAndPanelActive(a),this._onDidMovePanel.fire({panel:t,from:o})}}}moveGroup(e){let t=e.from.group,n=e.to.group,r=e.to.position;if(r===`center`){let r=t.activePanel,i=this.movingLock(()=>[...t.panels].map(e=>t.model.removePanel(e.id,{skipSetActive:!0})));t?.model.size===0&&this.doRemoveGroup(t,{skipActive:!0}),this.movingLock(()=>{for(let e of i)n.model.openPanel(e,{skipSetActive:e!==r,skipSetGroupActive:!0})}),e.skipSetActive===!0&&this.activePanel||this.doSetGroupAndPanelActive(n)}else{switch(t.api.location.type){case`grid`:this.gridview.removeView(W(t.element));break;case`floating`:{let e=this._floatingGroups.find(e=>e.group===t);if(!e)throw Error(`dockview: failed to find floating group`);e.dispose();break}case`popout`:{let e=this._popoutGroups.find(e=>e.popoutGroup===t);if(!e)throw Error(`dockview: failed to find popout group`);let r=this._popoutGroups.indexOf(e);if(r>=0&&this._popoutGroups.splice(r,1),e.referenceGroup){let t=this.getPanel(e.referenceGroup);t&&!t.api.isVisible&&this.doRemoveGroup(t,{skipActive:!0})}e.window.dispose(),n.api.location.type===`grid`?(t.model.renderContainer=this.overlayRenderContainer,t.model.dropTargetContainer=this.rootDropTargetContainer,t.model.location={type:`grid`}):n.api.location.type===`floating`&&(t.model.renderContainer=this.overlayRenderContainer,t.model.dropTargetContainer=this.rootDropTargetContainer,t.model.location={type:`floating`});break}}if(n.api.location.type===`grid`){let e=W(n.element),i=G(this.gridview.orientation,e,r),a;switch(this.gridview.orientation){case R.VERTICAL:a=e.length%2==0?t.api.width:t.api.height;break;case R.HORIZONTAL:a=e.length%2==0?t.api.height:t.api.width}this.gridview.addView(t,a,i)}else if(n.api.location.type===`floating`){let e=this._floatingGroups.find(e=>e.group===n);if(e){let n=e.overlay.toJSON(),r,i;r=`left`in n?n.left+50:`right`in n?Math.max(0,n.right-n.width-50):50,i=`top`in n?n.top+50:`bottom`in n?Math.max(0,n.bottom-n.height-50):50,this.addFloatingGroup(t,{height:n.height,width:n.width,position:{left:r,top:i}})}}}if(t.panels.forEach(e=>{this._onDidMovePanel.fire({panel:e,from:t})}),this.debouncedUpdateAllPositions(),e.skipSetActive===!1){let e=n??t;this.doSetGroupAndPanelActive(e)}}doSetGroupActive(e){super.doSetGroupActive(e);let t=this.activePanel;!this._moving&&t!==this._onDidActivePanelChange.value&&this._onDidActivePanelChange.fire(t)}doSetGroupAndPanelActive(e){super.doSetGroupActive(e);let t=this.activePanel;e&&this.hasMaximizedGroup()&&!this.isMaximizedGroup(e)&&this.exitMaximizedGroup(),!this._moving&&t!==this._onDidActivePanelChange.value&&this._onDidActivePanelChange.fire(t)}getNextGroupId(){let e=this.nextGroupId.next();for(;this._groups.has(e);)e=this.nextGroupId.next();return e}createGroup(e){e||={};let t=e?.id;if(t&&this._groups.has(e.id)&&(console.warn(`dockview: Duplicate group id ${e?.id}. reassigning group id to avoid errors`),t=void 0),!t)for(t=this.nextGroupId.next();this._groups.has(t);)t=this.nextGroupId.next();let n=new jt(this,t,e);if(n.init({params:{},accessor:this}),!this._groups.has(n.id)){let e=new D(n.model.onTabDragStart(e=>{this._onWillDragPanel.fire(e)}),n.model.onGroupDragStart(e=>{this._onWillDragGroup.fire(e)}),n.model.onMove(e=>{let{groupId:t,itemId:r,target:i,index:a}=e;this.moveGroupOrPanel({from:{groupId:t,panelId:r},to:{group:n,position:i,index:a}})}),n.model.onDidDrop(e=>{this._onDidDrop.fire(e)}),n.model.onWillDrop(e=>{this._onWillDrop.fire(e)}),n.model.onWillShowOverlay(e=>{if(this.options.disableDnd){e.preventDefault();return}this._onWillShowOverlay.fire(e)}),n.model.onUnhandledDragOverEvent(e=>{this._onUnhandledDragOverEvent.fire(e)}),n.model.onDidAddPanel(e=>{this._moving||this._onDidAddPanel.fire(e.panel)}),n.model.onDidRemovePanel(e=>{this._moving||this._onDidRemovePanel.fire(e.panel)}),n.model.onDidActivePanelChange(e=>{this._moving||e.panel===this.activePanel&&this._onDidActivePanelChange.value!==e.panel&&this._onDidActivePanelChange.fire(e.panel)}),y.any(n.model.onDidPanelTitleChange,n.model.onDidPanelParametersChange)(()=>{this._bufferOnDidLayoutChange.fire()}));this._groups.set(n.id,{value:n,disposable:e})}return n.initialize(),n}createPanel(e,t){let n=e.component,r=e.tabComponent??this.options.defaultTabComponent,i=new Ft(this,e.id,n,r),a=new Z(e.id,n,r,this,this._api,t,i,{renderer:e.renderer,minimumWidth:e.minimumWidth,minimumHeight:e.minimumHeight,maximumWidth:e.maximumWidth,maximumHeight:e.maximumHeight});return a.init({title:e.title??e.id,params:e?.params??{}}),a}createGroupAtLocation(e,t,n){let r=this.createGroup(n);return this.doAddGroup(r,e,t),r}findGroup(e){return Array.from(this._groups.values()).find(t=>t.value.model.containsPanel(e))?.value}orientationAtLocation(e){let t=this.gridview.orientation;return e.length%2==1?t:K(t)}updateDropTargetModel(e){`dndEdges`in e&&(this._rootDropTarget.disabled=typeof e.dndEdges==`boolean`&&e.dndEdges===!1,typeof e.dndEdges==`object`&&e.dndEdges!==null?this._rootDropTarget.setOverlayModel(e.dndEdges):this._rootDropTarget.setOverlayModel(Xt)),`rootOverlayModel`in e&&this.updateDropTargetModel({dndEdges:e.dndEdges})}updateTheme(){let e=this._options.theme??Mt;switch(this._themeClassnames.setClassNames(e.className),this.gridview.margin=e.gap??0,e.dndOverlayMounting){case`absolute`:this.rootDropTargetContainer.disabled=!1;break;default:this.rootDropTargetContainer.disabled=!0}}};function $t(e,t){return new Qt(e,t).api}var en=e(`<div class="dockview-container svelte-sdjhi0"></div>`);function tn(e,m){a(m,!1);let h=l(),g,_=`dbeaver-layout-state`,v={navigator:p,queryEditor:p,resultsViewer:p};c(()=>{g=$t(n(h),{createComponent:e=>{let n=v[e.name],i=document.createElement(`div`);i.style.height=`100%`;let a=t(n,{target:i,props:{...e.params,api:e.accessor}});return{element:i,dispose:()=>r(a)}}});let e=localStorage.getItem(_);e?g.fromJSON(JSON.parse(e)):y(),g.onDidLayoutChange(()=>{localStorage.setItem(_,JSON.stringify(g.toJSON()))})});function y(){let e=g.addPanel({id:`nav_1`,component:`navigator`,title:`Database Navigator`}),t=g.addPanel({id:`query_1`,component:`queryEditor`,title:`SQL Editor`,position:{referencePanel:e,direction:`right`}});g.addPanel({id:`results_1`,component:`resultsViewer`,title:`Results`,position:{referencePanel:t,direction:`below`}})}function b(e,t,n){g.addPanel({id:e,component:t,title:n})}var x={addNewWindow:b};u();var S=en();return o(S,e=>d(h,e),()=>n(h)),i(e,S),f(m,`addNewWindow`,b),s(x)}export{tn as default};
//# sourceMappingURL=DockviewContainer.D8yytP52.js.map