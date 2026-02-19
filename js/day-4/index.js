function cal(a,op,b) {
    switch (op){
        case "-": return a-b;
        case "*": return a*b;
        case "/": return a/b;
        case "+": return a+b;
    }
    
}
let a = 5;
let op = "*";
let b = 5;
console.log(cal(a,op,b))