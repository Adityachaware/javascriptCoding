//08) write a closure example of counter.

function counter(id) {
    let count = 0;
    return function() {
     count = count +1;
     document.getElementById(id).innerHTML = count;
    };

};

let counter1 = counter("btn1");
let counter2 = counter("btn2");

