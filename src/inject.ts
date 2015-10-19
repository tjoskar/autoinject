
function inject(injectable) {
    return (prototype, method, argumentPosition) => {
        prototype.inject = prototype.inject || [];
        prototype.inject[argumentPosition] = injectable;
    };
}

export {inject};
