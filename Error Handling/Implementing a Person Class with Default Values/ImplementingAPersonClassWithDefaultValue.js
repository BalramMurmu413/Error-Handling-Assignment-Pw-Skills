class Person{

    constructor(name = "Unknown", age = 0) {
    this.name = name;
    this.age = age;
  }

  getDetail(){
 return `${this.name} ${this.age}`
     
  }

}

const person1 = new Person("Balram", 23)
console.log(person1.getDetail())
const person2 = new Person()
console.log(person2.getDetail())


  
  