import { Application, serve } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use(serve(async (req, ctx) => {
  console.log(req);
  const url = new URL(req.url);
  const params = url.searchParams;
  console.log(params);
  if (req.body) {
    const body = await req.text();
    console.log("Body:", body);
  }
  return new Response("Hello world!");
}));

app.listen({ port: 8000 });
