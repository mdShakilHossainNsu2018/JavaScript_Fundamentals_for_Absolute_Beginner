// function exp() {
//     try {
//         let obj = undefined;
//         console.log(obj.b);
//         console.log("this will not be exicutted")
//     }catch (e) {
//         console.log("I caught an exception : "+ e.message);
//     }finally {
//         console.log("It will allows show");
//     }
//     console.log("I am still alive");
// }
// exp();
function calc(obj) {
    if (!obj.hasOwnProperty('b')){
        throw new Error("Object missing.");
    }
    return 6;
}

function hiCalc() {
    let obj = {};
    let value = 0;
    try {
        let varsf = calc(obj);
    }catch (e) {
        console.log(e.message);
    }
}
hiCalc();