// Load the http module to create an http server.
var http = require('http');
var $ = require('jQuery');
require("jsdom").jsdom;

var fetch = function(url) {
http.get(url, function(res){
    var body = '';

    res.on('data', function(chunk){
        body += chunk;
    });

    res.on('end', function(){
        var fbResponse = JSON.parse(body);
        console.log("Got a response: ", fbResponse);
        return fbResponse;
    });
}).on('error', function(e){
      console.log("Got an error: ", e);
});

}

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");

 $.get('https://api.blockcypher.com/v1/btc/main/wallets/alice/addresses?token=647fa4eb01594676a8b2d12b3e4458d2')
     .then(function(d) {console.log(d)});

//fetch('https://api.blockcypher.com/v1/btc/main/wallets/alice/addresses?token=647fa4eb01594676a8b2d12b3e4458d2');
//console.log(wallet);