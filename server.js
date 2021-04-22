var http = require("http");
var url = require("url");

function start(route, handler) {
    function onRequest(request, response) {
        var pathName = url.parse(request.url).pathname;
        if (pathName != '/favicon.ico') {
            route(handler, pathName, response);
        }
    }
    http.createServer(onRequest).listen(8880);
}

exports.start = start;