import {autoInject, autoInstantiate} from '../src/autoinject';
import {inject} from '../src/inject';

interface User {
    test: string;
}

let user: User = {
    test: 'It works fine'
}

class Db {

    user: User;

    constructor(@inject(user) user: User) {
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
