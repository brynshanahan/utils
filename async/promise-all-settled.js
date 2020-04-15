const allSettled = (promises) => Promise.all(promises.map(p => p
    .then(v => ({
    status: 'resolved',
    value: v,
}))
    .catch(e => ({
    status: 'rejected',
    reason: e,
}))));
Promise.allSettled = Promise.allSettled || allSettled;
export { allSettled };
//# sourceMappingURL=promise-all-settled.js.map