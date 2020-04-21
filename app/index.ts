function sayHello(person: string) {
    return 'Hello, ' + person;
}

function outBoolean(isTure: boolean) {
    if (isTure) {
        return 'it is ture';
    } else {
        return 'it is false';
    }
}
function outBooleanObject(obj: object) {
    return 'obj is: ' + obj;
}
function stringOrNumber(something: string | number) {
    return 'stringOrNumber is: ' + something;
}
//类
class Person {
    name: string;
    age: number;
    gender: string;
    eat() {
        return `${this.name} should eat rice.`;
    }
}
//可继承的类
class Animal {
    constructor(name){
        this.name = name;
    }
    name: string;
    age: number;
    gender: string;
    run() {
        return `${this.name} should run.`;
    }
}
//继承
class Cat extends Animal{
    constructor(name){
        super(name);
    }
    running(){
        return `hi,` + this.run();
    }
}

interface IDrink{
    canDrink(): void;
}

interface ISell{
    canSell(): void;
}

class Cup implements IDrink{
    canDrink(){
        console.log('cup1:');
        return 'cup1 is used to drink water.';
    }
}
class Bottle implements IDrink, ISell{
    canDrink(){
        console.log('bottle1 is used to drink milk.');
    }
    canSell(){
        return 'bottle can be sold.'
    }
}

let user = "sky";
let userString =  `hello ${user}`;
let isTure = true;
let newBoolean = new Boolean(100);

let person = new Person();
person.name = 'sky';

let tomcat = new Animal('Tom');
let cofia = new Cat('Cofia');

let cup = new Cup();
let bottle = new Bottle();

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
