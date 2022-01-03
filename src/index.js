module.exports = function reverse(n) {
    let str = Math.abs(n).toString().split("");

    return Number(str.reverse().join(""));
};
