
function Student(name){
    this.name = name}
  
  Student.prototype.printdetail = function(){
    console.log(`Hello, my name is ${this.name}`)
    }
  
  const student = new Student("Balram")
  student.printdetail()