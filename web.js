var express = require('express');
var app = express();
app.use(express.logger());

var buffer = new Buffer(128);
// buffer.write(fs.readFileSync(index.html, utf-8));
buffer.write("String");
var thing = buffer.toString(utf8, 0, buffer.length);

app.get('/', function(request, response) {
  response.send(thing);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
