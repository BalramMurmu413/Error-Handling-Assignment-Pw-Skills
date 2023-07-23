function personDetail(person) {
    try {
      if (typeof person !== "object" || !person.name || !person.age || !person.country) {
        throw new Error("invalid parameter typed");
      }
      return `Name: ${person.name}, Age: ${person.age}, Country: ${person.country}`
    }
    catch (error) {
      return error.message }}
  
  console.log(personDetail({name:"Iron Man", age:38, country:"America"})) // correct result
  
  console.log(personDetail({names:"Pw Skills", ages:"1", country:"India"}))  // invalid parameter typed