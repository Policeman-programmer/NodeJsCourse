import {SlowNumberGenerator} from "./slow_number_generator";

describe("test of SlowNumberGenerator class", () => {
    const slowNumberGenerator = new SlowNumberGenerator();

    it("should get random number it particular range", (done) => {
            const range: number = 5;
            const promise: Promise<number> = slowNumberGenerator.getRandomNumberAfter4Seconds(range);
            promise.then((resp) => {
                expect(resp).toBeGreaterThan(0);
                expect(resp).toBeLessThan(range);
                done();
            });
        });

    it("should sum sequences of promise's results", (done) => {
            const range: number = 5;
            slowNumberGenerator.getConsequenceOfPromises(range).then((resp) => {
                expect(resp).toBeGreaterThan(3);
                done();
            });

        });

    it("should sum array of promise's results", (done) => {
            const range: number = 5;
            slowNumberGenerator.getArrOfPromisesResponse(range).then((resp) => {
                expect(resp).toBeGreaterThan(range);
                expect(resp).toBeLessThanOrEqual(range * 4);
                done();
            });

        });

    it("should sum numbers by callback function", () => {
            // const range: number = 5;
            // const result: number = slowNumberGenerator.sum2RandomNumbersByCallbackFunction(range);
            // expect(result).toBeGreaterThan(2);
            // expect(result).toBeLessThanOrEqual(range * 2);
        });

});
