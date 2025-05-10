/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  server: "./app/entry.server.tsx",
  serverConditions: ["workerd", "worker", "browser"],
  serverDependenciesToBundle: "all",
  serverMainFields: ["browser", "module", "main"],
  serverMinify: true,
  serverModuleFormat: "esm",
  serverPlatform: "neutral",
  serverNodeBuiltinsPolyfill: {
    modules: {
      path: true,
      buffer: true
    }
  },
  future: {
    v3_fetcherPersist: true,
    v3_relativeSplatPath: true,
    v3_throwAbortReason: true
  },
  routes(defineRoutes) {
    return defineRoutes((route) => {
      // Define any custom route mappings here if needed
    });
  }
};
