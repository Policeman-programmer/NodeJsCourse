import {createLogger, format, transports} from "winston";

// const options = {
//     file: {
//         level: "info",
//         filename: `./logs/app.log`,
//         handleExceptions: true,
//         json: true,
//         maxsize: 5242880, // 5MB
//         maxFiles: 5,
//         colorize: false,
//     },
//     console: {
//         level: "debug",
//         handleExceptions: true,
//         json: false,
//         colorize: true,
//     },
// };

const logger = createLogger({
    level: "info",
    format: format.json(),
    defaultMeta: { service: "user-service" },
    transports: [
        new transports.Console(),
        new transports.File({ filename: "./logs/error.log", level: "error" }),
        new transports.File({ filename: "./logs/combined.log" }),
    ],
});

export default logger;
