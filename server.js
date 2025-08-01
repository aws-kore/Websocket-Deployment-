// server.js
const WebSocket = require('ws');
const http = require('http');

const PORT = 87;

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('New connection');
  ws.send('Hello from WebSocket server');

  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
  });
});

server.listen(PORT, () => {
  console.log(`WebSocket server is running on port ${PORT}`);
});
