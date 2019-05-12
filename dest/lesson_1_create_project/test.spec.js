"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_1 = require("./calculator");
describe("test of calculator.ts", () => {
    it("should calculate a + b", () => {
        expect(new calculator_1.Calculator().sum(2, 2)).toBe(4);
    });
});
