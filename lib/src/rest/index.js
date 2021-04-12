"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabseModule = exports.LoggerMiddleware = void 0;
const config_1 = require("../config");
const typeorm_1 = require("@nestjs/typeorm");
var logger_1 = require("./middleware/logger");
Object.defineProperty(exports, "LoggerMiddleware", { enumerable: true, get: function () { return logger_1.LoggerMiddleware; } });
const DatabseModule = () => {
    const { database: DATABASE_CONFIG } = config_1.loadConfig();
    return typeorm_1.TypeOrmModule.forRoot(Object.assign({}, DATABASE_CONFIG));
};
exports.DatabseModule = DatabseModule;
