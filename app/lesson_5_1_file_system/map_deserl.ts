import {Deserializer} from "json-object-mapper";

export class MapDeserializer implements Deserializer {
    public deserialize = (value: any): any  => {
        const mapToReturn: Map<string, string> = new Map<string, string>();
        if (value) {
            Object.keys(value).forEach((key: string) => {
                mapToReturn.set(key, value["" + key]);
            });
        }
        return mapToReturn;
    }
}
