
//server.js
var net = require('net') ;
const os = require('os');
var stringify = require('json-stringify-safe');

var server = net.createServer(function(socket) {
    /* get IP address of local host */
    var netinfo = os.networkInterfaces();
    var IP = netinfo.eth0[0].address;
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
