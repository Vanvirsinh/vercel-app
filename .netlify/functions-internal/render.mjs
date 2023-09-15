import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/2446912.jpg","images/2663543.jpg","images/3969587.jpg","images/5127314.jpg","images/52057.jpg","images/basin-&-sink.jpg","images/businessman-big-office.jpg","images/carpentry-icon-1.png","images/carpentry-icon-2.png","images/cleaning-icon-1.png","images/cleaning-icon-2.png","images/cleaning.png","images/deep-cleaning-1.jpg","images/deep-cleaning-2.jpg","images/deep-cleaning-3.jpeg","images/deep-cleaning-4.jpg","images/door-bell.jpg","images/electrical-icon-1.png","images/electrical-icon-2.png","images/feature-1.png","images/feature-2.png","images/feature-3.png","images/inverter-&-stabilizer.jpg","images/logo-transparent.png","images/logo.jpeg","images/logo_2.jpeg","images/mcb-&-fuse.jpg","images/mission.jpg","images/multi-services.gif","images/painting-icon-1.png","images/painting-icon-2.png","images/pest-control-1.jpg","images/pest-control-2.jpg","images/pest-control-3.jpg","images/pest-control-4.jpg","images/pestcontrol-icon-1.png","images/pestcontrol-icon-2.png","images/plumbing-icon-1.png","images/plumbing-icon-2.png","images/profession-service.gif","images/quality-service.gif","images/ringer-2.gif","images/ringer.gif","images/service-carpentry-1.jpg","images/service-carpentry-2.jpg","images/service-carpentry-3.jpg","images/service-carpentry-4.jpg","images/service-carpentry-4.webp","images/service-carpentry-bg.jpg","images/service-carpentry.jpg","images/service-deep-cleaning-bg.jpg","images/service-deep-cleaning.jpg","images/service-electrical-bg.jpg","images/service-electrical.jpg","images/service-painting-1.jpg","images/service-painting-2.png","images/service-painting-3.jpg","images/service-painting-4.jpg","images/service-painting-bg.jpg","images/service-painting.jpg","images/service-pest-control-bg.jpg","images/service-pest-control.jpg","images/service-plumbing-bg.jpg","images/service-plumbing.jpg","images/switch-&-socket.jpg","images/tap-&-mixer.jpg","images/toilet.jpg","images/vision.jpg","images/water-filter.jpg","images/whatsapp.gif","images/working-renovation.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".jpeg":"image/jpeg",".gif":"image/gif",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.b18271c3.js","app":"_app/immutable/entry/app.058ebb0b.js","imports":["_app/immutable/entry/start.b18271c3.js","_app/immutable/chunks/scheduler.aef4e382.js","_app/immutable/entry/app.058ebb0b.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.aef4e382.js","_app/immutable/chunks/index.b280f364.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js'))
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
			},
			{
				id: "/services/[slug]",
				pattern: /^\/services\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
