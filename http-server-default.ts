import { serve } from 'https://deno.land/std/http/server.ts'

serve(
  (_req) => {
    return new Response('Hello World')
  },
  { port: 3000 }
)

