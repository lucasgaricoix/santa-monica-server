const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes')

const server = express();
const serverSide = require('http').Server(server);
const io = require('socket.io')(serverSide);

server.use(cors());

io.on('connection', socket => {
  socket.on('connectRoom', room => {
    socket.join(room);
  })
})

mongoose.connect('mongodb+srv://lgaricoix:010133@cluster0-ndgtd.mongodb.net/santamonica?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

server.use((req, res, next) => {
  req.io = io;
  return next();
})

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(routes);

server.listen(process.env.PORT || '3333');