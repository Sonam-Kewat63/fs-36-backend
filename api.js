const http = require("http");

const data = [
  {
    name: "sonam",
    age: 30,
    email: "sonam@test.com",
  },
  {
    name: "amit",
    age: 32,
    email: "amit@test.com",
  },
  {
    name: "raj",
    age: 35,
    email: "raj@test.com",
  },
  {
    name: "arun",
    age: 37,
    email: "arun@test.com",
  }
];

http
  .createServer((req, resp) => {
    resp.setHeader("Content-Type", "application/json");
    resp.write(JSON.stringify(data));
    resp.end();
  })
  .listen(5000);
  