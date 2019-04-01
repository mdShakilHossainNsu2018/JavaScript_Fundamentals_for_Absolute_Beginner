let counter = (function () {
    //private
    let count = 0;

    function print(massage) {
        console.log(massage+'----'+count);
    }
    //return an object
    return {
        //value: count,
        get: function() {return count},
        set: function(value){ count = value},
        increment: function () {
            count++;
            print('after increment: ');
        },
        reset: function (){
            print('before increment');
            count = 0;
            print('after reset: ');
        }
    }
})();

counter.increment();
counter.increment();
counter.increment();

//console.log(counter.value);

counter.set(7);

console.log(counter.get());

counter.reset();