function sayHello() {
    console.log("============================");
    console.log("hello world");
    console.log("============================");
}
sayHello();

let a = sayHello;
a();
a();
a();

function sayHello(name) {
    console.log("============================");
    console.log("hello "+name);
    console.log("============================");
}
sayHello("shakil");
sayHello(54);