let array = [1,2,3,[4,5,6,[7,8,9]]];

console.log(array.flat(2));

let array2 = [1,2,3,4,5,6];
console.log(array2.flatMap(value => [value, value *2]));

/**************************** */
const helloWorld = function(){
    return new Promise((resolve, reject)=>{
        if(false){
            resolve('success');
        }else{
            reject(new Error('error'));
        }
    })
}

helloWorld()
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log('Finalizo');
    })