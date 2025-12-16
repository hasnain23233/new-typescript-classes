//Array in Typescript and how to use them 

let arr: Array<number> = [2 , 4 , 45]
console.log(arr)
arr.push(3)
let arrStr: Array<string> = ['Yellow' , 'red' , 'white']
console.log(arrStr)

let arrNumber: number[] = [12 , 32 , 53]
console.log(arrNumber)

let arrString: string[] = ['Tofail' , 'Inayat' , 'Ehtisham']
console.log(arrString)

//Turple in typescript

let userData : [number , string , boolean] = [1 , "Hasnain" , true]
userData.push(800)
console.log(userData)

let userData2: readonly[number , string] = [32 , 'JavaScript Developer']
console.log(userData2)