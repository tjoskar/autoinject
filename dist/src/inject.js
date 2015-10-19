function inject(injectable) {
    return function (prototype, method, argumentPosition) {
        prototype.inject = prototype.inject || [];
        prototype.inject[argumentPosition] = injectable;
    };
}
exports.inject = inject;
