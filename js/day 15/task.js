// class Student {
//     constructor (name){
//         this.name = name
//     }
//     greet (){
//         console.log(`hi i am ${this.name}`);

//     }
// }
// class study extends Student{
//     constructor(name, study){
//         super(name)
//         this.study = study
//     }
//     greet(){
//         super.greet()
//         console.log(`i stundy in ${this.study} class`);

//     }
// }
// class live extends study{
//     constructor(name,study,city){
//         super(name,study)
//         this.city = city
//     }
//     greet(){
//         super.greet()
//         console.log(`i live in ${this.city}`);

//     }

// }
// const s1 = new live ("rahul","10th","raipur")
// const s2 = new live ("sam","12th","raipur")
// const s3 = new live ("nathan","9th","raipur")
// const s4 = new live ("jhon","7th","raipur")
// s1.greet()
// s2.greet()
// s3.greet()
// s4.greet()


// class math{
//     static mathamatic(a,b,c){
//       switch (b) {
//         case "+" : return a + c
//         case "-" : return a - c
//         case "/" : return a / c
//         case "*" : return a * c
//         default:  return "use oprator"
//             break;
//       }
//     }
// }
// console.log(math.mathamatic(5,"+",2))
// console.log(math.mathamatic(5,"-",2))
// console.log(math.mathamatic(5,"/",2))
// console.log(math.mathamatic(5,"*",2))
// console.log(math.mathamatic(5,"",2))

//question 1

// function isCompleted() {
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve ("task completed")
//     }, 2000);
// })
// }
// isCompleted().then((result) => {
//     console.log(result);

// }).catch((err) => {
//     console.log("Error", err);

// });

// // questoin 2

// function dely(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`i am ${ms} milliseconds delyed`)
//         }, ms);
//     })
// }
// dely(3000).then((result) => {
//     console.log(result);

// }).catch((err) => {
//     console.log("Error", err);

// });

// // question 3

// function details(id, name) {
//     this.id = id
//     this.name = name
// }
// function usser() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve (p1)
//         }, 4000);
//     })
// }
// usser().then((result) => {
//     console.log(p1);

// }).catch((err) => {
//     console.log("Error", err);

// });
// let p1 = new details(1,"Sohel")


// question 4

// function getData() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve ("data recieved")
//         }, 1000);
//     })
// }

// getData().then((result) => {
//     console.log(result);

// }).catch((err) => {
//     console.log("Error", err);

// });

// // question 5 

// async function isFinishd() {
//     return new Promise ((resolve, reject)=>{
//         setTimeout(() => {
//             resolve ("Finished")
//         }, 2000);
//     })
// }

// async function done() {
//     try {
//         let result = await isFinishd()
//         console.log(result);

//     } catch (error) {
//         console.log("not finished", error);

//     }
// }

// done()

// // question 6 

// async function one() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve ("step 1")
//         }, 1000);
//     })
// }
// async function two() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve ("step 2")
//         }, 1000);
//     })
// }
// async function three() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve ("step 3")
//         }, 1000);
//     })
// }

// async function steps() {
//     try {
//         let stepOne = await one();
//         let stepTwo = await two()
//         let stepThree = await three()
//         console.log(stepOne);
//         console.log(stepTwo);
//         console.log(stepThree);
//     } catch (error) {
//         console.log("nothing is loging");

//     }
// }
// steps()


// // question 7 

// async function person1() {
//     return new Promise((resolve,reject)=>{
//         resolve ("done")
//     })
// }
// async function person2() {
//     return new Promise((resolve,reject)=>{
//         resolve ("done")
//     })
// }
// async function person3() {
//     return new Promise((resolve,reject)=>{
//         resolve ("done")
//     })
// }

// async function paralel() {
//     try {
//         let p1 = person1()
//         let p2 = person2()
//         let p3 = person3()
//       let result =  await Promise.all([p1,p2,p3])
//       console.log(result);


//     } catch (error) {
//         console.log("not catch",error);

//     }
// }

// paralel()

// question 8 

// async function name(params) {

// }

async function orderPizza() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Ordering pizza")
        }, 2000);
    })
}
async function orderComplete() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Order completed")
        }, 2000);
    })
}
async function orderDelevering() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("delevering in 10 min")
        }, 2000);
    })
}
async function orderDelevered() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("order deleverd")
        }, 2000);
    })
}

async function done() {
    try {
        let order = await orderPizza()
        let complete = await orderComplete()
        let delevering = await orderDelevering()
        let deleverd = await orderDelevered()
        console.log(order);
        console.log(complete);
        console.log(delevering);
        console.log(deleverd);
    } catch (err) {
        console.log("order denied", err);

    }

}

done()

async function tryThreeTime(fn, retry = 3) {
    for (let i = 0; i < retry; i++) {
        try {
            console.log("Trying:", i + 1);
            return await fn();
        } catch (error) {
            if (i === retry - 1) {
                console.log("don try anymore", error);
                
            }
        }
    }
}

tryThreeTime()