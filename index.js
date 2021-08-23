function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x/y;
}

function increment(x){
    return ++x;
}

function decrement(x){
    return --x;
}

function makeInt(string){
    return parseInt(string, 10);
}

function preserveDecimal(string){
    return parseFloat(string, 10);
}

console.log(add(2,2));
console.log(subtract(2,1));
console.log(multiply(42,10));
console.log(divide(9,3));

console.log(increment(7));
console.log(decrement(7));
console.log(makeInt('69'));
console.log(makeInt('Candy'));
console.log(preserveDecimal('7.777'));