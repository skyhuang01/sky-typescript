var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function sayHello(person) {
    return 'Hello, ' + person;
}
function outBoolean(isTure) {
    if (isTure) {
        return 'it is ture';
    }
    else {
        return 'it is false';
    }
}
function outBooleanObject(obj) {
    return 'obj is: ' + obj;
}
function stringOrNumber(something) {
    return 'stringOrNumber is: ' + something;
}
//类
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.eat = function () {
        return this.name + " should eat rice.";
    };
    return Person;
}());
//可继承的类
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        return this.name + " should run.";
    };
    return Animal;
}());
//继承
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.running = function () {
        return "hi," + this.run();
    };
    return Cat;
}(Animal));
var Cup = /** @class */ (function () {
    function Cup() {
    }
    Cup.prototype.canDrink = function () {
        console.log('cup1 is used to drink water.');
        return 'cup2 is used to drink water.';
    };
    return Cup;
}());
var Bottle = /** @class */ (function () {
    function Bottle() {
    }
    Bottle.prototype.canDrink = function () {
        console.log('bottle1 is used to drink milk.');
    };
    Bottle.prototype.canSell = function () {
        return 'bottle can be sold.';
    };
    return Bottle;
}());
var user = "sky";
var userString = "hello " + user;
var isTure = true;
var newBoolean = new Boolean(100);
var person = new Person();
person.name = 'sky';
var tomcat = new Animal('Tom');
var cofia = new Cat('Cofia');
var cup = new Cup();
var bottle = new Bottle();
console.log(sayHello(user));
console.log(outBoolean(isTure));
console.log(outBooleanObject(newBoolean));
console.log(stringOrNumber(1));
console.log(stringOrNumber('aaa'));
console.log(person.eat());
console.log(tomcat.run());
console.log(cofia.running());
console.log(cup.canDrink());
console.log(bottle.canDrink());
console.log(bottle.canSell());
