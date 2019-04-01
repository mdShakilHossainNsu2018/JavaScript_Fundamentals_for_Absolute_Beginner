let car = {
    make: "bmw",
    model: "7dahk",
    year: 2000,
    getPrice: function () {
        return 20000;
    },
    printDiscription: function () {
        console.log(this.make+" "+this.model);
    }
};
car.printDiscription();
console.log(car.getPrice());
console.log(car['model']);

let anycar = {
};
anycar.new = "Lc";
console.log(anycar.new);

let a = {
    myProperty:{b: "hi"}
};

console.log(a.myProperty.b)
