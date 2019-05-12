"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DriverManager {
    get getDriversArr() {
        return [{ id: 1, name: "Petro", truckNumber: "2031" },
            { id: 2, name: "Vasil", truckNumber: "2032" },
            { id: 3, name: "Dmitro", truckNumber: "2033" },
            { id: 4, name: "Vasil", truckNumber: "1032" },
            { id: 5, name: "Gesha", truckNumber: "1133" }];
    }
    getDriversSet() {
        const driverSet = new Set();
        for (const driver of this.getDriversArr) {
            driverSet.add(driver);
        }
        return driverSet;
    }
    getDriversMap() {
        const driverMap = new Map();
        const days = ["Monday", "Thursday", "Wednesday", "Thursday", "Friday",
            "Saturday"];
        for (let i = 0; i < this.getDriversArr.length; i++) {
            driverMap.set(days[i], this.getDriversArr[i]);
        }
        return driverMap;
    }
}
exports.DriverManager = DriverManager;
