import {DateSerializer, JsonIgnore, JsonProperty} from "json-object-mapper";
import "reflect-metadata";

export class Driver {
    public static createNew(name: string, truckNumber: number, password: string, startOfServeAtCompany: Date): Driver {
        const driver: Driver = new Driver();
        driver.name = name;
        driver.truckNumber = truckNumber;
        driver.password = password;
        driver.startOfServeAtCompany = startOfServeAtCompany;
        return driver;
    }

    @JsonProperty()
    private name: string = undefined;
    @JsonProperty()
    private truckNumber: number = undefined;
    @JsonIgnore()
    private password: string = undefined;
    @JsonProperty({type: Date, name: "servedFrom", serializer: DateSerializer})
    private startOfServeAtCompany: Date = undefined;

}
