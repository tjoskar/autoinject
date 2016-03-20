import 'reflect-metadata';

import {dependencyInjection} from './ioc';

const parameterKey = 'design:paramtypes';

function autoInject(target): any {
    if (typeof target !== 'function') {
        throw new Error('autoInject: Target must be a function');
    }

    const injects = Reflect.getOwnMetadata(parameterKey, target) || [];

    // If a user use default parameters we will get `Object` as argument
    // which will remove the default parameter. That is why we should replace
    // the argument with undefined so the use are still able to use the default
    // parameter. However, this will make it impossible to create a class with
    // `Object` as argument :(
    // See issue-6: https://github.com/tjoskar/autoinject/issues/6
    target.inject = injects.map(i => i === Object ? undefined : i);

    return target;
}

function autoInstantiate(target): any {
    return () => dependencyInjection(
        autoInject(target)
    );
}

export {autoInject, autoInstantiate};
