
// const myPromise = new Promise( (resolve, reject) => {
//     const success = true;
//     if(success){
//         resolve ("opration was succesful")
//     }else{
//         reject("opration was failed")
//     }
// });

// // myPromise.then((message)=>{
// //     console.log(message);

// // })


// // myPromise.catch((error)=>{
// //     console.log(error);

// // })

// myPromise.finally(()=>{
//     console.log("promise has be sattled");

// })


// const dataPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("data fetched")
//     }, 2000)
// })

// dataPromise.then((data) => {
//     console.log(data);
// })

// const fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("data fetched")
//     }, 1000);
// });

// fetchData
//     .then((data) => {
//         console.log(data);
//         return "processing data";

//     })

//     .then((processingMessage) => {
//         console.log(processingMessage);
//         return "data processed";

//     })

//     .then((finalMessge)=>{
//         console.log(finalMessge);
        
//     })

//     .catch((error)=>{
//         console.error(error);
        
//     })

//     .finally(()=>{
//         console.log("all opration completed");
        
//     })


// const checkStatut = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve ("online")
//     },1000)
// })

// checkStatut
// .then((online)=>{
//     console.log(online);
//     return "online"
    
// })
// .then((typing)=>{
//     console.log(typing);
//     return "typing"
    
// })
// .then((sendMessage)=>{
//     console.log(sendMessage);
//     return "message sent"
    
// })
// .catch((error)=>{
//     console.log(error);
//     return "messege not sent"    
// })
// .finally(()=>{
//     console.log("message seen");
    
// })

const checkOnline = new Promise((resolve, reject)=>{
    let isOnline = true;
    if (isOnline) {
        setTimeout(()=>{
            resolve("online")
        },3000)
    }else{
        reject ("ofline")
    };
});

checkOnline
.then((typing =>{
    console.log(typing);
    return "typing"
    
}))
.then((messageSent=>{
    console.log(messageSent);
    return "message sent succesfully"
    
}))
.then((result=>{
    console.log(result);
    
}))
.catch((err=>{
    console.log(err);
    return "sending failed"
    
}))
.finally(()=>{
   console.log("seen")
    
})

const simple = new Promise((resolve,reject)=>{
    let isOnline = true;
    if (isOnline){
        resolve ("online")
    }
})

simple
.then((message=>{
    console.log(message);
    return "redey to recive"
    
}))
.then((result=>{
    console.log(result);
    
}))