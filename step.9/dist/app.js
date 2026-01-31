var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("In this class we learn about the async/await in typescript and how to use them");
const WeatherResponse = new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            resolve({
                data: "Success",
                timeStamp: Date.now()
            });
        }, 1000);
    }
    catch (error) {
        reject(error);
    }
});
WeatherResponse.then((data) => {
    console.log(data.timeStamp);
    return data.timeStamp;
}).then((response) => {
    console.log(new Date(response).toISOString());
})
    .catch((error) => {
    console.log(error);
});
// using asyn/await functions
function emplooyes() {
    return __awaiter(this, void 0, void 0, function* () {
        let URL = yield fetch('https://jsonplaceholder.typicode.com/posts/');
        let response = yield URL.json();
        console.log(response);
        return response;
    });
}
emplooyes();
export {};
//# sourceMappingURL=app.js.map