var http = require('http'),
    httpProxy = require('http-proxy');
//
// Create your proxy server and set the target in the options.
//
var proxy = httpProxy.createProxyServer({target:'http://192.168.58.133:8080'}).listen(1337); // See (†)

proxy.on('error', function(err,req,res){
	res.end();
})

//
// Create your target server
//
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
  res.end();
}).listen(9000);