import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
import { i as renderComponent, u as renderTemplate } from "./server_pkxrvCO5.mjs";
import { t as createComponent } from "./compiler_Bi41Xejp.mjs";
import { t as $$AppLayout } from "./AppLayout_DmIOFe7t.mjs";
//#region src/pages/pdf-extractor.astro
var pdf_extractor_exports = /* @__PURE__ */ __exportAll({
	default: () => $$PdfExtractor,
	file: () => $$file,
	url: () => $$url
});
var $$PdfExtractor = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, { "title": "mypdfutils PDF Extractor Workbench" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "PDFExtractorApp", null, {
		"client:only": "svelte",
		"baseUrl": "http://localhost:9191",
		"client:component-hydration": "only",
		"client:component-path": "@rushike/svelte-components/PDFExtractorApp.svelte",
		"client:component-export": "default"
	})}` })}`;
}, "/Users/rushike/workspace/repos/rushike/js/apps/myfinsheet-web/src/pages/pdf-extractor.astro", void 0);
var $$file = "/Users/rushike/workspace/repos/rushike/js/apps/myfinsheet-web/src/pages/pdf-extractor.astro";
var $$url = "/myfinsheet-web/pdf-extractor";
//#endregion
//#region \0virtual:astro:page:src/pages/pdf-extractor@_@astro
var page = () => pdf_extractor_exports;
//#endregion
export { page };

//# sourceMappingURL=pdf-extractor_BzHaz3B8.mjs.map