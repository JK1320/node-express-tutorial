// started operating system process
console.log("first");

setTimeout(() => {
  console.log("second");
}, 0);

console.log("third");
// completed & exited operating system process

//console printed in the following order
// 1,        first
// 2,        third
// 3,        second
