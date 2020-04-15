export function parseDataset(element) {
    const result = {};
    const keys = Object.keys(element.dataset);
    for (let key of keys) {
        if (element.dataset[key] === '') {
            result[key] = true;
            continue;
        }
        try {
            result[key] = JSON.parse(element.dataset[key]);
        }
        catch (e) {
            result[key] = element.dataset[key];
        }
    }
    return result;
}
//# sourceMappingURL=parse-dataset.js.map