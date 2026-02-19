let num = "121";
let num2 = "";

for (let i = num.length - 1; i >= 0; i--) {
    const element = num[i];
    num2 += element
    
}

if (num === num2){
    console.log("it is a peniledrom");
    
}else{console.log("not a peniledrom you stupid basterd");

}

let a = 124;
let b = a.toString().split("").reverse().join("");
if (a == b) {
    console.log("pelindrom");
    
}else{
    console.log("mordnilep");
    
}

let p = [1,2,3].reverse();
console.log(p);


let num5 = "";

function pelindrom(number) {
   let srt =  number.toString()
    for (let i = srt.length - 1; i >= 0; i--) {
        const element = srt[i];
        num5 += element;
    }
    if (num5 === srt) {
        console.log("han ye hui na baat");
        
    }else{
        console.log("yeh kya baat hai yaar");
        
    }
}

pelindrom(124)


