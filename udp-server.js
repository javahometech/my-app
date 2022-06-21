var udp = require('dgram');
const os = require('os');
var stringify = require('json-stringify-safe');

// --------------------creating a udp server --------------------

// creating a udp server
var server = udp.createSocket('udp4');

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

// emits when any error occurs
server.on('error',function(error){
  console.log('Error: ' + error);
  server.close();
});

// emits on new datagram msg
server.on('message',function(msg,info){
  console.log('Data received from client : ' + msg.toString());
  console.log('Received %d bytes from %s:%d\n',msg.length, info.address, info.port);

//sending msg
var msgResponse = strIP;
server.send(msgResponse,0,msgResponse.length, info.port,info.address,function(error){
  if(error){
    server.close();
  }else{
    console.log('Data sent !!!');
  }

});

});

//emits when socket is ready and listening for datagram msgs
server.on('listening',function(){
  var address = server.address();
  var port = address.port;
  var family = address.family;
  var ipaddr = address.address;
  console.log('Server is listening at port' + port);
  console.log('Server ip :' + ipaddr);
  console.log('Server is IP4/IP6 : ' + family);
});

//emits after the socket is closed using socket.close();
server.on('close',function(){
  console.log('Socket is closed !');
});

server.bind(9000);

//setTimeout(function(){
//server.close();
//},8000);
