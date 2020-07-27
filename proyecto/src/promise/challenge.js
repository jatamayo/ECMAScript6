let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character/';

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4){
                if(xhttp.status === 200){
                    resolve(JSON.parse(xhttp.responseText));
                }else{
                    const error = new Error('upps', url_api);
                    reject(error);
                }
            }
        });
        xhttp.send();
    })
}

fetchData(API)
    .then((response)=> {
        console.log(response.info.count);
        return fetchData(`${API}${response.results[0].id}`);
    })
    .then((response)=>{
        console.log(response.name);
        return fetchData(response.origin.url);
    })
    .then((response)=> {
        console.log(response.dimension);
    })
    .catch((error)=> {
        console.error(error);
    })