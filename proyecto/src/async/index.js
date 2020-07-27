const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(()=> {
                resolve('success');
            }, 3000)
        }else{
            const error = new Error('error');
            reject(error);
        }
    })
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

const anotherFunction = async () => {
    try{
        const something = await doSomethingAsync();
        console.log(something);
    }catch(error){
        console.error(error);
    }
}

console.log("primero");
anotherFunction();
console.log("tercero");
/********************** */