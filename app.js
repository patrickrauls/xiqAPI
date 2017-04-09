require('dotenv').config();

const express = require('express'),
    body_parser = require('body-parser'),
    socket = require('socket.io');

const route = require('./routes/index'),
    courses = require('./routes/courses'),
    players = require('./routes/players'),
    scores = require('./routes/scores'),
    tournaments = routes('./routes/tournaments');

const app = express(),
    json_parser = body_parser.json();

app.use(body_parser.urlencoded({
    extended: false
}))
app.use(json_parser)
app.use('/v1', route);
app.use('/v1/courses', courses);
app.use('/v1/players', players);
app.use('/v1/scores', scores);
app.use('/v1/tournaments', tournaments);

app.listen(3000)
module.exports = app;