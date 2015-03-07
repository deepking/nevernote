var http = require("http");

var loginHtml = '                                       \
<!DOCTYPE html>                                         \
<html>                                                  \
    <meta charset="utf-8">                              \
    <head>                                              \
        <title>Login</Title>                            \
    </head>                                             \
    <body>                                              \
    <form action="" method="post">                      \
      <label>Name:</label>                              \
      <input type="text" name="name"></input>           \
      <label>Password:</label>                          \
      <input type="password" name="password"></input>   \
      <input type="submit" value="Login">               \
    </form>                                             \
    </body>                                             \
</html>                                                 \
';

function onRequest(request, response) {
  var method = request.method;
  console.log();
  console.log("==========================================");
  console.log("method", method);

  if (method === "GET") {
    requestLogin(request, response);
  } else if (method == "POST") {
    userLogin(request, response);
  }
}

function requestLogin(request, response) {
  response.writeHead(200, {
    "Content-Type": "text/html",
    "Content-Length": loginHtml.length
  });
  response.write(loginHtml);
  response.end();
}

function userLogin(request, response) {
  var reqBody = "";

  // request body, 也就是 name,password 的部分可能被切成片段送上來,
  // 所以先暫存到 reqBody
  request.on("data", function(chunk) {
    reqBody += chunk.toString();
  });

  // 讀取完所有 data
  request.on("end", function() {
    console.log(reqBody);

    var auth = parseNamePassword(reqBody);
    console.log(auth.name, auth.password);

    var body = "Login OK!";
    response.writeHead(200, {
      "Content-Type": "text/plain",
      "Content-Length": body.length
    });
    response.write(body);
    response.end();
  });
}

function parseNamePassword(s) {
  var ret = {};
  // key1=value1&key2=value2
  var as = s.split("&");
  var key;
  var value;
  var kv;
  var i;
  for (i = 0; i < as.length; i++) {
    kv = as[i].split("="); // key=value
    key = kv[0];
    value = kv[1];
    ret[key] = value;
  }

  return ret;
}

http.createServer(onRequest).listen(3000);
console.log("Listening on port 3000");
