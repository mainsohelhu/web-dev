let person = {
    name : "sohel",
    age : 24,
    add : "raipur"
}

const jsonString = JSON.stringify(person)
console.log(jsonString);

const jsonString2 = '{"name": "sona", "age": 22, "add": "raipur"}'

const person2 = JSON.parse(jsonString2)

console.log(person2);

function  greet(name, callback){
    console.log(`hello, ${name}!`);
    callback()
}
function saygoodbye() {
    console.log('good bye');
    
}
greet("sohel", saygoodbye)


// in this example say good bye is parse as callback funtion to the greet funtion after greet log the greeting log say good bye 


function sayHi(name,intro){
    console.log(`hi ${name}!`);
    intro()
    
}
function introducing(name,live){
    console.log(`my name is ${name}`);
    live()
    
}

function place(place) {
    console.log(`i live in ${place}`);
    
}

sayHi("sohel",()=>introducing("sohel",()=>place("raipur")))

function test(fn) {
   console.log(fn());
}
test(()=>"hello")


function sayhi(name,place){
    console.log(`hi ${name}`);
    place()    
}

function live(city) {
    console.log(`i live in ${city}`);
    
    
}
sayHi("sohel",()=> live("raipur"))