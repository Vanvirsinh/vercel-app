

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.0e5b6d2c.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.aef4e382.js","_app/immutable/chunks/index.b280f364.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/ContactIcons.2904545e.js"];
export const stylesheets = ["_app/immutable/assets/2.d16855b4.css"];
export const fonts = [];
