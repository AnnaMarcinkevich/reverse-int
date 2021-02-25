module.exports = function reverse(n) {
    let str1 = String(Math.abs(n));
    let str2 = "";
    for (let i = str1.length - 1; i >= 0; i--) {
        str2 += str1[i];
    }
    return Number(str2);
};
