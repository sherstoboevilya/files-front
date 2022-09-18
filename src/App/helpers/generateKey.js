export function generateKey(obj) {
    const keys = [];

    Object.keys(obj).forEach((item, index) => {
        keys.push(index);
    })

    return keys;
}
