const random = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

module.exports = random

console.log(typeof random(1000, 10000))
