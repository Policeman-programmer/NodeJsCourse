"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const driver_manager_1 = require("./driver_manager");
describe("test of DriverManager class", () => {
    const driverManager = new driver_manager_1.DriverManager();
    const driversSet = driverManager.getDriversSet();
    const driversMap = driverManager.getDriversMap();
    const driverArr = driverManager.getDriversArr;
    describe("Testing of Array", () => {
        it("should reverse array", () => {
            const driverArrCopy = driverManager.getDriversArr;
            expect(driverArrCopy.reverse()[0]).toEqual({ id: 5, name: "Gesha", truckNumber: "1133" });
        });
        it("should delete element", () => {
            const driverArrCopy = driverManager.getDriversArr;
            expect(driverArrCopy.splice(0, 1).length).not.toBe(driverArrCopy.length - 1);
        });
        it("should delete the last element", () => {
            const driverArrCopy = driverManager.getDriversArr;
            expect(driverArrCopy.pop()).toEqual({ id: 5, name: "Gesha", truckNumber: "1133" });
        });
        it("should prove that the indexOf not work for object", () => {
            const vasil = driverManager.getDriversArr[1];
            expect(driverArr.indexOf(vasil)).toBeLessThan(0);
        });
        it("should find object", () => {
            expect(driverArr.find((element, index) => {
                return index === 1;
            })).toEqual({ id: 2, name: "Vasil", truckNumber: "2032" });
        });
    });
    describe("testing of Set", () => {
        it("should delete element", () => {
            const driversSetCopy = driverManager.getDriversSet();
            const ze = { id: 1, name: "Vladimir", truckNumber: "007" };
            driversSetCopy.add(ze);
            expect(driversSetCopy.delete(ze)).toBeTruthy();
        });
        it("should clear all set", () => {
            const driversSetCopy = driverManager.getDriversSet();
            driversSetCopy.clear();
            expect(driversSetCopy.size).toEqual(0);
        });
        it("should contain element", () => {
            const ze = { id: 1, name: "Vladimir", truckNumber: "007" };
            driversSet.add(ze);
            expect(driversSet.has(ze)).toBeTruthy();
        });
    });
});
