// Events in node.js - they are core building blocks
// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance

const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data received user ${name} with id: ${id}`);
});

customEmitter.on("response", () => {
  console.log(`some other logic here `);
});

//order is important - first listen to the event & then emit
// can have as many listening events as above
// can pass the arguments when emitting - can pass more arguments
customEmitter.emit("response", "john", 34);
