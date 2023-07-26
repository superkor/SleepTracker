const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const routes = require('./server/routes');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'dist\\sleep-tracker')));
app.use('/api', routes);
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
const dotenv = require('dotenv').config({'path': "./environment.env"}).parsed;
mongoose.connect('mongodb+srv://'+dotenv.USERNAME+':'+dotenv.PASSWORD+'@cluster0.l4500av.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.on('error', console.error.bind(console, 'Database connection error:'));
mongoose.connection.once('open', function () {
  console.info('Successfully connected to the database');
});
const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, function () {
  console.info(`Server started on http://localhost:${port}`)
});