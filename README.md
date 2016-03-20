## Auto inject

Auto dependency injector for typescript.

This is a proof of concept project, it may not be stable.

#### Install

```
$ npm install autoinject
```

#### Usage
```javascript
import {autoInject, dependencyInjection} from 'autoinject';

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
```

All dependencies are stored on a static prototype on the target object.

```javascript
import {autoInject} from 'autoinject';
import {Db} from 'db';

@autoInject
class Controller {
    constructor(db: Db) {}
}

console.log(Controller.inject); // [ Db ]
```

You can also auto instantiate a class

```javascript
import {autoInject, autoInstantiate} from 'autoinject';

class User {
    test = 'It works fine';
}

@autoInjecte
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

You can always override the inject (for testing purpose)

```javascript
// http.ts
class Http {
    get(url: string) {
        // some logic
    }
}
export {Http};

// image-repository.ts
import {autoInject} from 'autoinject';
import {Http} from './http';

@autoInjecte
class ImageRepository {
    http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    getImage() {
        return this.http.get('/image');
    }
}
export {ImageRepository};

// test.ts
import {dependencyInjection} from 'autoinject';
import {ImageRepository} from './image-repository';

const httpMock = {
    get() {
        return 'Nice';
    }
};
ImageRepository.inject = [httpMock];

const imageRepository = dependencyInjection(ImageRepository);

console.assert(imageRepository.getImage(), 'Nice');
```

Include the typing with:
```
"moduleResolution": "node"
```
in your tsconfig.json
