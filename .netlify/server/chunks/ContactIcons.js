import { c as create_ssr_component, f as add_attribute } from "./ssr.js";
const BackToTop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pathName } = $$props;
  if ($$props.pathName === void 0 && $$bindings.pathName && pathName !== void 0)
    $$bindings.pathName(pathName);
  return `<section${add_attribute(
    "class",
    `${"-bottom-20 -right-20"} ease-in duration-300 back-to-top fixed z-20`,
    0
  )}><div><a${add_attribute("href", pathName, 0)} class="hover:bg-logoIcon active:bg-logoText border border-[#E0E0E0] ease-in duration-200 hover:text-white flex justify-center items-center h-10 w-10 rounded bg-white text-[#757693]"><i class="fa-solid fa-chevron-up"></i></a></div></section>`;
});
const ContactIcons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section${add_attribute("class", `${"-left-20"} bg-white rounded-r-md overflow-hidden border border-[#E0E0E0] border-l-0 back-to-top fixed top-[50%] z-20 -translate-y-1/2 ease-in duration-300`, 0)}><div class="flex flex-col gap-y-2 h-fit" data-svelte-h="svelte-o2a7hy"><div><a href="https://api.whatsapp.com/send?phone=+919998705371" class="h-full w-10 p-1 inline-block"><img class="h-full" src="../images/whatsapp.gif" alt="WhatsApp Chat"></a></div> <div><a href="tel:9998705371" class="h-full w-10 p-1 inline-block"><img class="h-full" src="../images/ringer-2.gif" alt="Call US"></a></div></div></section>`;
});
export {
  BackToTop as B,
  ContactIcons as C
};
