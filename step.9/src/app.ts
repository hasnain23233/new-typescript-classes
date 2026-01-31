console.log("In this class we learn about the async/await in typescript and how to use them")

//learn the promises first \
interface APIResponse {
    data: string , 
    timeStamp: number
}

const WeatherResponse  = new Promise<APIResponse>((resolve , reject)=>{
    try {
       setTimeout(()=>{
        resolve({
            data: "Success",
            timeStamp: Date.now()
        })
       } , 1000) 
    } catch (error) {
        reject(error)
    }
})

WeatherResponse.then((data)=>{
    console.log(data.timeStamp)
    return data.timeStamp
}).then((response)=>{
    console.log(new Date(response).toISOString())
})
.catch((error)=>{
    console.log(error)
})



// using asyn/await functions

interface APIResponseKeyes {
    body: string ,
    id: number , 
    title: string,
    useId: number
}
async function emplooyes(): Promise<Array<APIResponseKeyes> | string> {
        try {
            let URL  = await fetch('https://jsonplaceholder.typicode.com/posts/')
            let response = await URL.json()
            console.log(response)
            return response
        } catch (error) {
            return `Sorry we can not fetch the data ${error}`
        }
}
emplooyes()