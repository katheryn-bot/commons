"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerMiddleware = exports.format = void 0;
const common_1 = require("@nestjs/common");
const __1 = require("../../");
const response_time_1 = __importDefault(require("response-time"));
exports.format = ({ time, path, method, }) => {
    return `A ${method} request was made to: ${path} | ${time}`;
};
let LoggerMiddleware = class LoggerMiddleware {
    use(req, res, next) {
        const respTime = res.getHeader('X-Response-Time');
        const { path, method } = req;
        res.app.use(response_time_1.default());
        let time = '';
        if (respTime !== undefined) {
            time += `${res.statusMessage} (${respTime.toString()})`;
        }
        __1.logger.info(exports.format({
            time,
            path,
            method: method,
        }));
        next();
    }
};
LoggerMiddleware = __decorate([
    common_1.Injectable()
], LoggerMiddleware);
exports.LoggerMiddleware = LoggerMiddleware;
