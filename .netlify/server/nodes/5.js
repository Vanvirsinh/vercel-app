import * as universal from '../entries/pages/services/_slug_/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/services/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/services/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/5.92a437d9.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.aef4e382.js","_app/immutable/chunks/index.4200373c.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/ContactIcons.340affc3.js","_app/immutable/chunks/Error.3e2daf2a.js"];
export const stylesheets = ["_app/immutable/assets/5.f5c23652.css"];
export const fonts = [];
