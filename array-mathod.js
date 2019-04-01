let lost = [4, 8, 12, 12,34, 23, 43, 54,6, 5,67];
let fib = [1, 1, 3, 5, 6, 8, 9 ];
let names = ["shakil", "hdksj", "fdjakl"];
var combine = lost.concat(fib);

console.log(combine);
console.log(fib.join("~"));

console.log(lost.shift());
console.log(lost.shift());
console.log(lost);

lost.unshift(1, 2 ,3 ,4,);
console.log(lost);
console.log(lost.reverse());
console.log(lost.sort());
console.log(lost.indexOf(2));
console.log(combine.lastIndexOf(12));
var fil = combine.filter((x)=> {if (x < 20) return x;});
console.log(fil);

names.forEach((n) => console.log(`hi ${n}`));

console.log(fib.every((num)=> num<100 ));
console.log(fib.every((num)=> num<5 ));
console.log(fib.some((num)=> num<5 ));



