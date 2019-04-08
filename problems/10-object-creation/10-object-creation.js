/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//object funcion constructor
function resident(name, age){
    this.name = name;
    this.age = name;
}

//object literal 
let student ={
    name: 'default name',
    age: 0
}

//object class declaration
class LivingThing{
    constructor(name, age){
        this.name =name;
        this.age =name;
    }

    getName(){return this.name;}
    getAge(){return this.age;}
}

//accessing fields obj function Constructor
let resident1 = new resident('Joel Lee', 20);
console.log(`resident name: ${resident1.name} 
age: ${resident1.age}` );

//accessing fields obj literal
console.log(`Student name: ${student.name} 
age: ${student.age}` );

let dog = new LivingThing ('Terry', 3);
console.log(`dog name: ${dog.name} 
age: ${dog.age}` );


