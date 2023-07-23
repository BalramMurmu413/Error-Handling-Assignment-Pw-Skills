
function numberConverter(para){
    try{
      let num = Number(para)
      if(Number.isNaN(num)){
        throw new Error("Invalid Number")
      };
      return num;
      
    }
    catch(error){
      return error.message
    }
  }
  
  console.log(numberConverter("1234")) 
  console.log(numberConverter("Hellow World"))
  
  