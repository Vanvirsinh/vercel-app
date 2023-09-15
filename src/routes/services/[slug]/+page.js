import { services } from "./service.js";

export function load(params) {
    if (params === 'plumbing') {
        return services.plumbing;
    } else if (params === 'electrical') {
        return services.electrical;
    }
    else if (params === 'pest-control') {
        return services.pestControl;
    }
    else if (params === 'deep-cleaning') {
        return services.deepCleaning;
    }
    else if (params === 'painting') {
        return services.painting;
    }
    else if (params === 'carpentry') {
        return services.carpentry;
    }
    else {
        return {};
    }
}