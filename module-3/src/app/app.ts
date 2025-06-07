import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";
const app: Application = express();

const filepath = path.join(__dirname, "./../../db/tsc.json");

// Middlewares
app.use(express.json()); // Allows parsing JSON bodies

// Routes
app.get("/", (req: Request, res: Response) => {
  //   console.log({ req, res });
  res.send("New Express JS with Typescript!");
});

app.get("/arno", (req: Request, res: Response) => {
  const data = fs.readFileSync(filepath, { encoding: "utf-8" });
  //   res.writeHead(200, {
  //     "content-type": "application/json",
  //   });
  console.log(data);
  res.send("Hello world");
});

app.post("/todos/create-todos", (req: Request, res: Response) => {
  res.send("Creating a new todo...");
});

export default app;
