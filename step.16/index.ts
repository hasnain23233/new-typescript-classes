console.log("This is a typescript file")
function data32<T> (s: T): T  {
    return s
}
let stringData = data32("Ali")
let num = data32(329)
let booleanData = data32(true)
let numData = data32(456987)