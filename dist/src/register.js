var registerdModules = {};
exports.registerdModules = registerdModules;
function register(name, obj) {
    if (typeof name === 'string') {
        registerdModules[name] = obj;
    }
    else {
        Object.keys(name).forEach(function (n) {
        });
    }
}
exports.register = register;
function getRegistedModule(name) {
    return registerdModules[name];
}
