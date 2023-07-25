class car{ 

    constructor(company, car,year){
    this.company = company;
    this.car = car;
    this.year = year;
        
      }
    
      getDescription(){
        return `This is a ${this.year} ${this.company} ${this.car}    ` 
      }
      
    }
    let myCar= new car("Skoda", "Rapid", 2022)
    
    console.log(myCar.getDescription())
    
    