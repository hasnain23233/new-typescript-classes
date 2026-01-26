console.log("this is a typescript ")

type author = {
    name : string, phone: number 
}

type moreDetails = {
    data: author , 
    country: string,
    city: string
}

let userData : moreDetails = {
    data: {
        name: "Aslam",
        phone: 845348
    },
    country: "pakistan",
    city: "Giglit"
}
console.log(userData)