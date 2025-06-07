"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Middlewares
app.use(express_1.default.json()); // Allows parsing JSON bodies
// Routes
app.get("/", (req, res) => {
    //   console.log({ req, res });
    res.send("New Express JS with Typescript!");
});
app.get("/todos", (req, res) => {
    res.send("Fetching Success.");
});
app.post("/todos/create-todos", (req, res) => {
    res.send("Creating a new todo...");
});
exports.default = app;
