var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("In this class we learn class decorators");
function AddVersion(constructor) {
    constructor.prototype.version = "3.4.4";
    constructor.prototype.model = 'Hp';
}
let App = class App {
    name = "laptop";
};
App = __decorate([
    AddVersion
], App);
let user = new App();
console.log(user.version);
console.log(user.model);
export {};
//# sourceMappingURL=app.js.map