export function fromEntries(entries) {
    const result = {};
    for (const entry of entries) {
        result[entry[0]] = entry[1];
    }
    return result;
}
//# sourceMappingURL=from-entries.js.map