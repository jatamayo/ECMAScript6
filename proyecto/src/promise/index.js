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