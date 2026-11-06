import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
import { i as renderComponent, u as renderTemplate } from "./server_pkxrvCO5.mjs";
import { t as createComponent } from "./compiler_Bi41Xejp.mjs";
import { t as $$AppLayout } from "./AppLayout_DmIOFe7t.mjs";
//#region src/pages/file-manager.astro
var file_manager_exports = /* @__PURE__ */ __exportAll({
	default: () => $$FileManager,
	file: () => $$file,
	url: () => $$url
});
var $$FileManager = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "FileManager", null, {
		"client:only": "svelte",
		"client:component-hydration": "only",
		"client:component-path": "@rushike/svelte-components/FileManager.svelte",
		"client:component-export": "default"
	})}` })}`;
}, "/Users/rushike/workspace/repos/rushike/js/apps/myfinsheet-web/src/pages/file-manager.astro", void 0);
var $$file = "/Users/rushike/workspace/repos/rushike/js/apps/myfinsheet-web/src/pages/file-manager.astro";
var $$url = "/myfinsheet-web/file-manager";
//#endregion
//#region \0virtual:astro:page:src/pages/file-manager@_@astro
var page = () => file_manager_exports;
//#endregion
export { page };

//# sourceMappingURL=file-manager_BaucjNVu.mjs.map