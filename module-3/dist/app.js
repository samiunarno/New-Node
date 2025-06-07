"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const filepath = path_1.default.join(__dirname, "./../../db/tsc.json");
// Middlewares
app.use(express_1.default.json()); // Allows parsing JSON bodies
// Routes
app.get("/", (req, res) => {
    //   console.log({ req, res });
    res.send("New Express JS with Typescript!");
});
app.get("/arno", (req, res) => {
    const data = fs_1.default.readFileSync(filepath, { encoding: "utf-8" });
    //   res.writeHead(200, {
    //     "content-type": "application/json",
    //   });
    console.log(data);
    res.send("Hello world");
});
app.post("/todos/create-todos", (req, res) => {
    res.send("Creating a new todo...");
});
exports.default = app;
