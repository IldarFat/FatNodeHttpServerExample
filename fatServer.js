var http_port = 8181;
var http = require('http');
var htutils = require('./htutils');
let countPreviewMain = 0;
let countPreviewAbout = 0;
let countErrorRequest = 0;

var server = http.createServer(function(req, res){
    htutils.loadParams(req, res, undefined);
    if (req.requrl.pathname === '/'){
        countPreviewMain++;
        res.writeHead(200,{'Content-Type': 'text/html; charset=UTF-8'});
        res.end('<a href="/">Main Page</a><br><a href="/about">About server</a>');
    } else if (req.requrl.pathname === '/about'){
        countPreviewAbout++;
        res.writeHead(200,{'Content-Type': 'text/html; charset=UTF-8'});
        res.end('<a href="/about">About server</a>');        
    } else {
        countErrorRequest++;
        res.writeHead(404, {'Content-Type': 'text/plain; charset=UTF-8'});
        res.end("bad URL " + req.url);
    } 
})

server.listen(http_port);
console.log('listening to http://localhost:8181');

