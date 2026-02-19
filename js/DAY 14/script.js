// for eatch syntax
// array.forEach(function(element,index,array) {
// });
let stationarys  = ['pencil', 'pen', 'noteBook']
stationarys.unshift("whitener")
stationarys.forEach(function(stationary) {
    console.log(stationary);
    
});

// object 
let userData = {
    name : "tukeshwar",
    age : 29,
    country : "india"
}
userData.country = ("america")
userData.job = "developer"
delete userData.job
console.log(userData.name);
console.log(userData["age"]);
console.log(userData);
for (let key in userData) {
    
    console.log(`${key} : ${userData[key]}`);
    
}
// funtions 
function myfunc() {
    console.log("hello");
    
}
myfunc()
// function while taking argument in parameters
function greeting(name) {
    console.log("hello " + name);
        
}
greeting("bablu")

function add(a , b) {
    console.log(a + b);
    
}
add(5,5)
// function with return
function add(x,y) {
    return x + y
}
let result = add(5,6)
console.log(result);

 // funtiion expretion
const variablename = function() {
    
}
// anoymus 
const greet = function () {
    console.log("hello js" );
    
}
greet()

let greetings = function (name) {
    return "hello " + name
    
}
//console.log(greetings("sohel"));
let results = greetings("sohel")
console.log(results);

// arrow function

let sub = (x,y) =>{
    return x - y
}
console.log(sub(5,5));

let mul = (h,i) => h * i ;
console.log(mul(2,5));

const squre = z => z*z;
console.log(squre(5));

const sayHi = () => console.log("hello midas");
sayHi()

// console.log(g);
// let g = 10;

let j = [1,2,3].map(parseInt)


