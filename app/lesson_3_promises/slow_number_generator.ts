export class SlowNumberGenerator {

    private static getRandomNumber(maxNumber: number) {
        return Math.floor(Math.random() * maxNumber) + 1;
    }

    public getRandomNumberAfter4Seconds(range: number): Promise<number> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(SlowNumberGenerator.getRandomNumber(range));
            }, 4000);
        });
    }

    public getConsequenceOfPromises(range: number): Promise<number> {
        function callbeck(resp: number): Promise<number> {
            return new Promise((resolve) => {
                resolve(SlowNumberGenerator.getRandomNumber(range) + resp);
            });
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(SlowNumberGenerator.getRandomNumber(range));
            }, 1000);
        }).then(async (resp: number) => callbeck(resp))
            .then(async (resp: number) => callbeck(resp));
    }

    public getArrOfPromisesResponse(range: number) {
        const firstNumber = this.getRandomNumberAfter4Seconds(range);
        const secondNumber = this.getRandomNumberAfter4Seconds(range);
        const thirdNumber = this.getRandomNumberAfter4Seconds(range);
        const fourthNumber = this.getRandomNumberAfter4Seconds(range);

        return Promise.all([firstNumber, secondNumber, thirdNumber, fourthNumber])
            .then((arrOfRandomNumber) => {
                return arrOfRandomNumber.reduce((prevSum: number, a: number) => prevSum + a);
            });
    }

    public sum2RandomNumbersByCallbackFunction(range: number) {
        // function getSumOfNumbers(maxNumber: number, callbackFunc: (numberToAdd: number) => number): number {
        //     return setTimeout(() => {
        //         const firstNumber = SlowNumberGenerator.getRandomNumber(maxNumber);
        //         return callbackFunc(firstNumber);
        //     }, 4000);
        // }
        //
        // function getSecondNumberFunc(firstNumber: number): number {
        //     return firstNumber + SlowNumberGenerator.getRandomNumber(range);
        // }
        //
        // return getSumOfNumbers(range, getSecondNumberFunc);
    }

}
