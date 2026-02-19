// // console.log(this);

// const userData ={
//     name: "riya",
//     age : 24,
//     isAlive : true,
//     address :{
//         country : "india",
//         state : "mp",
//         previousAddress:{
//             country : "india",
//             state : "bombay"
//         }
//     },
// greet : function(){
//     console.log(`hello ${this.name} from ${this.address.state} who used to live in ${this.address.previousAddress.state}` );
//     console.log(`i am from ${this.address.previousAddress.state}`);
    
// }

// };
// userData.greet()


// function person (name,age,city){
//     this.name = name;
//     this.age = age;
//     this.city = city;
// }
// const person1 = new person("sohel",21,"raipur");
// console.log(person1.name,person1.age,person1.city);


const person = {
    name : "suman",
    greet :function(){
        setTimeout(() => {
            console.log(this.name);
            
        }, 1000);
    }

} 
person.greet()