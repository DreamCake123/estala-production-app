const express = require('express');
const mongoose = require('mongoose');
const socketio = require('socket.io');

const productionsRouter = require('./routers/productions')
const submissionRouter = require('./routers/submission')

require('dotenv').config();

const port = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/browse', productionsRouter)
app.use('/submit', submissionRouter)
app.use(express.static('public'));

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});
var db = mongoose.connection;

db.on('error', (err) => console.error(err));
db.once('open', () => console.log("Connected to database"));

server = app.listen(port, () => console.log("Server on"));

io = socketio(server);
io.on('connection', (socket) => {
    console.log("New client connected")
    socket.on('new submit', (data) => {
        io.broadcast.emit('newSubmission', data);
    });
})