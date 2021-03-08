//express_demo.js file
var express = require('express');
var app = express();
var os = require('os');
var fs = require("fs");


const stringRandom = require('string-random');
const str2 = stringRandom(10240);

app.set('trust proxy', true)

app.get('/', function (req, res) {
  //var filestatus = getResult();
  var clientIP = getClientIP(req);
  var localIP = getLocalIP();
  var msg = 'Client IP: ' + clientIP + '\n' + 'Local IP: ' + localIP + '\n';
  //msg = msg + str2;
  res.send(msg);
})

app.get('/check200', function (req, res) {
  res.status(201);
  res.send("201");
})

app.get('/check300', function (req, res) {
  res.status(301);
  res.send("301");
})

app.get('/check400', function (req, res) {
  res.status(401);
  res.send("401");
})

app.get('/check500', function (req, res) {
  res.status(501);
  res.send("501");
})

var server = app.listen(80, '0.0.0.0', function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Host，port  http://%s:%s", host, port);

})

function getLocalIP() {
  var interfaces = os.networkInterfaces();
  var IPv4;
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        IPv4 = alias.address;
      }
    }
  }
  return IPv4;
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

function sleep(numberMillis) {
  var now = new Date();
  var exitTime = now.getTime() + numberMillis;
  while (true) {
    now = new Date();
    if (now.getTime() > exitTime)
    return;
  }
}
