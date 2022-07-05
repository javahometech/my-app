
var udp = require('dgram');
var buffer = require('buffer');
let timer = null

// creating a client socket
var client = udp.createSocket('udp4');

//buffer msg
var data = Buffer.from('siddheshrane');

var arguments = process.argv[2]
var IP = arguments.toString();
if (IP == '') {
    console.log("Format: node udp-client.js IP port")
    process.exit();
}

argument2 = process.argv.splice(3);
var port = argument2.toString();
if (port == '') {
    console.log("Format: node udp-client.js IP port")
    process.exit();
}

//sending msg
client.send(data,port,IP,function(error){
  isTimeout()
  if(error){
    client.close();
  }
});

client.on('message',function(msg,info){
  clearTimeout(timer)
  console.log('server:' + msg.toString());
  client.close();
});

function isTimeout () {
  timer = setTimeout(() => {
      console.log('udp request timeout')
      client.close();
      process.exit();
  }, 9000)
}
