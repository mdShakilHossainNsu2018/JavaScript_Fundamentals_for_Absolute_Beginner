function sayHello(name) {
    return function () {
        console.log('hi '+ name);
    }
}

let bob = sayHello('boob');
let shakil = sayHello("shakil");

bob();
shakil();