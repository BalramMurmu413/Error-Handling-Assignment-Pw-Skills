// collection that going to check

let rollno = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

// function that finds number is present or not
function numchecker(para){
  return function (num){
    return para.includes(num);
  };
};


// calling the function 
let numcheker = numchecker(rollno)

// printing the result in console
console.log(numcheker(4))