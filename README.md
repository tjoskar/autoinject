## Auto inject

Auto dependency injector for typescript.

This is a proof of concept project, it may not be stable.

#### Install

```
$ npm install autoinject
```

#### Usage

```javascript
// Link the d.ts file with `tsd link` or create a reference:
/// <reference path="node_modules/autoinject/index.d.ts"/>

import {autoInject} from 'autoinject';
import {DB} from 'db';

@autoInject
class Controller {
    constructor(db: DB) {}
}

console.log(Controller.inject); // [ DB ]
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

var k = new MyClass();

console.log(k.db.user.test); // output: "It works fine"
```

```javascript
import {inject, autoInstantiate} from 'autoinject';

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
```

```javascript
import {autoInject, dependencyInjection} from 'autoinject';

class User {
    test = 'It works fine';
}

@autoInject
class Db {
    public user: User;

    constructor(user: User) {
        this.user = user;
    }
}

let db = dependencyInjection(Db);

console.log(db.user.test); // output: "It works fine"
```
