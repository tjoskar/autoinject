function dependencyInjection(cls: any, depth: number = 0) {
    if (typeof cls !== 'function' || cls.prototype === undefined) {
        return cls;
    }
    if (depth >= 10) {
        throw new Error('IoC: Too many dependencies');
    }
    if (!Array.isArray(cls.inject)) {
        return new cls();
    }

    const dependencies = cls.inject.map(dep => {
        return dependencyInjection(dep, depth + 1);
    });
    dependencies.unshift(cls);

    return new (cls.bind.apply(cls, dependencies))();
}

export {dependencyInjection};
