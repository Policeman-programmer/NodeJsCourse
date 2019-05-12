"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json_object_mapper_1 = require("json-object-mapper");
const Driver_1 = require("./Driver");
describe("Test of jsom-map-object", () => {
    fit("should deserialize json to object", () => {
        const json = {
            name: "Vasil",
            truckNumber: 2032,
            password: "abv",
            startOfServeAtCompany: 1483142400000,
        };
        const vasil = json_object_mapper_1.ObjectMapper.deserialize(Driver_1.Driver, json);
        console.log("deserialized", vasil);
    });
});
