import {ObjectMapper} from "json-object-mapper";
import {Driver} from "./Driver";
import {MapDeserializer} from "./map_deserl";
import {FileManager} from "./file_manager";
import mock from "mock-fs";

describe("Test of jsom-map-object", () => {
    it("should deserialize json to object", () => {
        const json = {
            name: "Vasil",
            truckNumber: 2032,
            password: "abv",
            startOfServeAtCompany: 1483142400000,
        };
        const vasil = ObjectMapper.deserialize(Driver, json);
        console.log("deserialized %j" + vasil);
        // toDo: make the test case;
    });

    it("should serialize json to object", () => {
        const vasil: Driver = Driver.createNew("Vasil", 2032, "abv", new Date(1483142400000));
        // tslint:disable-next-line:ban-types
        const stringified: String = ObjectMapper.serialize(vasil);
        console.log("serialized: " + stringified);
        // tslint:disable-next-line:ban-types
        expect(stringified).toBe('{"name":"Vasil","truckNumber":2032,"servedFrom":1483142400000}');
    });

    it("should serialize map by custom Map deserealizator", () => {
        const driverMap: Map<string, string> = new Map();
        driverMap.set("1", "Vasil");
        console.log(driverMap);

        const json = [
            [1, "Vasil"],
            [2, "Petro"],
        ];
        expect(new MapDeserializer().deserialize(json))
            .toEqual(new Map().set("0", [1, "Vasil"]).set("1", [2, "Petro"]));
    });

    let src = "/home/eugen/IdeaProjects/Sintez Course NodeJs/app/lesson_5_file_system/dest/truck.jpg";
    let dest = "/home/eugen/IdeaProjects/Sintez Course NodeJs/app/lesson_5_file_system/src/truck.jpg";

    // const fileManager: FileManager = new FileManager();
    // it("should copy truck from src to dest", () => {
    //     fileManager.copyFile(src, dest);
    // });

    it("should copy mock file", async () => {
        mock({
            "path/to/fake/dir": {
                "some-file.txt": "file content here",
                "empty-dir": {/** empty directory */},
            },
            "path/to/some.png": Buffer.from([8, 6, 7, 5, 3, 0, 9]),
            "some/other/path": {/** another empty directory */},
        });

        src = "path/to/fake/dir/some-file.txt";
        dest = "path/to/fake/dir/empty-dir/1.txt";
        expect(await FileManager.copyFile(src, dest)).toBeTruthy();
    });

    it("should write mock file", async () => {
        mock({
            "path/to/fake/dir": {
                "some-file.txt": "file content here",
                "empty-dir": {/** empty directory */},
            },
            "path/to/some.png": Buffer.from([8, 6, 7, 5, 3, 0, 9]),
            "some/other/path": {/** another empty directory */},
        });

        dest = "path/to/fake/dir/empty-dir/test.txt";
        const content: string = "Content of file!";
        expect(await FileManager.writeFile(dest, content)).toBeGreaterThan(0);
    });

});
