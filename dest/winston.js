"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const logger = winston_1.createLogger({
    level: "info",
    format: winston_1.format.json(),
    defaultMeta: { service: "user-service" },
    transports: [
        new winston_1.transports.Console(),
        new winston_1.transports.File({ filename: "./logs/error.log", level: "error" }),
        new winston_1.transports.File({ filename: "./logs/combined.log" }),
    ],
});
exports.default = logger;
