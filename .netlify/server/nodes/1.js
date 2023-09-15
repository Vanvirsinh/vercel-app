

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4534ca0d.js","_app/immutable/chunks/scheduler.aef4e382.js","_app/immutable/chunks/index.b280f364.js","_app/immutable/chunks/Error.7e5b4cdc.js"];
export const stylesheets = [];
export const fonts = [];
