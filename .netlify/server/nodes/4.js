

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.4ffbc032.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.aef4e382.js","_app/immutable/chunks/index.b280f364.js","_app/immutable/chunks/ContactIcons.2904545e.js"];
export const stylesheets = ["_app/immutable/assets/4.73360b83.css"];
export const fonts = [];
