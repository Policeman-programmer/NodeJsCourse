"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const async_provider_1 = require("./async_provider");
describe("Testing of AsyncProvider", () => {
    const range = 5;
    const asyncProvider = new async_provider_1.AsyncProvider();
    it("should sum sequences of Async results", async () => {
        const result = await asyncProvider.getThreeNumberByAsyncAwait(range);
        expect(result).toBeGreaterThan(3);
        expect(result).toBeLessThanOrEqual(3 * range);
    });
    it("should say hallo and error", () => {
        asyncProvider.sayHalloWorldByLogger();
    });
});
