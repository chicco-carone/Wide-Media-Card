const port = 5173;

Bun.serve({
  hostname: "0.0.0.0",
  port,
  async fetch(request) {
    const url = new URL(request.url);
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-store",
    };

    if (url.pathname !== "/wide-media-card.js") {
      return new Response("Wide Media Card dev server\n", { headers });
    }

    const result = await Bun.build({
      entrypoints: ["src/wide-media-card.ts"],
      target: "browser",
      format: "esm",
      sourcemap: "inline",
      write: false,
    });
    const bundle = result.outputs.find((output) => output.path.endsWith(".js"));
    if (!bundle) return new Response("Build failed", { status: 500, headers });

    return new Response(bundle, {
      headers: { ...headers, "Content-Type": "text/javascript" },
    });
  },
});

console.log(`Wide Media Card dev server: http://0.0.0.0:${port}/wide-media-card.js`);
