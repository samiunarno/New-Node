const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello Its Me Arno  ");
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server Hearing Port 5000");
});
