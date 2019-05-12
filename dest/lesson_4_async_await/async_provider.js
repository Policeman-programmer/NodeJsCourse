"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("../winston");
class AsyncProvider {
    async getRandomNumberAfter1Seconds(maxNumber) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Math.floor(Math.random() * maxNumber) + 1);
            }, 1000);
        });
    }
    async getThreeNumberByAsyncAwait(range) {
        const firstNumber = await this.getRandomNumberAfter1Seconds(range);
        const secondNumber = await this.getRandomNumberAfter1Seconds(range);
        const thirdNumber = await this.getRandomNumberAfter1Seconds(range);
        return firstNumber + secondNumber + thirdNumber;
    }
    sayHalloWorldByLogger() {
        winston_1.default.info("Hallo World");
        winston_1.default.error("It is eroooor!!!");
    }
}
exports.AsyncProvider = AsyncProvider;
