

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ee38329b.js","_app/immutable/chunks/scheduler.aef4e382.js","_app/immutable/chunks/index.4200373c.js","_app/immutable/chunks/Error.3e2daf2a.js"];
export const stylesheets = [];
export const fonts = [];
