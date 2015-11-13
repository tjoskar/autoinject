/// <reference path="../typings/autoinject.d.ts"/>

import {autoInject, autoInstantiate} from '../src/autoinject';

class User {
    test = 'It works fine';
}

@autoInject // can be @autoInstantiate
class Db {

    user: User;

    constructor(user: User) {
        this.user = user;
    }
}

@autoInstantiate
class MyClass {

    db: Db;

    constructor(db?: Db) {
        this.db = db;
    }
}

var k = new MyClass();

console.log(k.db.user.test);
