var express = require('express');
var app = express();
app.use(express.logger());

var buffer = new Buffer(fs.readFileSync('index.html'));
var thing = buffer.toString;

app.get('/', function(request, response) {
  response.send(thing);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
