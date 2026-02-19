// class Person {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
    
//     greet(){
//         console.log(`hi my name is ${this.name}`);
        
//     }
// }


// const p1 = new Person ("sohel", 24)
// p1.greet()

// class Student extends Person {
//     constructor(name, age , grade){
//         super(name,age)
//             this.grade = grade
//     }
//     study(){
//         console.log(`${this.name} is studying`);
        
//     }
// }
// const s1 = new Student("anjali",18,"A")
// s1.study()

class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    
    greet(){
        console.log(`hi my name is ${this.name} and i am ${this.age} years old`);
        
    }
}


const p1 = new Person ("sohel", 24)
p1.greet()

class Student extends Person {
    constructor(name, age , grade){
        super(name,age)
            this.grade = grade
    }
    greet(){
        super.greet()
        console.log(`i am in grade ${this.grade}`);
        
    }
}

const s1 = new Student ("sohel",24 , "A")
s1.greet()



class demon {
    constructor(name,age){
        this.name
        this.age
    }
    style (){
        console.log(``);
        
    }
}

class Person2{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    greet(){ 
        console.log(`hii my name is ${this.name}`);
        
    }
}

const p2 = new Person2 ("ramesh", 24)
p2.greet()

class man extends Person2{
    constructor(name,age,city){
        super(name,age)
        this.city = city
    }
    greet(){
        super.greet()
        console.log(`and i live in ${this.city}`)
    }
}
const p3 = new man ("sohel",24,"raipur")
p3.greet()

class math {
    static add(a,b){
        return a + b
    }
}
console.log(math.add(7,6));

class animal {
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} makes noise`);
        
    }
}

class dog extends animal{
    constructor(name, breed){
        super(name)
        this.breed  = breed
    }
    speak(){
        super.speak()
        console.log(`${this.breed} barkes`);
        
    }
}

const dog1 = new dog("shiro","white dog")
dog1.speak()
