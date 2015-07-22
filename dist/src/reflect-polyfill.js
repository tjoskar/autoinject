var global_1 = require('./global');
var metadataContainerKey = '__metadata__';
var emptyMetadata = Object.freeze({});
var Reflect = {
    getOwnMetadata: function (metadataKey, target, targetKey) {
        return ((target[metadataContainerKey] || emptyMetadata)[targetKey] || emptyMetadata)[metadataKey];
    },
    defineMetadata: function (metadataKey, metadataValue, target, targetKey) {
        var metadataContainer = target[metadataContainerKey] || (target[metadataContainerKey] = {});
        var targetContainer = metadataContainer[targetKey] || (metadataContainer[targetKey] = {});
        targetContainer[metadataKey] = metadataValue;
    },
    metadata: function (metadataKey, metadataValue) {
        return function (target, targetKey) {
            Reflect.defineMetadata(metadataKey, metadataValue, target, targetKey);
        };
    }
};
exports.Reflect = Reflect;
if (global_1.globalObject.Reflect === undefined) {
    global_1.globalObject.Reflect = Reflect;
}
