import express, { Application, Request, Response } from "express";

const app: Application = express();

// Middlewares
app.use(express.json()); // Allows parsing JSON bodies

// Routes
app.get("/", (req: Request, res: Response) => {
  //   console.log({ req, res });
  res.send("New Express JS with Typescript!");
});

app.get("/todos", (req: Request, res: Response) => {
  res.send("Fetching Success.");
});

app.post("/todos/create-todos", (req: Request, res: Response) => {
  res.send("Creating a new todo...");
});

export default app;
