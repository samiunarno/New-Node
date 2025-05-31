const fs = require("fs");

console.log("Task1");

let text = "Node JS";

fs.readFileSync("./hello.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("Something went Wrong", err);
    return;
  }
  console.log("After Writing :", data);
});

fs.readFileSync("./hello.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("Something Went Wrong", err);
    return;
  }
  text = data;
  console.log("After Reading :", text);
});
