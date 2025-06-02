const http = require("http");
const path = require("path");
const fs = require("fs");

// const filepath = path.join(__dirname "./db/todo.json");

const filepath = path.join(__dirname, "./db/todo.json");

const server1 = http.createServer((req, res) => {
  //   console.log(req.url, req.method);
  if (req.url === "/todos" && req.method === "GET") {
    res.writeHead(203, {
      //   "Content-Type": "application/json",
      "Content-Type": "application/json",
      //   email: "ph3@gmail.com",
    });

    res.end(`<h1>Samiun Arno</h1> <h2>Samiun Arno</h2> <h3>Samiun Arno</h3>`);

    // res.end(JSON.stringify(data));
  } else {
    res.end("Not Found");
  }
});

server1.listen(5000, "127.0.0.1", () => {
  console.log("Server listening on port 5000");
});
