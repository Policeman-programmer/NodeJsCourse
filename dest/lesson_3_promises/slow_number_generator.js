"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SlowNumberGenerator {
    static getRandomNumber(maxNumber) {
        return Math.floor(Math.random() * maxNumber) + 1;
    }
    getRandomNumberAfter4Seconds(range) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(SlowNumberGenerator.getRandomNumber(range));
            }, 4000);
        });
    }
    getConsequenceOfPromises(range) {
        function callbeck(resp) {
            return new Promise((resolve) => {
                resolve(() => {
                    return SlowNumberGenerator.getRandomNumber(range) + resp;
                });
            });
        }
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(SlowNumberGenerator.getRandomNumber(range));
            }, 1000);
        }).then((resp) => callbeck(resp))
            .then((resp) => callbeck(resp));
    }
    getArrOfPromisesResponse(range) {
        const firstNumber = this.getRandomNumberAfter4Seconds(range);
        const secondNumber = this.getRandomNumberAfter4Seconds(range);
        const thirdNumber = this.getRandomNumberAfter4Seconds(range);
        const fourthNumber = this.getRandomNumberAfter4Seconds(range);
        return Promise.all([firstNumber, secondNumber, thirdNumber, fourthNumber])
            .then((arrOfRandomNumber) => {
            return arrOfRandomNumber.reduce((prevSum, a) => prevSum + a);
        });
    }
    sum2RandomNumbersByCallbackFunction(range) {
        function getSumOfNumbers(maxNumber, callbackFunc) {
            return setTimeout(() => {
                const firstNumber = SlowNumberGenerator.getRandomNumber(maxNumber);
                return callbackFunc(firstNumber);
            }, 4000);
        }
        function getSecondNumberFunc(firstNumber) {
            return firstNumber + SlowNumberGenerator.getRandomNumber(range);
        }
        return getSumOfNumbers(range, getSecondNumberFunc);
    }
}
exports.SlowNumberGenerator = SlowNumberGenerator;
