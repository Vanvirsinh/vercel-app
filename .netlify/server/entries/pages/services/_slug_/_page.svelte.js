import { c as create_ssr_component, e as escape, f as add_attribute, d as each, v as validate_component } from "../../../../chunks/ssr.js";
import { B as BackToTop, C as ContactIcons } from "../../../../chunks/ContactIcons.js";
import { E as Error } from "../../../../chunks/Error.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#indServices.svelte-fs8l7v{background-position:center;background-size:cover}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentUrl;
  let currentService = {};
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1wrwznv_START -->${$$result.title = `<title> ${escape(currentService.subTitle ? currentService.subTitle : "Page not found!")} </title>`, ""}<!-- HEAD_svelte-1wrwznv_END -->`, ""}  ${Object.keys(currentService).length !== 0 ? `<section id="indServices" style="${"background-image: linear-gradient( rgba(19, 40, 76, 0.575), rgba(19, 40, 76, 0.522) ), url(" + escape(currentService.serviceBg, true) + ");"}" class="py-20 md:py-32 svelte-fs8l7v"><div class="font-mukta flex flex-col items-center animate_bottom"><h3 class="text-logoIcon font-bold w-fit" data-svelte-h="svelte-1dd7pjj">FIXONN</h3> <h1 class="mt-4 text-3xl text-center md:text-5xl font-semibold text-white">${escape(currentService.subTitle)}</h1></div></section> <section id="services"><div class="mx-auto max-w-c-1390 px-4 md:px-6 py-10 md:py-20 border-b border-[#e0e0e0]"><div class="grid md:grid-cols-2 gap-4 font-mukta"><div class="animate_left"><div class="h-full flex md:px-20 justify-center items-center"><img${add_attribute("src", currentService.serviceImg, 0)}${add_attribute("alt", currentService.title, 0)}></div></div> <div class="animate_right flex flex-col gap-y-3 md:gap-y-5"><h1 class="font-bold text-3xl md:text-5xl text-black uppercase">${escape(currentService.title)}</h1> <p class="text-md">${escape(currentService.servicePara)}</p> <div><h3 class="text-xl font-semibold mb-2">${escape(currentService.title)} Service Includes:</h3> <ul class="text-md">${each(currentService.subServices, (subService) => {
    return `<li><i class="fa-solid fa-check mr-2 text-logoIcon"></i> ${escape(subService)} </li>`;
  })}</ul></div> <button class="w-fit text-white bg-logoIcon py-3 px-4 rounded-md">Book ${escape(currentService.title)} Service
                        <i class="fa-solid fa-bookmark ml-2"></i></button></div></div> <div class="mt-20"><div class="grid sm:grid-cols-2 md:grid-cols-4 gap-4">${each(currentService.subServiceImages, (img) => {
    return `<div class="p-5 md:p-10 bg-black/[0.05] rounded-md animate_bottom"><img class="h-full"${add_attribute("src", img.img, 0)}${add_attribute("alt", img.title, 0)}> </div>`;
  })}</div></div></div></section>` : `${validate_component(Error, "Error").$$render($$result, {}, {}, {})}`}  ${validate_component(BackToTop, "BackToTop").$$render($$result, { pathName: currentUrl }, {}, {})} ${validate_component(ContactIcons, "ContactIcons").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
