import logger from "../winston";

export class AsyncProvider {

    public async getRandomNumberAfter1Seconds(maxNumber: number): Promise<number> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Math.floor(Math.random() * maxNumber) + 1);
            }, 1000);
        });
    }

    public async getThreeNumberByAsyncAwait(range: number) {

        const firstNumber: number = await this.getRandomNumberAfter1Seconds(range);
        const secondNumber: number = await this.getRandomNumberAfter1Seconds(range);
        const thirdNumber: number = await this.getRandomNumberAfter1Seconds(range);

        return firstNumber + secondNumber + thirdNumber;
    }

    public sayHalloWorldByLogger() {
        logger.info("Hallo World");
        logger.error("It is eroooor!!!");
    }

}
