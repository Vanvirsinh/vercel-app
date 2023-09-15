

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.74d8b292.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.2aecb5fb.js","_app/immutable/chunks/index.5860dfd8.js","_app/immutable/chunks/ContactIcons.6d321f0f.js"];
export const stylesheets = ["_app/immutable/assets/2.d16855b4.css"];
export const fonts = [];
