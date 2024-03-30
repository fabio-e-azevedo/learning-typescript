import { Application, Router } from 'https://deno.land/x/oak/mod.ts'

const router = new Router()

router.get('/hello/:name', (ctx) => {
  ctx.response.body = JSON.stringify({ result: `Hello ${ctx.params.name}!`})
})

const app = new Application()
app.use(router.routes())

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${
      hostname ?? "localhost"
    }:${port}`,
  )
})

await app.listen({ port: 8000 })
