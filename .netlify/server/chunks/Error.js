import { c as create_ssr_component } from "./ssr.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="border-t border-[#e0e0e0]" data-svelte-h="svelte-hldrf5"><div class="border-b border-[#e0e0e0] font-mukta mx-auto max-w-c-1390 px-4 md:px-6 py-10 flex flex-col gap-y-2 md:gap-y-6"><div class="flex flex-col items-center gap-y-3 md:gap-y-4"><h1 class="text-5xl text-logoIcon font-semibold">OOPS!</h1> <h2>Page Not Found!</h2></div> <div class="flex justify-center"><div class="md:h-full"><img class="md:h-96" src="../../images/2446912.jpg" alt="Error 404"></div></div> <div class="flex mt-4 justify-center"><a class="bg-logoIcon text-white py-3 px-4 rounded-md" href="/"><i class="mr-2 fa fa-arrow-left"></i> Go Back to Home Page</a></div></div></section>`;
});
export {
  Error as E
};
