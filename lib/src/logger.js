"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
const debug = winston_1.format.printf(({ level, message, timestamp }) => {
    return `[${level.toUpperCase()}] | ${message} (${timestamp})`;
});
const prod = winston_1.format.printf(({ level, message, label, timestamp }) => {
    return `(${level.toUpperCase()}) ${label} : ${message} | ${timestamp}`;
});
exports.logger = winston_1.createLogger({
    level: process.env.NODE_ENV !== 'production'
        ? 'debug' : 'info',
    format: process.env.NODE_ENV !== 'production'
        ? winston_1.format.combine(winston_1.format.timestamp(), debug) :
        winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.label({ label: 'DMG LOGGER' }), prod),
    transports: [
        new winston_1.transports.Console(),
    ]
});
