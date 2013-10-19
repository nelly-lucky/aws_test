/**
 * Created by mnovytskyi on 10/18/13.
 */
var http = require("http");
var test = require('test');
test();

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World!<p>Gor is the very good programmer!</p>");
    console.log("Okay");
    console.log("Okay", process.env.PORT);
    response.end();
}).listen(process.env.PORT || 8080);