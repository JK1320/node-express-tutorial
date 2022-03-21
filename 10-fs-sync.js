// fs module (sync)
const { readFileSync, writeFileSync } = require("fs");

console.log("start");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

//created result-sync.txt with the value: `Here is the result: ${first}, ${second}`
//& overrides any values in the file
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second},`,
  { flag: "a" }
); // keep original and create new, repeat value

console.log("done with task");
console.log("starting next one");