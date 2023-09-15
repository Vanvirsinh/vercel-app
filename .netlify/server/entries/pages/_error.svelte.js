import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { E as Error } from "../../chunks/Error.js";
const Error_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-wqldzw_START -->${$$result.title = `<title>Page not found!</title>`, ""}<!-- HEAD_svelte-wqldzw_END -->`, ""} ${validate_component(Error, "Error").$$render($$result, {}, {}, {})}`;
});
export {
  Error_1 as default
};
