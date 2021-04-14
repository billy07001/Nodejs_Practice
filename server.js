var http = require("http");
var url = require("url");

function start(route) {
    function onRequest(request, response) {
        var pathName = url.parse(request.url).pathName;
        route(pathName);

        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Request for " + pathName + " received.");
        response.end();
    }
    http.createServer(onRequest).listen(8880);
}

exports.start = start;