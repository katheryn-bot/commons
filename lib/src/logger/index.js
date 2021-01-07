"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
const modules_1 = require("./modules");
const { NODE_ENV, } = process.env;
exports.logger = winston_1.createLogger({
    level: NODE_ENV !== 'production'
        ? 'debug'
        : 'info',
    format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.prettyPrint(), winston_1.format.splat()),
    transports: [
        new modules_1.ConsoleLogger(),
    ],
});
