const http = require("http");

const server1 = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/todos" && req.method === "GET") {
    res.setHeader("Content-type", "text/plain");
    res.setHeader("email", "samiunarnouk@gmail.com");
    res.statusCode = 201;
    res.end("Hello");
  } else {
    res.end("Not Found");
  }
});

server1.listen(5000, "127.0.0.1", () => {
  console.log("Server listening on port 5000");
});
