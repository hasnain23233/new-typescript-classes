console.log("In this class we learn class decorators")

function AddVersion(constructor: Function) {
    console.log(constructor.name)
    constructor.prototype.version = "3.4.4"
    constructor.prototype.model = 'Hp'
}

interface App {
    version: string
    model: string
}

@AddVersion
class App {
    name = "laptop"
}

let user = new App()
console.log(user.version)
console.log(user.model)