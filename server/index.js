const compression = require('compression');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
var io = require('socket.io')(http);

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// SERVES STATIC HOMEPAGE
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});
io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(8000, () => {
  console.log(`Server running on port 8000.\nKeep "yarn wds" running in an other terminal.`)
});
