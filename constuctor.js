function Car(make, year,modle ) {
    this.make = make;
    this.year = year;
    this.model = modle;
}

let car = new Car("dads", 32, "fsdfffff");
console.log(car);
console.log(typeof car);

function MyFunction() {
    console.log("constuctor so it will");
}
MyFunction();
let fuc = new MyFunction();
