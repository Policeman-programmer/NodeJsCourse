import {JsonIgnore, JsonProperty} from "json-object-mapper";

export class Driver {
    @JsonProperty()
    private name: string;
    @JsonProperty()
    private truckNumber: number;
    @JsonIgnore()
    private password: string;
    @JsonProperty({type: Date, name: "serverFrom"})
    private startOfServeAtCompany: Date;

}
