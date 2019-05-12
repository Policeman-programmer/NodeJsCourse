"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const json_object_mapper_1 = require("json-object-mapper");
class Driver {
}
__decorate([
    json_object_mapper_1.JsonProperty()
], Driver.prototype, "name", void 0);
__decorate([
    json_object_mapper_1.JsonProperty()
], Driver.prototype, "truckNumber", void 0);
__decorate([
    json_object_mapper_1.JsonIgnore()
], Driver.prototype, "password", void 0);
__decorate([
    json_object_mapper_1.JsonProperty({ type: Date, name: "serverFrom" })
], Driver.prototype, "startOfServeAtCompany", void 0);
exports.Driver = Driver;
