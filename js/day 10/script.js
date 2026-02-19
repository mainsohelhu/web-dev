// if else statement
let age = 10;
if (age > 25){
    console.log("you can drive")
}else{
    console.log("you can not drive");
}
// else if statement
 let score = 75;
 if(score >= 90){
    console.log("grade A");
 }else if(score >= 80){
    console.log("grade B");
 }else if (score >= 70){
    console.log("grade C");
 }else if (score >= 60){
    console.log("grade D");
 }else{
    console.log("fail");  
 }

 //conditional oprator
let a = 20;
let result = (a >= 10)? "adult": "minor";
console.log(result);

let num = 7;
let check = (num % 2 ===  0)? "even": "odd";
console.log(check);

let isLogedIn = true;
console.log(isLogedIn ? "wellcome usser": "please log in");
