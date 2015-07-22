var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var autoinject_1 = require('../src/autoinject');
var User = (function () {
    function User() {
        this.test = 'It works fine';
    }
    return User;
})();
var Db = (function () {
    function Db(user) {
        this.user = user;
    }
    Db = __decorate([
        autoinject_1.autoInject, 
        __metadata('design:paramtypes', [User])
    ], Db);
    return Db;
})();
var MyClass = (function () {
    function MyClass(db) {
        this.db = db;
    }
    MyClass = __decorate([
        autoinject_1.autoInstantiate, 
        __metadata('design:paramtypes', [Db])
    ], MyClass);
    return MyClass;
})();
var k = new MyClass;
console.log(Db.inject);
console.log(k.db.user.test);
