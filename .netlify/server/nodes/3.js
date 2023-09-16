

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.6eb50b1e.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.aef4e382.js","_app/immutable/chunks/index.4200373c.js","_app/immutable/chunks/ContactIcons.6c623ea9.js"];
export const stylesheets = ["_app/immutable/assets/3.ef970b77.css"];
export const fonts = [];
