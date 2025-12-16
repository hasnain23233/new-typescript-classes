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


///abjects in typescript
let userDataObj : {
    name: string ,
    email: string , 
    phone: number , 
    login: true
    nustingObject : {city:string , country : string}
}={
    name: 'Viki',
    email: "viki@gmail.com",
    phone: 323942,
    login: true,
    nustingObject : {
        city: 'islamabad',
        country : 'pakistan'
    }
}
console.log(userDataObj)

let addingDyamincObjectElement : {
    [key: string] : string | number | undefined | boolean
} = {
    name: "david",
    phone: 4340349
}
addingDyamincObjectElement.city = 'UK'