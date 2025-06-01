const fs = require("fs");

fs.readFile("./File.txt", { encoding: "utf8" }, (err, data) => {
  if (err) {
    console.log("Something Went Wrong", err);
    return;
  }

  fs.writeFile("./FIle1.txt", data, { encoding: "utf8" }, (err) => {
    if (err) {
      console.log("Something Went Wrong", err);
      return;
    }
    console.log("Written Success");
  });
});

const fs = require("fs");

const readStream = fs.createReadStream("./File.txt", { encoding: "utf-8" });
const writeStream = fs.createWriteStream("./File1.txt", { encoding: "utf-8" });

// readStream.pipe(writeStream);

readStream.on("data", (data) => {
  console.log(data);

  writeStream.write(data, (err) => {
    if (err) {
      throw Error("Error", err);
    }
  });
});

readStream.on("error", (err) => {
  throw Error("Error", err);
});

readStream.on("end", () => {
  console.log("FIle Read");
  writeStream.end(() => {
    console.log("Write Finished");
  });
});
