var http = require('http');

http.createServer(function(request, response) {
    setTimeout(function() {
        response.writeHead(200);
        response.end('');
    }, 10000);
}).listen(8899);

console.log('slow resource server running at 8899');
