function dependencyInjection(Cls: any, depth: number = 0) {
    if (typeof Cls !== 'function' || Cls.prototype === undefined) {
        return Cls;
    }
    if (depth >= 10) {
        throw new Error('IoC: Too many dependencies');
    }
    if (!Array.isArray(Cls.inject)) {
        return new Cls();
    }

    var dependencies = Cls.inject.map(dep => {
        return dependencyInjection(dep, depth + 1);
    });
    dependencies.unshift(Cls);

    return new (Cls.bind.apply(Cls, dependencies))();
}

export {dependencyInjection};
