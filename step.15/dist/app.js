console.log("In this class we learn about the interface hybrid type in typescript");
function getCounter() {
    let counter = (function (num) {
        return `started at ${num}`;
    });
    counter.intervel = 0;
    counter.reset = function () {
        console.log("Reset the counter");
    };
    return counter;
}
let c = getCounter();
console.log(c(19));
c.reset();
c.intervel = 29;
export {};
//# sourceMappingURL=app.js.map