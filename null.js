let a;
console.log(a);
console.log(typeof a);

let p = /xyx/;
let str = "this is a simple";
let res = str.match(p);
console.log(res);
console.log(typeof res);
if (res===null){
    console.log("not found");
}