import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
import { i as renderComponent, u as renderTemplate } from "./server_pkxrvCO5.mjs";
import { t as createComponent } from "./compiler_Bi41Xejp.mjs";
import { t as $$AppLayout } from "./AppLayout_DmIOFe7t.mjs";
//#region src/pages/dockview.astro
var dockview_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Dockview,
	file: () => $$file,
	url: () => $$url
});
var $$Dockview = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "AppWrapper", null, {
		"client:only": "svelte",
		"client:component-hydration": "only",
		"client:component-path": "@rushike/svelte-components/AppWrapper.svelte",
		"client:component-export": "default"
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "DockviewContainer", null, {
		"client:only": "svelte",
		"client:component-hydration": "only",
		"client:component-path": "@rushike/svelte-components/DockviewContainer.svelte",
		"client:component-export": "default"
	})}` })}` })}`;
}, "/Users/rushike/workspace/repos/rushike/js/apps/myfinsheet-web/src/pages/dockview.astro", void 0);
var $$file = "/Users/rushike/workspace/repos/rushike/js/apps/myfinsheet-web/src/pages/dockview.astro";
var $$url = "/myfinsheet-web/dockview";
//#endregion
//#region \0virtual:astro:page:src/pages/dockview@_@astro
var page = () => dockview_exports;
//#endregion
export { page };

//# sourceMappingURL=dockview_DoyK8ZmY.mjs.map