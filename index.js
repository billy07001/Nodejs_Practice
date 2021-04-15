var server = require("./server");
var router = require("./router");
var requesthandlers = require("./reqoestHandlers");

var handler = {}
handler["/"] = requesthandlers.start;
handler["/start"] = requesthandlers.start;
handler["/upload"] = requesthandlers.upload;

server.start(router.route, handler);