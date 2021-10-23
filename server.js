const express = require("express");
const path = require('path');
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Run when client connects
io.on('connection', socket=> {
  console.log('New WS Connection...');
});


const PORT = 3000 || process.env.PORT;

io.on("connection", socket => {
    //Welcome current user
    socket.emit('message', 'Welcome to ...!');

    //Broadcast when a user connects
    socket.broadcast.emit('message', 'A user has joined the chat');

    //Runs when a client disconnects
    socket.on('disconnect', () => {
        io.emit('message', 'A user has left the chat');
    });

    //Message Submit - Maybe Replace Later 
    socket.emit("your id", socket.id);
    socket.on("send message", body => {
        io.emit("message", body)
    })
})

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, './client/public/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })
  
server.listen(8000, () => console.log("server is running on port 8000"));