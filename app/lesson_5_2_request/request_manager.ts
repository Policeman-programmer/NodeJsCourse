import rpn from "request-promise-native";
import {MapDeserializer} from "../lesson_5_1_file_system/map_deserl";

export class RequestManager {
    public async getListUsersFromReqest(): Promise<void> {
        const options = {
            url: "https://reqres.in/api/users?page=2",
            json: true,
        };
        const response = await rpn(options);
        const mapDes: MapDeserializer = new MapDeserializer();
        console.log(mapDes.deserialize(response));
    }
}
