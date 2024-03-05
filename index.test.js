const random = require("./index")


describe("Random Funcrion Testing", () => {
    it("The function should return a random number between 100 and 1000", () => {
        const result = random(100, 1000);
        expect(typeof result).toBe("number");
    });
    it('If a string is passed as an argument to the function, the response must be NaN', () => {
        const result = random(100, "Hello");
        expect(typeof result).toBe(NaN);

    });
    it('The value of the function cannot be more than 1000', () => {
        const result = random(100, 500);
        expect(result).toBe(10000);

    });
});
