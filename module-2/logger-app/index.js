const path = require("path");
const fs = require("fs");

const inputArguments = process.argv.slice(2);

const text = inputArguments.join(" ");

if (!text) {
  console.log("Please Provide Some Text");
  console.log("Example : node index.js 'Hello'");
  process.exit(1);
}

const filePath = path.join(__dirname, "./logs.txt");

fs.writeFile(filePath, text + "\n", { encoding: "utf-8" }, (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("Text Written Successfully");
  console.log(filePath);
});
