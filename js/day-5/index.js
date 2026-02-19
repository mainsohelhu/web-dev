// let firstName = "jhon"
// let greeting = "hello"
// let message = greeting + " "+ firstName;
// console.log(message)
// let isActive = true;
// let isChared = false;
// let isOn = isActive && isChared ? "the phone is on": "the phone is dead";
// // if (isOn){
// //     console .log("The phone is running")
// // }else{
// //     console.log("The phone is swiched off")
// // }
// console.log(isOn)
// let add  = 5 + 5 + 5 ? 15: 50;
// let sub = 5 - 5 - 5 ? -5 : 15;
// let result = add || sub ? "ek to sahi hai" : "sab galat hai";
// console.log(add)
// console.log(sub)
// console.log(result)

// let myHight = 5.8;
// function hightIncrement (myHigh){
//     if (myHight <= 6.8){
//         return myHight + 1;
//     }
//     return myHight;
// }
// myHight = hightIncrement(myHight);
// console.log(myHight);

// data types

// 1 Numbers
let Numbers = 1;
console.log(Numbers)
console.log(typeof(Numbers))

// 2 strings
let name = 'jhon';
let greeting = "hello"
let message = `${greeting} ${name}`
console.log(name);
console.log(greeting);
console.log(message);
console.log(typeof(name));
console.log(typeof(greeting));
console.log(typeof(message));

// 3 Boolean
let isActive = true;
let isMember = false;
console.log(isActive);
console.log(isMember);
console.log(typeof( isActive));
console.log(typeof (isMember));

// 4 undefined
let x;
console.log(x);
console.log(typeof (x));

// 5 null
let obj = null;
console.log(obj);
console.log(typeof(obj));

// 6 BigInt
let num = 121545498757644564684354n;
console.log(num);
console.log(typeof(num));

// 7 Symbol
let id = Symbol("id")
console.log(id);
console.log(typeof(id));


// let age = 18;
// let exam = age <= 20 ? "you can not give exam": "you can give ecxam";
// console.log(exam);
 let some = "not you";
 let other = "yes you are"
 let someOther = `${some} ${other}`;
 console.log(someOther);
 
let y;

function myFunc() {
    let mess = `i cant't do it alone`;
    if(mess === mess){
        mess = "i do it solo";
    }
    return mess;
    
}
x = myFunc();
console.log(y);
