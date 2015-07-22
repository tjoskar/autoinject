var reflect_polyfill_1 = require('./reflect-polyfill');
var ioc_1 = require('./ioc');
var parameterKey = 'design:paramtypes';
function autoInject(target) {
    if (typeof target !== 'function') {
        throw new Error('autoInject: Target must be a function');
    }
    target.inject = reflect_polyfill_1.Reflect.getOwnMetadata(parameterKey, target) || [];
    return target;
}
exports.autoInject = autoInject;
function autoInstantiate(target) {
    return function () { return ioc_1.dependencyInjection(autoInject(target)); };
}
exports.autoInstantiate = autoInstantiate;
