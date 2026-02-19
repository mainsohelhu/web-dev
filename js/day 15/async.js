function delayedGreeting(name,callback) {
    setTimeout(()=>{
        console.log(`hello ${name}`);
        callback()
        
    },2000)
}
function notify() {
    console.log(`greeting compleated`);
    
}
delayedGreeting("sohel",notify)


// in this example, the greeting is daley by 2s using set time out and after the greeting now notify function is called

function procesArray(arr,callback) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i])
        
    }
    return arr
}

const num = [1,2,3,4,5,6]
const double = procesArray(num,function(num){
    return num *2
});
console.log(double);


// in this example an anoymus funtction is pass as a callback proces array to dubble each number in array

doSomeThing(function(result1){
    doSomeThingElse(result1, function(result2){
        doAnotherThing(result2,function(result3){
            doFinalThing(result3, function(result4){
                console.log("done");
                
            })
        })
    })
})

// ES6 , js introduce promise (), this is a replacement of callback because as you saw at the last example "callback hell", now we can handle the call back even better and essyer