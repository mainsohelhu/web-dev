function myCounter() {
    let counter = 0;
    return function () {
        counter++
        // return counter
        console.log(counter);
        
    }
}
const add = myCounter();
add()
add()
add()
add()

// 2d array

let map = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
]
map[1][1] = 100;
console.log(map);




let rows = 3;
let colls = 4;
let method = Array.from({length:rows},()=>new Array(colls).fill(0))
console.log(method);

// modify 2 elements in indexing
let mod = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
]
mod[1][1] = 100;
mod[2][2] = 200;
console.log(mod);

// increse number using for loop

let d3 = [
   [
    [1,2,3],
    [4,5,6]
   ],
   [
    [7,8,9],
    [10,11,12]
   ]
]

for (let i = 0; i < d3.length; i++) {
    for (let j = 0; j < d3[i].length; j++) {
        for (let k = 0; k < d3[j].length; k++) {d
            d3[i][j][k] = d3[i][j][k] + 1
            
        }
        
    }
    
}
console.log(d3);


// modify 3d arry using for loop