export function debounce(callback, time) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
        }, time);
    };
}
//# sourceMappingURL=debounce.js.map