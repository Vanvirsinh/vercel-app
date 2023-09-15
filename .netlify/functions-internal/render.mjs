import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/2446912.jpg","images/2663543.jpg","images/3969587.jpg","images/5127314.jpg","images/52057.jpg","images/businessman-big-office.jpg","images/carpentry-icon-1.png","images/carpentry-icon-2.png","images/cleaning-icon-1.png","images/cleaning-icon-2.png","images/cleaning.png","images/electrical-icon-1.png","images/electrical-icon-2.png","images/feature-1.png","images/feature-2.png","images/feature-3.png","images/logo.jpeg","images/mission.jpg","images/multi-services.gif","images/painting-icon-1.png","images/painting-icon-2.png","images/pestcontrol-icon-1.png","images/pestcontrol-icon-2.png","images/plumbing-icon-1.png","images/plumbing-icon-2.png","images/profession-service.gif","images/quality-service.gif","images/ringer-2.gif","images/ringer.gif","images/vision.jpg","images/whatsapp.gif","images/working-renovation.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".jpeg":"image/jpeg",".gif":"image/gif"},
	_: {
		client: {"start":"_app/immutable/entry/start.bb5a5581.js","app":"_app/immutable/entry/app.4eb16229.js","imports":["_app/immutable/entry/start.bb5a5581.js","_app/immutable/chunks/scheduler.2aecb5fb.js","_app/immutable/entry/app.4eb16229.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.2aecb5fb.js","_app/immutable/chunks/index.5860dfd8.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
