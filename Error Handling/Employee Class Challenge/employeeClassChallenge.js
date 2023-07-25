class Employee {

    constructor(name, position, salary) {
      this.name = name
      this.position = position
      this.salary = salary
    }
    getSalary() {
      return ` ${this.salary} `
    }
  
  }
  
  const employeeCard = new Employee("Balram", "Softwere Developer", 80000)
  console.log(employeeCard.getSalary())