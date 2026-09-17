globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as installRenderScope } from "./entrypoints_CgHkup9v.mjs";
//#region node_modules/@astrojs/cloudflare/dist/utils/prerender-scope.js
var warned = false;
async function ensurePrerenderScope(logger) {
	try {
		const { AsyncLocalStorage } = await import("node:async_hooks");
		installRenderScope(new AsyncLocalStorage());
	} catch {
		if (!warned) {
			warned = true;
			logger.warn("build", "AsyncLocalStorage is unavailable in this worker; incremental metadata will not be collected for prerendered paths. Enable the nodejs_als or nodejs_compat compatibility flag.");
		}
	}
}
//#endregion
export { ensurePrerenderScope };
