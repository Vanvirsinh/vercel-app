

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.826808ff.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.2aecb5fb.js","_app/immutable/chunks/index.5860dfd8.js","_app/immutable/chunks/ContactIcons.6d321f0f.js"];
export const stylesheets = ["_app/immutable/assets/4.73360b83.css"];
export const fonts = [];
