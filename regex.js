let pattern = /xyz/;
let pattern2 = /xyz/g;  // this for all replace

// console.log(pattern);
// console.log(typeof pattern);

let value = "this is a xyz  and xyz";

console.log(pattern.test(value));
console.log(value.replace(pattern, "just"));
console.log(value.replace(pattern2, "just"));

console.log(value.match(pattern));
console.log(value.match(pattern2));

var match = value.match(pattern);
console.log(match.index);