// // map filter and find 
// const arr = [1, 2, 3, 4, 5];
// // map

// const b = arr.map((e)=>{return e * e})
// console.log(b);

// // filter
// const c = arr.filter((e)=>{return e % 2 === 0})
// console.log(c);

// // find
// const d = arr.find((e)=>{return e > 3})
// console.log(d); 

// // reduce
// const e = arr.reduce((acc, curr)=>{return acc + curr}, 1)
// console.log(e);

let array = [2,5,8,10]

// let map = array.map(e=>{
//     return e / e
// })
// console.log(map);

const studets = [
    {name: 'John', age: 20,marks: 20},
    {name: 'Jane', age: 22,marks: 40},
    {name: 'Jack', age: 18,marks: 30},
    {name: 'Jill', age: 19,marks: 10}
]
// const isAbove = studets.map(e => {
//     if(e.marks >= 20){
//       e.isPass = true
//     }else{
//        e.isPass = false
//     }
//     return studets
// })
// console.log(studets);

for(let i = 0; i < studets.length; i++){
    if(studets[i].marks >= 20){
        studets[i].isPass = true
    }else{
        studets[i].isPass = false
    }
}
console.log(studets);


// let pass = studets.filter(e=>{return e.marks && e.age >= 20})
// let fail = studets.filter(e=>{return e.marks < 20})
// console.log(pass);
// console.log(fail);

// let employee = [
//     {name: 'John', age: 30, salary: 50000},
//     {name: 'Jane', age: 25, salary: 60000},
//     {name: 'Jack', age: 35, salary: 70000},
//     {name: 'Jill', age: 28, salary: 55000}
// ]
// let rich = []
// for(let i = 0; i < employee.length; i++){
//     if(employee[i].salary > 55000){
//         rich.push(employee[i]);
//     }
// }
// console.log(rich);

let num = [11,10,20,30,40]
let find = num.find(e => { return e < 20} )
let filter = num.filter(e =>{return e >= 20 })
console.log(find);
console.log(filter);


let users = [
    {name:"A", age:17},
    {name:"B", age:21},
    {name:"c", age:19}
];

// let adult = users.find(user=>{
//     return user.age >= 18;
// })
// console.log("hii" , adult);

for(i = 0; i >= users.length; i++){
    if(users[i].age > 18){
        return users[i]
        
    } 

}

console.log(users);


let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(matrix[1][1]);
console.log(matrix[2][2]);


let a = [
    [1,2],
    [3,4]
]

let b = [
    [5,6],
    [7,8]
]

let result = [
    [0,0],
    [0,0]
]   

for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
        result[i][j] = a[i][j] + b[i][j];
    }
}
console.log(result[0][1]);

let res = [a[0][0]+b[0][0]]
console.log(res);



let c = [
    [
        [1]
    ],
    [
        [5]
    ]
]
let d = [
    [
        [3]
    ],
    [
        [4]
    ]
]
let e = [
    [
        [3]
    ],
    [
        [4]
    ]
]

let re = [
    [
        [0]
    ],
    [
        [0]
    ]
]
// for (let i = 0; i < c.length; i++) {
//     for (let j = 0; j < c[i].length; j++) {
//         for (let k = 0; k < c[i][j].length; k++) {
//             re[i][j][k] = c[i][j][k] + d[i][j][k] + e[i][j][k]
            
//         }
        
//     }
    
// }

let results = c.map((layer1,i)=>{
   return layer1.map((layer2,j)=>{
       return layer2.map((finla,k)=>{
            return finla + d[i][j][k] + e[i][j][k]
        })
    })
})
console.log(results);


let arm = [
    [4,2],[2,5]
]
let sum = 0;
for (let i = 0; i < arm.length; i++) {
    for (let j = 0; j < arm[i].length; j++) {
        sum += arm[i][j]
    }
    
}
console.log(sum);
let mul = arm.map(e=>{return e[i] * e[i]})
console.log(mul);

let fil = arm.filter(e=>{return e[i] >= 2})
console.log(fil);
let suum = arm.flat().reduce((a,b)=> a + b, 0 )
console.log(suum);
let fm = arm.flatMap(x =>
    x.map(y => y * 2)
)
console.log(fm);


