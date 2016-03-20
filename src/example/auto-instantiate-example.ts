import {autoInject, autoInstantiate} from '../autoinject';

class User {
    test = 'It works fine';
}

@autoInject
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

const k = new MyClass();

console.log(k.db.user.test);
