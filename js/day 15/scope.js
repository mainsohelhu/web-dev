// globle scope
let globelvar = "iam a global scope";

function greet(){
   console.log(globelvar);
};
greet()


// function scope
function demo() {
    let age = 24;
    console.log(age);
    
}
demo()

// block scope

if (true){
    let city = "mumbai";
    const country = "india";
    var planet = "earth";
    console.log(city,country,planet);
}
console.log(planet);

// lexical scope

function outer() {
    let x = 0;
    
    function inner() {
        console.log(x);
        let y = 1;
        
        function inner2() {
            console.log(y);
            
        }
        inner2()
    }

    inner()
}
outer()

function grandparent() {
    let a =  10;
    function parent() {
        let b = 20;
        function child() {
            let c = 30;
            console.log(a,b,c)
            console.log(globelvar);
            
        }
        child()
    }
    parent()
}
grandparent()

function loop() {
    let a  = true;
    if(a === true){
    for (let i = 0; i <= 100; i++) {
        const element = i;
        if(i === 100){
            a = false;
            if(a === false){
                a = true;
                if (a == 1){
                    console.log(globelvar);
                    
                }
            }
            
        }
        
    }
}
}
loop()