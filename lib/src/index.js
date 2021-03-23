"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyParser = exports.logger = exports.CommonModule = exports.loadConfig = void 0;
var config_1 = require("./config");
Object.defineProperty(exports, "loadConfig", { enumerable: true, get: function () { return config_1.loadConfig; } });
var server_1 = require("./rest/server");
Object.defineProperty(exports, "CommonModule", { enumerable: true, get: function () { return server_1.CommonModule; } });
var logger_1 = require("./logger");
Object.defineProperty(exports, "logger", { enumerable: true, get: function () { return logger_1.logger; } });
/// PIPES ///
var parser_1 = require("./rest/pipes/parser");
Object.defineProperty(exports, "BodyParser", { enumerable: true, get: function () { return parser_1.BodyParser; } });
