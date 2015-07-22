import {Reflect} from './reflect-polyfill';
import {dependencyInjection} from './ioc';

const parameterKey = 'design:paramtypes';

function autoInject(target): any {
    if (typeof target !== 'function') {
        throw new Error('autoInject: Target must be a function');
    }

    target.inject = Reflect.getOwnMetadata(parameterKey, target) || [];
    return target;
}

function autoInstantiate(target): any {
    return () => dependencyInjection(
        autoInject(target)
    );
}

export {autoInject, autoInstantiate};
