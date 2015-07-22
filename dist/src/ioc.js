function dependencyInjection(Cls, depth) {
    if (depth === void 0) { depth = 0; }
    if (typeof Cls !== 'function') {
        return Cls;
    }
    if (depth >= 10) {
        throw new Error('IoC: Too many dependencies');
    }
    if (!Array.isArray(Cls.inject)) {
        return new Cls();
    }
    var dependencies = Cls.inject.map(function (dep) {
        return dependencyInjection(dep, depth + 1);
    });
    dependencies.unshift(Cls);
    return new (Cls.bind.apply(Cls, dependencies))();
}
exports.dependencyInjection = dependencyInjection;
