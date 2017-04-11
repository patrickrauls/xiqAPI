require('dotenv').config();

const express = require('express'),
    http = require('http'),
    body_parser = require('body-parser'),
    cors = require('cors')
    socket = require('socket.io');

const route = require('./routes/index'),
    courses = require('./routes/courses'),
    holes = require('./routes/holes'),
    players = require('./routes/players'),
    scores = require('./routes/scores'),
    distance = require('./routes/distance'),
    tournaments = require('./routes/tournaments');

const app = express(),
    server = http.createServer(app),
    json_parser = body_parser.json();

app.use(body_parser.urlencoded({
    extended: false
}))
app.use(cors());
app.use(json_parser)
app.use('/v1', route);
app.use('/v1/holes', holes);
app.use('/v1/courses', courses);
app.use('/v1/players', players);
app.use('/v1/distance', distance);
app.use('/v1/scores', scores);
app.use('/v1/tournaments', tournaments);

const io = socket(server);

io.on('connection', socket => {
    console.log('user connected', socket)
})
io.on('disconnect', socket => {
    console.log('user disconnected', socket)
})
server.listen(3000)

module.exports = app;