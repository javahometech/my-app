var udp = require('dgram');
var buffer = require('buffer');

// creating a client socket
var client = udp.createSocket('udp4');

//buffer msg
var data = Buffer.from('siddheshrane');

var arguments = process.argv.splice(2);
var IP = arguments.toString();
if (IP == '') {
    console.log("Format: node udp-client.js IP")
    process.exit();
}

client.on('message',function(msg,info){
  console.log('Data received from server : ' + msg.toString());
  console.log('Received %d bytes from %s:%d\n',msg.length, info.address, info.port);
});

//sending msg
client.send(data,2222,IP,function(error){
  if(error){
    client.close();
  }else{
    console.log('Data sent !!!');
  }
});

var data1 = Buffer.from('hello');
var data2 = Buffer.from('world');

//sending multiple msg
client.send([data1,data2],2222,IP,function(error){
  if(error){
    client.close();
  }else{
    console.log('Data sent !!!');
  }
});
