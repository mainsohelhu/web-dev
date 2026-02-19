// switch statement
let day = 7;
switch(day){
   case 1: 
   console.log("monday")
   break;
   case 2: 
   console.log("tuseday")
   break;
   case 3: console.log("wednesday")
   break;
   case 4: console.log("thursday")
   break;
   case 5: console.log("friday")
   break;
   case 6: console.log("saturday")
   break;
   case 7: console.log("sunday")
   break;
   default :console.log("not vailid day");
   
}
let num = 2;
 switch (num) {
    case 1 : console.log(1);
    case 2: console.log(2);
    case 3: console.log(3);
 }
 // and
 let age = 25;
 let hasId = true;
 if(age >= 18 && hasId){
    console.log("allowed to enter");
 }else{
    console.log("not allow to enter");
    
 }
 let result= (age > 18 && hasId)? "allow to enter": "not allow to enter";
 console.log(result);

 // or 
 let isWeekEnd = true;
 let isHoliday = false;
 if (isWeekEnd || isHoliday) {
    console.log("No need to go to work");
 }else{
    console.log("Need to go to work");
    
 }

 //not
 let isRaining = false;
 let isSunny = true;
 if (!isRaining) {
    console.log("wo for walk");
 }else{
    console.log("stay indor");
 }

 console.log(!isRaining && isSunny ? "go for a wlak": "stay inside");// go for a walk 
 console.log(isRaining && isSunny ? "go for a wlak": "stay inside");//stay inside
 console.log(isRaining || isSunny ? "go for a wlak": "stay inside");// go for a walk
 console.log(isRaining || !isSunny ? "go for a wlak": "stay inside");// stay inside