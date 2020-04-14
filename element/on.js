var DELIMITER = ' ';
export function on(element, eve, callback) {
    /* Split events by space */
    var events = Array.isArray(eve) ? eve : [eve];
    /* Subscribe to all the events! */
    events.forEach(function (event) { return element.addEventListener(event, callback); });
    /* Return a disposer */
    return function () {
        return events.forEach(function (event) { return element.removeEventListener(event, callback); });
    };
}
//# sourceMappingURL=on.js.map