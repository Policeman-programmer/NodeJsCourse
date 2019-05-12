import {AsyncProvider} from "./async_provider";

describe("Testing of AsyncProvider", () => {
        const range: number = 5;
        const asyncProvider = new AsyncProvider();

        it("should sum sequences of Async results", async () => {
            const result = await asyncProvider.getThreeNumberByAsyncAwait(range);
            expect(result).toBeGreaterThan(3);
            expect(result).toBeLessThanOrEqual(3 * range);
        });

        it("should say hallo and error", () => {
            asyncProvider.sayHalloWorldByLogger();
        });

    },
);
