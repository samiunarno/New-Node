//syncho

const fs = require("fs");

const texts = "New NodeJs";

fs.writeFileSync("./hello.txt", texts);

const data = fs.readFileSync("./hello.txt", { encoding: "utf-8" });

console.log(data);

//Asyncho
