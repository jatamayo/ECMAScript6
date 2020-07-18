// valores de un objeto a un arreglo
const data = {
    frontend: 'oscar',
    backend: 'tamayo',
    design: 'testing'
}

const values = Object.values(data);
console.log(values);


//************ ***********************************************/
// async await

const hellowWorld = () => {
    return new Promise((resolve, reject) =>{
        if(true){
            setTimeout(()=>{
                resolve('success');
            },3000)
        }else{
            reject(new Error('error'));
        }
    })
}

const helloAsync = async () => {
    const hello = await hellowWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try{
        const hello = await hellowWorld();
        console.log(hello);
    }catch(error){
        console.log(error);
    }
}
anotherFunction();