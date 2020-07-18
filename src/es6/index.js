// JavaScript Normal
function newFunction(name, age, country){
    var name = name || 'jose';
    var age = age || 28;
    var country = country || 'Guatemala';
    console.log(name, age, country);
}


// ECMAScript 6
function newFunction2(name = 'karem', age = 50, country  = 'Guatemala'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('jose', 28, 'MX');

// 
let team1 = ['jose', 'alejandro', 'tamayo']
let team2 = ['gloria', 'soraida', 'villagran']

let joinTeam = ['karem', 'beatriz', 'tamayo', ...team1, ...team2]
console.log(joinTeam)


// Promesas
const helloPromise = (()=> {
    return new Promise((resolve, reject) => {
        if(false){
            resolve('success');
        }else{
            reject('error');
        }
    })
})
helloPromise()
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    })


// clases
class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));


//***************** */
import {hello} from './module';
hello();


/********************* */
function* helloWorld(){
    if(true){
        yield 'hello';
    }
    if(true){
        yield ' world';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

