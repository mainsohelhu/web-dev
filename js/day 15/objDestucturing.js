// let user = {
//     name : "jhonathan",
//     age : 24,
//     job : "developer",
    
// }

// let {name,age,job,city} = user
// console.log(name,age);
// let {name:userName, age:userAge, job:userJob, city:userCity}= user
// console.log(userCity);
// let {bloodGroup ="Ab+"} = user
// console.log(bloodGroup);
// console.log(user);

// const usser = {
//     id : 1,
//     profile:{
//     email : "demo@gmail.com"
//     }

// }
// let {profile:{email:gmail}}= usser;
// let {profile:{phone = +91.987562365}} = usser ;
// console.log(gmail);
// console.log(phone);
// console.log(usser);

// let person = {
//     naam : "ramu kaka",
//     kaam: " mali",
//     umar: 69
// }

// let {naam,kaam,umar} = person;
// console.log(naam);
//  ({naam :naaam} = person)
//  console.log(naaam);
 

//  let students ={
//     class1 : {
//         rollNo : {
//             no1 : {
//                 name1 : "sohel khan",
//                 age1 : 24,
//                 add : "changorabhatha",
//                 email: {
//                     gmails:{
//                         mail1 : "sk1@gmail.com",
//                         mail2 : "sk2@gmail.com",
//                         mail3 : "sk2@gmail.com"
//                     } 
//                 }
//             },
//             no2 : {
//                name_ : "ojashvi singh",
//                 age_ : 24,
//                 add_ : "devend nagar",
//                  email_: {
//                     gmails_:{
//                         mail_1 : "os1@gmail.com",
//                         mail_2 : "os2@gmail.com",
//                         mail_3 : "os3@gmail.com"
//                     } 
//                 }

//             },
//             no3: {
//                 Name : "tukeshwar",
//                 Age : 32,
//                 Add : "raipura",
//                  Email: {
//                     Gmails:{
//                         Mail1 : "t1@gmail.com",
//                         Mail2 : "t2@gmail.com",
//                         Mail3 : "t3@gmail.com"
//                     } 
//                 }
//             }
//         }

//     }
// };
// let {class1:{
//     rollNo:{
//         no1:{
//             name1,age1,add,email:{
//                 gmails:{
//                     mail1,mail2,mail3
//                 }
//             }
//         },no2:{
//             name_,age_,add_, email_:{
//                 gmails_:{
//                     mail_1,mail_2,mail_3
//                 }
//             }
//         },no3:{
//             Name,Age,Add, Email:{
//                 Gmails:{
//                     Mail1,Mail2,Mail3
//                 }
//             }
//         }
//     }
// }} = students
//  console.log(name1);
 let person ={
    name : "ojash",
    age : 24,
    add :{
        state : "chandigarh"
    }
 }

 function displayPerson({name,age,add:{state}}) {
    console.log(`name:${name},age:${age},state:${state}`);
    
    
 }
 displayPerson(person)
 
 let student = {
   class1: {
      no1:{
         name1 : "sohel"
      },
      no2 :{
         name2 : "ojas"
      }
   }
 }
 let {class1:{
   no1:{name1},
   no2: {name2}
 }
 } = student

 console.log(name2);
 