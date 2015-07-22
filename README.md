## Auto inject

Auto inject for typescript.

This is a proof of concept project, it may not be stable.

#### Install

```
$ npm install git://github.com/tjoskar/autoinject.git
```

#### Usage

```javascript
import {autoInject} from 'autoinject';
import {DB} from 'db';

@autoInject
class Controller {
    constructor(db: DB) {}
}

console.log(Controller.inject); // [ User ]
```

```javascript
import {autoInject, autoInstantiate} from 'autoinject';

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

var k = new MyClass;

console.log(k.db.user.test); // It works fine
```
