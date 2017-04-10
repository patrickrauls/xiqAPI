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
app.use('/v1/courses', courses);
app.use('/v1/players', players);
app.use('/v1/scores', scores);
app.use('/v1/tournaments', tournaments);

server.listen(3000)

module.exports = app;