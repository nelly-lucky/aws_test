/**
 * Created by mnovytskyi on 10/18/13.
 */
var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World!Gor is the very good programmer!");
    response.end();
}).listen(process.env.PORT || 8888);