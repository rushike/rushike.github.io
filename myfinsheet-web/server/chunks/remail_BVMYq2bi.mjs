import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
import { i as renderComponent, u as renderTemplate } from "./server_pkxrvCO5.mjs";
import { t as createComponent } from "./compiler_Bi41Xejp.mjs";
import { t as $$AppLayout } from "./AppLayout_CSwWwfh6.mjs";
//#region src/pages/remail.astro
var remail_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Remail,
	file: () => $$file,
	url: () => $$url
});
var $$Remail = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<script type="module" defer>
  import "/myfinsheet-client/remail2.js";
  
<\/script>${renderComponent($$result, "AppLayout", $$AppLayout, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "RemailDownloader", null, {
		"client:only": "svelte",
		"client:component-hydration": "only",
		"client:component-path": "@rushike/svelte-components/RemailDownloader.svelte",
		"client:component-export": "default"
	})}` })}`;
}, "/Users/rushike/workspace/repos/rushike/js/apps/myfinsheet-web/src/pages/remail.astro", void 0);
var $$file = "/Users/rushike/workspace/repos/rushike/js/apps/myfinsheet-web/src/pages/remail.astro";
var $$url = "/myfinsheet-web/remail";
//#endregion
//#region \0virtual:astro:page:src/pages/remail@_@astro
var page = () => remail_exports;
//#endregion
export { page };

//# sourceMappingURL=remail_BVMYq2bi.mjs.map