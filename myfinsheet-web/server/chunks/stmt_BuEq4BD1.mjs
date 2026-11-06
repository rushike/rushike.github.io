import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
import { i as renderComponent, u as renderTemplate } from "./server_pkxrvCO5.mjs";
import { t as createComponent } from "./compiler_Bi41Xejp.mjs";
import { t as $$AppLayout } from "./AppLayout_CSwWwfh6.mjs";
//#region src/pages/stmt.astro
var stmt_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Stmt,
	file: () => $$file,
	url: () => $$url
});
var $$Stmt = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "SvelteAppWrapper", null, {
		"client:only": "svelte",
		"client:component-hydration": "only",
		"client:component-path": "@rushike/svelte-components/AppWrapper.svelte",
		"client:component-export": "default"
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "TransactionView", null, {
		"client:only": "svelte",
		"client:component-hydration": "only",
		"client:component-path": "@rushike/svelte-components/TransactionView.svelte",
		"client:component-export": "default"
	})}` })}` })}`;
}, "/Users/rushike/workspace/repos/rushike/js/apps/myfinsheet-web/src/pages/stmt.astro", void 0);
var $$file = "/Users/rushike/workspace/repos/rushike/js/apps/myfinsheet-web/src/pages/stmt.astro";
var $$url = "/stmt";
//#endregion
//#region \0virtual:astro:page:src/pages/stmt@_@astro
var page = () => stmt_exports;
//#endregion
export { page };

//# sourceMappingURL=stmt_BuEq4BD1.mjs.map