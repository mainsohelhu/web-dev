let place = "Raipur";
const name = "sohel";
var age = 20;
console.log(place.indexOf("i"));
let friends = ["sekhar", "dovish","ankit"]
for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    console.log(element);
    
}
const classes = ["math","physics","geography"]
const arrayLength = classes.length;
console.log(arrayLength);
let empty = []
console.log(empty.length);

let counter = [1,2,3,4,5,6]
counter.pop()
console.log(counter.length);

const weather = ["sunny", "rainy", "cloudy",]
for (let i = 0; i < weather.length; i++) {
    const element = weather[i];
    console.log(element);
    
}
function greetSohel() {
    const name = "sohel";
    console.log("hello " + name);
    
}
greetSohel()
function greetLaslie() {
    const name = "laslie"
    console.log("hello " + name);
    
}
greetLaslie()

function greet(name) {
    console.log("hello " + name);
    
}
greet("jhon")
greet("ron")

function lampStatus() {
    const power = true;
    console.log("powerd on " + power);
    
}
lampStatus()

function userStatus() {
    const active = "active"
    const inactive = "inactive"
    console.log("bob " + inactive);
    
}
userStatus()
function userStat(status) {
    console.log("sohel " + status);
    
}
userStat("active")
function displayHalf(number) {
    const half = number / 2;
    console.log("the Half of "+ number ,"is " +half);
    

}
displayHalf(5)

function dubleNum(number) {
    const dublle = number * 2;
    console.log("the dubble of " + number , "is " + dublle);
    
}
dubleNum(2)