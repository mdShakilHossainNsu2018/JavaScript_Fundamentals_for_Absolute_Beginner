class Car {
    constructor(make, model, year ){

        this.make = make;
        this.model = model;
        this.year = year;
    }
    print(){
    console.log(`make: ${this.make} model: ${this.model} year: ${this.year}`);
    }
}

let myCar = new Car("bmw", "dsijk3432", 4622);
myCar.print();

class sportsCar extends Car{
    spPrint(){
        console.log(`eoiruaknjh dhffkjsdh hhygdsffh ${this.make}`);
    }
}

let spCar = new sportsCar("audi", "gds323", 3276);

spCar.spPrint();