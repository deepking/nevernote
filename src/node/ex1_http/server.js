var http = require("http");

function onRequest(request, response) {
  console.log();
  console.log("=====================================================");
  // handle request
  console.log("method", ":", request.method);
  console.log("url", ":", request.url);
  console.log("------------------------------------------");
  var key;
  var value;
  for (key in request.headers) {
    value = request.headers[key];
    console.log(key, ":", value);
  }

  // send response
  var body = "Hello world";
  response.writeHead(200,  {
    "Content-Length": body.length,
    "Content-Type": "text/plain"
  });
  response.write(body);
  response.end();
}

http.createServer(onRequest).listen(3000);
console.log("Listening on port 3000");
