var globalObject = (function () {
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof global !== 'undefined') {
        return global;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    return new Function('return this')();
})();
exports.globalObject = globalObject;
