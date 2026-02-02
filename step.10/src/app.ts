let myTurbel : [string , number , boolean]

myTurbel = ["Ehtisham" , 83 , true]
console.log(myTurbel)

type DataFetching = [string , string , number , boolean]

let store: DataFetching = ["Apple" , "Banana" , 923 , false]
console.log(store)
store.push("3459345")
console.log(store)

type accountDetails = [string , string , boolean , string?]

const staf : accountDetails[] = [
    ["Mashruf" , "The was a medical bilar" , true] ,
    ["Aslam" , "The was a developer" , true],
    ["Khan" , "The was a engineer" , true]
]
console.log(staf)
