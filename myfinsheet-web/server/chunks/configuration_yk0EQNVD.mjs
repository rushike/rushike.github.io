import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
import { i as renderComponent, u as renderTemplate } from "./server_pkxrvCO5.mjs";
import { t as createComponent } from "./compiler_Bi41Xejp.mjs";
import { t as $$AppLayout } from "./AppLayout_CSwWwfh6.mjs";
//#region src/pages/configuration.astro
var configuration_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Configuration,
	file: () => $$file,
	url: () => $$url
});
var $$Configuration = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Configuration", null, {
		"client:only": true,
		"client:component-hydration": "only",
		"client:component-path": "@rushike/svelte-components/Configuration.svelte",
		"client:component-export": "default"
	})}` })}`;
}, "/Users/rushike/workspace/repos/rushike/js/apps/myfinsheet-web/src/pages/configuration.astro", void 0);
var $$file = "/Users/rushike/workspace/repos/rushike/js/apps/myfinsheet-web/src/pages/configuration.astro";
var $$url = "/myfinsheet-web/configuration";
//#endregion
//#region \0virtual:astro:page:src/pages/configuration@_@astro
var page = () => configuration_exports;
//#endregion
export { page };

//# sourceMappingURL=configuration_yk0EQNVD.mjs.map