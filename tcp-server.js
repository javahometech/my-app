
//server.js
var net = require('net') ;
const os = require('os');
var stringify = require('json-stringify-safe');

var server = net.createServer(function(socket) {
    /* get IP address of local host */
    var interfaces = os.networkInterfaces();
    var addresses = [];
    for (var k in interfaces) {
        for (var k2 in interfaces[k]) {
            var address = interfaces[k][k2];
            if (address.family === 'IPv4' && !address.internal) {
                addresses.push(address.address);
            }
        }
    }
    
    var IP = addresses[0];
    var strIP = stringify(IP);

    socket.write(strIP);
    socket.on("data", function(data) {
      console.log(data.toString());
    });
    socket.on("end", function() {
      console.log('clinet ends！！！');
    });
    socket.on('error', function() {
      console.log('something error！！！');
    });
}) ;
server.listen(8000,function(){
    console.log("Creat server on http://127.0.0.1:8000/");
}) ;
