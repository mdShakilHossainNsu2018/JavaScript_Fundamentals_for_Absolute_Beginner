// let car = {
//     make: "bmw",
//     model: "7dahk",
//     year: 2000,
//     getPrice: function () {
//         return 20000;
//     },
//     printDiscription: function () {
//         console.log(this.make+" "+this.model);
//     }
// };
// car.printDiscription();
//
// function first() {
//     return this;
// }
//
// console.log(first() === global);
//
// function second() {
//     'use strict';
//
//     return this;
// }
//
// console.log(second()===global);
// console.log(second()===undefined);
// let object = {value: 'My object '};
//
// global.value = 'Global object';
//
// function third(name) {
//     return this.value+name;
// }
//
// console.log(third());
// console.log(third.call(object, "shakil"));
// console.log(third.apply(object, ['bob']));

function fift() {
    console.log(this.firstName+ ' '+this.lastName )
}

let customar1 = {
    firstName: 'bob',
    lastName: 'thosh',
    print: fift
};

let customar2 = {
    firstName: 'bobds',
    lastName: 'thosdfah',
    print: fift
};

customar1.print();
customar2.print();