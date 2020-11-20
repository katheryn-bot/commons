"use strict";
// felt loggie today, might edit later..
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const bunyan_1 = require("bunyan");
const { NODE_ENV } = process.env;
exports.logger = bunyan_1.createLogger({
    name: 'katheryn-logger',
    level: NODE_ENV !== 'production'
        ? 'info'
        : 'debug',
    streams: [
        {
            level: 'info',
            stream: process.stdout,
        },
        {
            level: 'debug',
            stream: process.stderr,
        },
        {
            level: 'error',
            path: '/var/tmp/katheryn-error.log',
        },
    ],
});
