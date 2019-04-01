let orginalCar = {
  make: "bmw",
    model : 'jksdjk2332',
    year: 2019
};

let newCar = Object.create(orginalCar);

newCar.make = "audi";
console.log(newCar.make);
console.log(orginalCar.make);

console.log(Object.getPrototypeOf(newCar));

let mycar = Object.getPrototypeOf(newCar);
console.log(mycar.make);

newCar.door = 5;
console.log(newCar.door);
console.log(orginalCar.door);
console.log(newCar.hasOwnProperty('make'));
console.log(newCar.hasOwnProperty('door'));
console.log(orginalCar.hasOwnProperty('make'));
console.log(orginalCar.hasOwnProperty('door'));
