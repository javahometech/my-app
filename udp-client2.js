
var udp = require('dgram');
var buffer = require('buffer');

// creating a client socket
var client = udp.createSocket('udp4');

//buffer msg
var data = Buffer.from('siddheshrane');

var arguments = process.argv.splice(2);
var IP = arguments.toString();
if (IP == '') {
    console.log("Format: node udp-client.js IP port")
    process.exit();
}

arguments = process.argv.splice(3);
var port = arguments.toString();
if (port == '') {
    console.log("Format: node udp-client.js IP port")
    process.exit();
}

//sending msg
client.send(data,port,IP,function(error){
  if(error){
    client.close();
  }else{
    console.log('Data sent !!!');
  }
});

client.on('message',function(msg,info){
  console.log('Data received from server : ' + msg.toString());
  console.log('Received %d bytes from %s:%d\n',msg.length, info.address, info.port);
  client.close();
});

var data1 = Buffer.from('hello');
var data2 = Buffer.from('world');

//sending multiple msg
client.send([data1,data2],port,IP,function(error){
  if(error){
    client.close();
  }else{
    console.log('Data sent !!!');
  }
});
