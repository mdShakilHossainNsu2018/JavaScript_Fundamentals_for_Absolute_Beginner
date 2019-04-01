function two() {
    return function () {
        console.log("two");
    }
}

let myfunc = two();
myfunc();