import {ObjectMapper} from "json-object-mapper";
import {Driver} from "./Driver";

describe("Test of jsom-map-object", () => {
    fit("should deserialize json to object", () => {
        const json = {
            name: "Vasil",
            truckNumber: 2032,
            password: "abv",
            startOfServeAtCompany: 1483142400000,
        };

        const vasil = ObjectMapper.deserialize(Driver, json);
        console.log("deserialized", vasil);
    });

});
