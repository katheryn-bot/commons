"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonModule = exports.load = exports.logger = void 0;
var logger_1 = require("./logger");
Object.defineProperty(exports, "logger", { enumerable: true, get: function () { return logger_1.logger; } });
var config_1 = require("./config");
Object.defineProperty(exports, "load", { enumerable: true, get: function () { return config_1.get; } });
var server_1 = require("./rest/server");
Object.defineProperty(exports, "CommonModule", { enumerable: true, get: function () { return server_1.CommonModule; } });
