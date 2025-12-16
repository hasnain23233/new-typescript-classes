function getInfo(){
    const firstInput = document.getElementById('name') as HTMLInputElement
    const secondInput = document.getElementById('message') as HTMLInputElement

    const name : string = firstInput.value
    const message: string = secondInput.value
    console.log(name , '  ' , message)
}