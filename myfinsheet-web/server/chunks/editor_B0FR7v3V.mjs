import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
import { i as renderComponent, u as renderTemplate, x as createAstro } from "./server_pkxrvCO5.mjs";
import { t as createComponent } from "./compiler_Bi41Xejp.mjs";
import { t as $$AppLayout } from "./AppLayout_DmIOFe7t.mjs";
//#region src/pages/editor.astro
var editor_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Editor,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://rushike.github.io");
var $$Editor = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Editor;
	const filePath = Astro.url.searchParams.get("file") ?? "/workspace/upload/document_type.json";
	return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "FileEditor", null, {
		"client:only": true,
		"filePath": filePath,
		"client:component-hydration": "only",
		"client:component-path": "@rushike/svelte-components/FileEditor.svelte",
		"client:component-export": "default"
	})}` })}`;
}, "/Users/rushike/workspace/repos/rushike/js/apps/myfinsheet-web/src/pages/editor.astro", void 0);
var $$file = "/Users/rushike/workspace/repos/rushike/js/apps/myfinsheet-web/src/pages/editor.astro";
var $$url = "/myfinsheet-web/editor";
//#endregion
//#region \0virtual:astro:page:src/pages/editor@_@astro
var page = () => editor_exports;
//#endregion
export { page };

//# sourceMappingURL=editor_B0FR7v3V.mjs.map