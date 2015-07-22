import {autoInject, autoInstantiate} from '../src/autoinject';

class User {
    test = 'It works fine';
}

@autoInject // can be @autoInstantiate
class Db {
    constructor(public user: User) {}
}

@autoInstantiate
class MyClass {
    constructor(public db?: Db) {}
}

var k = new MyClass();

console.log(k.db.user.test);
