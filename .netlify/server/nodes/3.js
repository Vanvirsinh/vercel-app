

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.d76b21ca.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.aef4e382.js","_app/immutable/chunks/index.b280f364.js","_app/immutable/chunks/ContactIcons.2904545e.js"];
export const stylesheets = ["_app/immutable/assets/3.ef970b77.css"];
export const fonts = [];
