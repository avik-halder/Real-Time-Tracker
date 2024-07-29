const express = require('express');
const app = express();
const path = require("path");
const http = require("http");

const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const users = {}; // To store user data

io.on("connection", function(socket) {
    console.log("Client connected: " + socket.id);

    socket.on("send-location", function(data) {
        console.log(`Received location from ${socket.id}:`, data);
        users[socket.id] = data; // Store user location data
        io.emit("received-location", { id: socket.id, ...data });
    });

    socket.on("disconnect", function() {
        console.log("Client disconnected: " + socket.id);
        delete users[socket.id]; // Remove user data on disconnect
        io.emit("user-disconnected", socket.id);
    });
});

app.get("/", function (req, res) {
    res.render("index");
});

server.listen(3000);
