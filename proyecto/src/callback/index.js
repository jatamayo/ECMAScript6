function sum(val1, val2){
    return val1 + val2;
}

function calc(val1, val2, callback){
    return callback(val1, val2);
}

console.log(calc(2, 2, sum));

