//installed lodash as dependency first (npm i lodash) & then require here
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
// we get this: [ 1, 2, 3, 4 ] in console
