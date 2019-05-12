import {Calculator} from "./calculator";

describe("test of calculator.ts", () => {

    it("should calculate a + b", () => {
        expect(new Calculator().sum(2, 2)).toBe(4);
    });

});
