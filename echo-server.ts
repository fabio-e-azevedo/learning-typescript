const port = 8080
const conn = Deno.listen({ port })
const httpConn = Deno.serveHttp(await conn.accept())
const requestEvent = await httpConn.nextRequest()

if (requestEvent) {
  const { socket, response } = Deno.upgradeWebSocket(requestEvent.request)
  socket.onopen = () => {
    console.log('Client connected')
    socket.send('Hello from Deno!')
  }

  socket.onmessage = (e) => {
    socket.send('You said: ' + e.data)
  }
  socket.onclose = () => console.log('WebSocket has been closed.')
  socket.onerror = (e) => console.error('WebSocket error:', e)
  requestEvent.respondWith(response)
}
