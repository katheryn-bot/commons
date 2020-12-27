"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileLogger = exports.ConsoleLogger = void 0;
const winston_transport_1 = __importDefault(require("winston-transport"));
const util_1 = require("util");
const chalk_1 = __importDefault(require("chalk"));
class ConsoleLogger extends winston_transport_1.default {
    log(info, callback) {
        setImmediate(() => this.emit('logged', info));
        this.logMessage(info);
        callback();
    }
    logMessage({ level, message, timestamp, }) {
        let coloredLevel = '';
        switch (level.toLowerCase()) {
            case 'info':
                coloredLevel += chalk_1.default.cyan('INFO');
                break;
            case 'warn':
                coloredLevel += chalk_1.default.yellow('WARN');
                break;
            case 'error':
                coloredLevel += chalk_1.default.red('ERROR');
                break;
            case 'debug':
                coloredLevel += chalk_1.default.magenta('DEBUG');
                message = util_1.inspect(message);
                break;
            default:
                coloredLevel += 'TRACE';
        }
        const msg = `${coloredLevel} | ${this.formatMsg(message, timestamp)}`;
        return process.stdout.write(`${msg}\n`);
    }
    formatMsg(msg, time) {
        return `[${time}] > ${msg}`;
    }
}
exports.ConsoleLogger = ConsoleLogger;
class FileLogger extends winston_transport_1.default {
}
exports.FileLogger = FileLogger;
