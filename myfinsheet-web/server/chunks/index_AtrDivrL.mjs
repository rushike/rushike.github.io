import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
import { R as generateCspDigest, d as maybeRenderHead, i as renderComponent, p as addAttribute, t as spreadAttributes, u as renderTemplate, v as unescapeHTML } from "./server_pkxrvCO5.mjs";
import { o as escape_html } from "./server_CGOX8PqF.mjs";
import { t as createComponent } from "./compiler_Bi41Xejp.mjs";
import { t as $$AppLayout } from "./AppLayout_CSwWwfh6.mjs";
//#region ../../node_modules/.pnpm/astro@7.2.9_@emnapi+core@1.11.1_@emnapi+runtime@1.11.3_@types+node@24.10.0_jiti@2.6.1_yaml@2.8.2/node_modules/astro/dist/assets/runtime.js
function createSvgComponent({ meta, attributes, children, styles }) {
	const hasStyles = styles.length > 0;
	const Component = createComponent({
		async factory(result, props) {
			const normalizedProps = normalizeProps(attributes, props);
			if (hasStyles && result.cspDestination) for (const style of styles) {
				const hash = await generateCspDigest(style, result.cspAlgorithm);
				result._metadata.extraStyleHashes.push(hash);
			}
			return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
		},
		propagation: hasStyles ? "self" : "none"
	});
	Object.defineProperty(Component, "toJSON", {
		value: () => meta,
		enumerable: false
	});
	return Object.assign(Component, meta);
}
var ATTRS_TO_DROP = [
	"xmlns",
	"xmlns:xlink",
	"version"
];
var DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
	for (const attr of ATTRS_TO_DROP) delete attributes[attr];
	return attributes;
}
function normalizeProps(attributes, props) {
	return dropAttributes({
		...DEFAULT_ATTRS,
		...attributes,
		...props
	});
}
//#endregion
//#region src/assets/astro.svg
var astro_default = createSvgComponent({
	"meta": {
		"src": "/myfinsheet-web/_astro/astro.Dm8K3lV8.svg",
		"width": 115,
		"height": 48,
		"format": "svg"
	},
	"attributes": {
		"fill": "none",
		"width": "115",
		"height": "48"
	},
	"children": "<path fill=\"#17191E\" d=\"M7.77 36.35C6.4 35.11 6 32.51 6.57 30.62c.99 1.2 2.35 1.57 3.75 1.78 2.18.33 4.31.2 6.33-.78.23-.12.44-.27.7-.42.18.55.23 1.1.17 1.67a4.56 4.56 0 0 1-1.94 3.23c-.43.32-.9.61-1.34.91-1.38.94-1.76 2.03-1.24 3.62l.05.17a3.63 3.63 0 0 1-1.6-1.38 3.87 3.87 0 0 1-.63-2.1c0-.37 0-.74-.05-1.1-.13-.9-.55-1.3-1.33-1.32a1.56 1.56 0 0 0-1.63 1.26c0 .06-.03.12-.05.2Z\" /><path fill=\"url(#a)\" d=\"M7.77 36.35C6.4 35.11 6 32.51 6.57 30.62c.99 1.2 2.35 1.57 3.75 1.78 2.18.33 4.31.2 6.33-.78.23-.12.44-.27.7-.42.18.55.23 1.1.17 1.67a4.56 4.56 0 0 1-1.94 3.23c-.43.32-.9.61-1.34.91-1.38.94-1.76 2.03-1.24 3.62l.05.17a3.63 3.63 0 0 1-1.6-1.38 3.87 3.87 0 0 1-.63-2.1c0-.37 0-.74-.05-1.1-.13-.9-.55-1.3-1.33-1.32a1.56 1.56 0 0 0-1.63 1.26c0 .06-.03.12-.05.2Z\" /><path fill=\"#17191E\" d=\"M.02 30.31s4.02-1.95 8.05-1.95l3.04-9.4c.11-.45.44-.76.82-.76.37 0 .7.31.82.76l3.04 9.4c4.77 0 8.05 1.95 8.05 1.95L17 11.71c-.2-.56-.53-.91-.98-.91H7.83c-.44 0-.76.35-.97.9L.02 30.31Zm42.37-5.97c0 1.64-2.05 2.62-4.88 2.62-1.85 0-2.5-.45-2.5-1.41 0-1 .8-1.49 2.65-1.49 1.67 0 3.09.03 4.73.23v.05Zm.03-2.04a21.37 21.37 0 0 0-4.37-.36c-5.32 0-7.82 1.25-7.82 4.18 0 3.04 1.71 4.2 5.68 4.2 3.35 0 5.63-.84 6.46-2.92h.14c-.03.5-.05 1-.05 1.4 0 1.07.18 1.16 1.06 1.16h4.15a16.9 16.9 0 0 1-.36-4c0-1.67.06-2.93.06-4.62 0-3.45-2.07-5.64-8.56-5.64-2.8 0-5.9.48-8.26 1.19.22.93.54 2.83.7 4.06 2.04-.96 4.95-1.37 7.2-1.37 3.11 0 3.97.71 3.97 2.15v.57Zm11.37 3c-.56.07-1.33.07-2.12.07-.83 0-1.6-.03-2.12-.1l-.02.58c0 2.85 1.87 4.52 8.45 4.52 6.2 0 8.2-1.64 8.2-4.55 0-2.74-1.33-4.09-7.2-4.39-4.58-.2-4.99-.7-4.99-1.28 0-.66.59-1 3.65-1 3.18 0 4.03.43 4.03 1.35v.2a46.13 46.13 0 0 1 4.24.03l.02-.55c0-3.36-2.8-4.46-8.2-4.46-6.08 0-8.13 1.49-8.13 4.39 0 2.6 1.64 4.23 7.48 4.48 4.3.14 4.77.62 4.77 1.28 0 .7-.7 1.03-3.71 1.03-3.47 0-4.35-.48-4.35-1.47v-.13Zm19.82-12.05a17.5 17.5 0 0 1-6.24 3.48c.03.84.03 2.4.03 3.24l1.5.02c-.02 1.63-.04 3.6-.04 4.9 0 3.04 1.6 5.32 6.58 5.32 2.1 0 3.5-.23 5.23-.6a43.77 43.77 0 0 1-.46-4.13c-1.03.34-2.34.53-3.78.53-2 0-2.82-.55-2.82-2.13 0-1.37 0-2.65.03-3.84 2.57.02 5.13.07 6.64.11-.02-1.18.03-2.9.1-4.04-2.2.04-4.65.07-6.68.07l.07-2.93h-.16Zm13.46 6.04a767.33 767.33 0 0 1 .07-3.18H82.6c.07 1.96.07 3.98.07 6.92 0 2.95-.03 4.99-.07 6.93h5.18c-.09-1.37-.11-3.68-.11-5.65 0-3.1 1.26-4 4.12-4 1.33 0 2.28.16 3.1.46.03-1.16.26-3.43.4-4.43-.86-.25-1.81-.41-2.96-.41-2.46-.03-4.26.98-5.1 3.38l-.17-.02Zm22.55 3.65c0 2.5-1.8 3.66-4.64 3.66-2.81 0-4.61-1.1-4.61-3.66s1.82-3.52 4.61-3.52c2.82 0 4.64 1.03 4.64 3.52Zm4.71-.11c0-4.96-3.87-7.18-9.35-7.18-5.5 0-9.23 2.22-9.23 7.18 0 4.94 3.49 7.59 9.21 7.59 5.77 0 9.37-2.65 9.37-7.6Z\" /><defs><linearGradient id=\"a\" x1=\"6.33\" x2=\"19.43\" y1=\"40.8\" y2=\"34.6\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#D83333\" /><stop offset=\"1\" stop-color=\"#F041FF\" /></linearGradient></defs>",
	"styles": []
});
//#endregion
//#region src/assets/background.svg
var background_default = createSvgComponent({
	"meta": {
		"src": "/myfinsheet-web/_astro/background.BPKAcmfN.svg",
		"width": 1440,
		"height": 1024,
		"format": "svg"
	},
	"attributes": {
		"width": "1440",
		"height": "1024",
		"fill": "none"
	},
	"children": "<path fill=\"url(#a)\" fill-rule=\"evenodd\" d=\"M-217.58 475.75c91.82-72.02 225.52-29.38 341.2-44.74C240 415.56 372.33 315.14 466.77 384.9c102.9 76.02 44.74 246.76 90.31 366.31 29.83 78.24 90.48 136.14 129.48 210.23 57.92 109.99 169.67 208.23 155.9 331.77-13.52 121.26-103.42 264.33-224.23 281.37-141.96 20.03-232.72-220.96-374.06-196.99-151.7 25.73-172.68 330.24-325.85 315.72-128.6-12.2-110.9-230.73-128.15-358.76-12.16-90.14 65.87-176.25 44.1-264.57-26.42-107.2-167.12-163.46-176.72-273.45-10.15-116.29 33.01-248.75 124.87-320.79Z\" clip-rule=\"evenodd\" style=\"opacity:.154\" /><path fill=\"url(#b)\" fill-rule=\"evenodd\" d=\"M1103.43 115.43c146.42-19.45 275.33-155.84 413.5-103.59 188.09 71.13 409 212.64 407.06 413.88-1.94 201.25-259.28 278.6-414.96 405.96-130 106.35-240.24 294.39-405.6 265.3-163.7-28.8-161.93-274.12-284.34-386.66-134.95-124.06-436-101.46-445.82-284.6-9.68-180.38 247.41-246.3 413.54-316.9 101.01-42.93 207.83 21.06 316.62 6.61Z\" clip-rule=\"evenodd\" style=\"opacity:.154\" /><defs><linearGradient id=\"b\" x1=\"373\" x2=\"1995.44\" y1=\"1100\" y2=\"118.03\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#D83333\" /><stop offset=\"1\" stop-color=\"#F041FF\" /></linearGradient><linearGradient id=\"a\" x1=\"107.37\" x2=\"1130.66\" y1=\"1993.35\" y2=\"1026.31\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#3245FF\" /><stop offset=\"1\" stop-color=\"#BC52EE\" /></linearGradient></defs>",
	"styles": []
});
//#endregion
//#region src/components/Welcome.astro
var $$Welcome = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div id="container" data-astro-cid-jgnp2svd><img id="background"${addAttribute(background_default.src, "src")} alt="" fetchpriority="high" data-astro-cid-jgnp2svd><main data-astro-cid-jgnp2svd><section id="hero" data-astro-cid-jgnp2svd><a href="https://astro.build" data-astro-cid-jgnp2svd><img${addAttribute(astro_default.src, "src")} width="115" height="48" alt="Astro Homepage" data-astro-cid-jgnp2svd></a><h1 data-astro-cid-jgnp2svd>To get started, open the <code data-astro-cid-jgnp2svd><pre data-astro-cid-jgnp2svd>src/pages</pre></code> directory in your project.</h1><section id="links" data-astro-cid-jgnp2svd><a class="button" href="https://docs.astro.build" data-astro-cid-jgnp2svd>Read our docs</a><a href="https://astro.build/chat" data-astro-cid-jgnp2svd>Join our Discord <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" data-astro-cid-jgnp2svd><path fill="currentColor" d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0a105.89 105.89 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15ZM42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.44 12.69Zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69Z" data-astro-cid-jgnp2svd></path></svg></a></section></section></main><a href="https://astro.build/blog/astro-5/" id="news" class="box" data-astro-cid-jgnp2svd><svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-jgnp2svd><path d="M24.667 12c1.333 1.414 2 3.192 2 5.334 0 4.62-4.934 5.7-7.334 12C18.444 28.567 18 27.456 18 26c0-4.642 6.667-7.053 6.667-14Zm-5.334-5.333c1.6 1.65 2.4 3.43 2.4 5.333 0 6.602-8.06 7.59-6.4 17.334C13.111 27.787 12 25.564 12 22.666c0-4.434 7.333-8 7.333-16Zm-6-5.333C15.111 3.555 16 5.556 16 7.333c0 8.333-11.333 10.962-5.333 22-3.488-.774-6-4-6-8 0-8.667 8.666-10 8.666-20Z" fill="#111827" data-astro-cid-jgnp2svd></path></svg><h2 data-astro-cid-jgnp2svd>What's New in Astro 5.0?</h2><p data-astro-cid-jgnp2svd>From content layers to server islands, click to learn more about the new features and improvements in Astro 5.0</p></a></div>`;
}, "/Users/rushike/workspace/repos/rushike/js/apps/myfinsheet-web/src/components/Welcome.astro", void 0);
//#endregion
//#region ../../packages/svelte-components/src/components/Counter.svelte
function Counter($$renderer) {
	$$renderer.push(`<button>Count: ${escape_html(0)}</button>`);
}
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Counter", Counter, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "@rushike/svelte-components/Counter.svelte",
		"client:component-export": "default"
	})}${renderComponent($$result, "Welcome", $$Welcome, {})}` })}`;
}, "/Users/rushike/workspace/repos/rushike/js/apps/myfinsheet-web/src/pages/index.astro", void 0);
var $$file = "/Users/rushike/workspace/repos/rushike/js/apps/myfinsheet-web/src/pages/index.astro";
var $$url = "/myfinsheet-web";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };

//# sourceMappingURL=index_AtrDivrL.mjs.map