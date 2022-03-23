// Event loop:
//       it registers the call back (what needs to be done when the task is complete)
//       can offload some time consuming operations
// async

const { readFile } = require("fs");

console.log("Started first task");
//check file path!
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("first task completed");
});
console.log("starting next task");

//console printed in the following order
//  1,     Started first task
//  2,     starting next task
//  3,     Hello this is first text file
//  4,     first task completed
