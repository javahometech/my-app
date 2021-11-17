var http = require('http');

var servers = [];
var s;

function reqHandler(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
  console.log({
        remoteAddress: req.socket.remoteAddress,
        remotePort: req.socket.remotePort,
        localAddress: req.socket.localAddress,
        localPort: req.socket.localPort,
    });
}
for (let port = 8001; port <= 8050; port++) {
  s = http.createServer(reqHandler);
  s.listen(port);
  servers.push(s);
}
