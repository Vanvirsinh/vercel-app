

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.cae6e65c.js","_app/immutable/chunks/scheduler.2aecb5fb.js","_app/immutable/chunks/index.5860dfd8.js"];
export const stylesheets = [];
export const fonts = [];
