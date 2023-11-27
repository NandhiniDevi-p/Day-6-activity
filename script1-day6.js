-----------------------------------DAY-6--------------------------------------

class Person{
    constructor(name,age,qulification,email,phoneNO){
        this.name = name;
        this.age = age;
        this.qulification = qulification;
        this.email = email;
        this.phoneNO = phoneNO;
        
    }

getname() {
    return `
name : ${this.name}
age : ${this.age} 
qualification : ${this.qulification} 
email : ${this.email}
phone : ${this.phoneNO}`;
}
}
var c1 =new Person("Nandhini",22,"MCA","nandhinidevi.p1102@gmail.com",1234567898);
console.log(c1.getname());
 