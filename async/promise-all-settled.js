var allSettled = function (promises) {
    return Promise.all(promises.map(function (p) {
        return p
            .then(function (v) { return ({
            status: 'resolved',
            value: v,
        }); })
            .catch(function (e) { return ({
            status: 'rejected',
            reason: e,
        }); });
    }));
};
Promise.allSettled = Promise.allSettled || allSettled;
export { allSettled };
//# sourceMappingURL=promise-all-settled.js.map