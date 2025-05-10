/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  server: "./app/entry.server.tsx",
  serverConditions: ["node", "import", "require"],
  serverDependenciesToBundle: "all",
  serverMainFields: ["module", "main"],
  serverMinify: true,
  serverModuleFormat: "esm",
  serverPlatform: "node",
  publicPath: "/build/",
  serverNodeBuiltinsPolyfill: {
    modules: {
      path: true,
      crypto: true,
      buffer: true,
      util: true,
      url: true,
      stream: true,
      http: true,
      https: true,
      zlib: true,
      events: true,
      assert: true
    }
  },
  future: {
    v3_fetcherPersist: true,
    v3_relativeSplatPath: true,
    v3_throwAbortReason: true,
    unstable_postcss: true,
    unstable_tailwind: true,
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true
  }
};
