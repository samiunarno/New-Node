const http = require("http");
const path = require("path");
const fs = require("fs");

const filepath = path.join(__dirname, "./db/todo.json");

const server1 = http.createServer((req, res) => {
  if (req.url === "/todos" && req.method === "GET") {
    // Read JSON file asynchronously
    fs.readFile(filepath, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Failed to read todo file" }));
        return;
      }

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data); // File content is already a JSON string
    });
  } else if (req.url === "/todoapp/create-todo" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const newTodo = JSON.parse(body);

        // Read current todos
        const todos = JSON.parse(fs.readFileSync(filepath, "utf-8"));

        // Add new todo
        todos.push(newTodo);

        // Save updated todos
        fs.writeFileSync(filepath, JSON.stringify(todos, null, 2), "utf-8");

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "To Do Created", todo: newTodo }));
      } catch (err) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON data" }));
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server1.listen(5000, "127.0.0.1", () => {
  console.log("Server listening on port 5000");
});
