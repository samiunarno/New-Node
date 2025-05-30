const EventEmitter = require("node:events");

class SchoolBell extends EventEmitter {}

const schoolBells = new SchoolBell();

// Listen for the "Ring" event
schoolBells.on("ring", () => {
  console.log("Class Complete");
});

schoolBells.on("ring", () => {
  console.log("Dhet Arekta Class");
});

schoolBells.on("broken", () => {
  console.log("Broken Bell");
});

// Emit the "Ring" event
schoolBells.emit("ring");
