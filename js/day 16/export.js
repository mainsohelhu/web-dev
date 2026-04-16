export const add = (a,b)=>a+b
export const sub = (a,b)=>a-b

export default function greet(name) {
    console.log("welcome " + name );
    
}

function meet(name, callback) {
    setTimeout(() => {
        console.log("hi" + name);
        callback()
        
    }, 1000);
    
}
function myName() {
    console.log("aao sambha");
    
}
meet("sohel",myName)


function g(arr,callback) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback (arr[i]);
        
    }
    return arr
}
let num = [1,2,3,4]
const dubble = g(num,function(n) {
   return n*2
})
console.log(dubble);

const add1 = g(num, function (n) {
    return n+1
})

console.log(add1);
