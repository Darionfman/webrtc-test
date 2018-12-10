const compression = require('compression');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const http = require('http').Server(app);
var io = require('socket.io')(http);
import HelloController from './controllers/HelloController';
const helloController = new HelloController();
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// SERVES STATIC HOMEPAGE
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});
// This is a route, this points to a controller based off the route that is called
app.get('/hello/:name', helloController.get);

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(8000, () => {
  console.log(`Server running on port 8000.\nKeep "yarn wds" running in an other terminal.`)
});
