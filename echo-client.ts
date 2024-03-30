const ws = new WebSocket('ws://localhost:8080')

ws.onmessage = (e) => {
  console.log('Message from server:', e.data)
  ws.close()
  Deno.exit(0)
}

ws.onopen = () => {
  let input
  do {
    input = prompt('Enter a message to send to the server: ')
  } while (!input)
  ws.send(input)
}
