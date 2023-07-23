// collection that to be filtered 

let products = 
  [
  {name:"tshirt", category:"clothing"},
  {name:"jeans", category:"clothing"},
  {name:"airbuds", category:"assesories"},
  {name:"mouse", category:"assesories"},
  {name:"laptop", category:"electronics"},
  {name:"caomputer", category:"electronics"},
]

// funciton for filtering 

function filterByCategory(p){
  return function (category){
    return p.filter(function(p){
      return p.category=== category
    });

};
}

// assign product to new variable for filteration

let clothingProduct = filterByCategory(products)("clothing")
let assesoriesProduct = filterByCategory(products)("assesories")
let electronicsProduct = filterByCategory(products)("electronics")

// printing to console
console.log(clothingProduct)
console.log(electronicsProduct)
console.log(assesoriesProduct)
