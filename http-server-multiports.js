var http = require('http');

var servers = [];
var s;

function reqHandler(req, res) {
  var clientIP = getClientIP(req);
  var response = 'Client IP:' + clientIP + '\n';
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(response);
  console.log({
        remoteAddress: req.socket.remoteAddress,
        remotePort: req.socket.remotePort,
        localAddress: req.socket.localAddress,
        localPort: req.socket.localPort,
    });
}
for (let port = 8000; port < 8050; port++) {
  s = http.createServer(reqHandler);
  s.listen(port);
  servers.push(s);
}

function getClientIP(req) {
  //var strAry = req.connection.remoteAddress.split(':');
  //return strAry[strAry.length -1];
  //return req.connection.remoteAddress;
  console.log("x-forwarded-for %s", req.headers['x-forwarded-for']);
  console.log("Remote IP %s", req.connection.remoteAddress);
  console.log("IPs %s", req.ips);

  return (req.headers['x-forwarded-for'] || '').split(',')[0]
        || req.connection.remoteAddress;
}
