const DELIMITER = ' ';
export function on(element, eve, callback) {
    /* Split events by space */
    const events = Array.isArray(eve) ? eve : [eve];
    /* Subscribe to all the events! */
    events.forEach((event) => element.addEventListener(event, callback));
    /* Return a disposer */
    return () => events.forEach((event) => element.removeEventListener(event, callback));
}
//# sourceMappingURL=on.js.map