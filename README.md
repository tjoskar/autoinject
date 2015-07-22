## Auto inject

Auto dependency injector for typescript.

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

@autoInstantiate // This will create a singelton
class MyClass {
    constructor(public db?: Db) {}
}

// MyClass is now a singelton and has been converted to a function
// the "new" keyword is therefore not needed but to keep typescript happy we let it be there.
var k = new MyClass();



console.log(k.db.user.test); // output: "It works fine"
```
