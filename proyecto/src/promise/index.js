const somethigWillHappen = () => {
    return new Promise((resolve, reject)=>{
        if(false){
            resolve('success');
        }else{
            reject('error');
        }
    })
};

somethigWillHappen()
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.error(error);
    })

/********************************************* */
const promesaTesting = () => {
    return new Promise((resolve, reject)=>{
        if(false){
            resolve("uffas creamo una promesa con exito");
        }else{
            const error = new Error('upps error');
            reject(error);
        }
    })
}
promesaTesting()
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.error(error);
    })


/********************************************* */

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject)=> {
        if(false){
            setTimeout(()=>{
                resolve('True');
            }, 3000);
        }else{
            const error = new Error('upps error');
            reject(error);
        }
    })
}

somethingWillHappen2()
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    })

Promise.all([somethigWillHappen(), somethingWillHappen2()])
    .then((response)=>{
        console.log(reponse);
    })
    .catch((error)=>{
        console.error(error);
    })


/************************************************ */