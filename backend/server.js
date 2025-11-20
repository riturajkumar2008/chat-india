const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Chat India API running...'));

io.on('connection', (socket) => {
  console.log('User connected');
  socket.on('message', (msg) => {
    io.emit('message', msg);
  });
});

server.listen(5000, () => console.log('Server running on port 5000'));
