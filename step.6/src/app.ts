console.log("In this class we learn about the type casting")
let username : unknown = "Ali"
console.log((username as string).length) 

let dataFetching : number = (username as string).length
console.log(dataFetching)