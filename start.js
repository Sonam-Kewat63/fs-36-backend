const http = require("http");

http
  .createServer((req, res) => {
    res.write("<h1>this is a galaxy</h1>");
    res.end("Hello Sonam");
  })
  .listen(3000);
