import {autoInject} from '../autoinject';
import {dependencyInjection} from '../ioc';

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

@autoInject
class MyClass {

    db: Db;

    constructor(db: Db) {
        this.db = db;
    }
}

const myClass = dependencyInjection(MyClass);

console.log(myClass.db.user.test);
