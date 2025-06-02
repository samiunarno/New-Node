const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  // res.end("Hello Its Me Arno  ");
  if (req.url === "/todos" && req.method === "GET") {
    res.end("Welcoome to Samiun Mahmud");
  } else if (req.url === "/todos/create-todo" && req.method === "") {
    res.end("Create a new To DO");
  } else {
    res.end("Not Found");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server Hearing Port 5000");
});
