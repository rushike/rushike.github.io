import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
import { i as renderComponent, u as renderTemplate } from "./server_pkxrvCO5.mjs";
import { t as createComponent } from "./compiler_Bi41Xejp.mjs";
import { t as $$AppLayout } from "./AppLayout_DmIOFe7t.mjs";
//#region src/pages/secret-manager.astro
var secret_manager_exports = /* @__PURE__ */ __exportAll({
	default: () => $$SecretManager,
	file: () => $$file,
	url: () => $$url
});
var $$SecretManager = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<!-- <script type="module" client:load>
  import "/myfinsheet-client/remail2.js";
<\/script> -->${renderComponent($$result, "AppLayout", $$AppLayout, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "SvelteAppWrapper", null, {
		"client:only": "svelte",
		"client:component-hydration": "only",
		"client:component-path": "@rushike/svelte-components/AppWrapper.svelte",
		"client:component-export": "default"
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "SecretManager", null, {
		"client:only": "svelte",
		"client:component-hydration": "only",
		"client:component-path": "@rushike/svelte-components/SecretManager.svelte",
		"client:component-export": "default"
	})}` })}` })}<!-- <SecretManager client:only="svelte" ></SecretManager> -->`;
}, "/Users/rushike/workspace/repos/rushike/js/apps/myfinsheet-web/src/pages/secret-manager.astro", void 0);
var $$file = "/Users/rushike/workspace/repos/rushike/js/apps/myfinsheet-web/src/pages/secret-manager.astro";
var $$url = "/myfinsheet-web/secret-manager";
//#endregion
//#region \0virtual:astro:page:src/pages/secret-manager@_@astro
var page = () => secret_manager_exports;
//#endregion
export { page };

//# sourceMappingURL=secret-manager_8Y7ZW6qG.mjs.map