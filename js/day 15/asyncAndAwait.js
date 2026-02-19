// const { log } = require("async");

// async function hi() {
    
// }
// async function greet() {
//     return "hello world"
// }
// greet().then((message)=>console.log(message));

function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(c=>{
        reject("data is not fetched")
        },2000)
    })
}
// async function getData() {
//     const result = await fetchdata()
//     console.log(result);
    
// }

// getData();

async function getData() {
    try {
        const result = await fetchData();
        console.log(result)
    }catch(error){
        console.log("Error:", error);
        
    }
}
getData()

try{
    console.log(x);
    
}catch(err){
    console.log("Error",err);
    
}


async function isLoaded() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(540)
        }, 3000);
    })
}
async function done() {
    console.log("hey i am sohel");
    console.log("hey i am a nice guy");
    let fn = await isLoaded()
    console.log(fn);
    
    console.log("whats up guys");
    
    
}

done()

