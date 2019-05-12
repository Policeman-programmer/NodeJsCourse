import {Driver} from "./driver";

export class DriverManager {

    get getDriversArr(): Driver[] {
        return [{id: 1, name: "Petro", truckNumber: "2031"},
            {id: 2, name: "Vasil", truckNumber: "2032"},
            {id: 3, name: "Dmitro", truckNumber: "2033"},
            {id: 4, name: "Vasil", truckNumber: "1032"},
            {id: 5, name: "Gesha", truckNumber: "1133"}];
    }

    public getDriversSet() {
        const driverSet: Set<Driver> = new Set();
        for (const driver of this.getDriversArr) {
            driverSet.add(driver);
        }
        return driverSet;
    }

    public getDriversMap() {
        const driverMap: Map<string, Driver> = new Map();
        const days: string[] = ["Monday", "Thursday", "Wednesday", "Thursday", "Friday",
            "Saturday"];
        for (let i: number = 0; i < this.getDriversArr.length; i++) {
            driverMap.set(days[i], this.getDriversArr[i]);
        }
        return driverMap;
    }
}
