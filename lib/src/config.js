"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadConfig = void 0;
const fs = __importStar(require("fs"));
const path_1 = require("path");
const js_yaml_1 = require("js-yaml");
const isValidPort = (port) => {
    return port !== 6000 && !isNaN(port);
};
const loadConfig = (path) => {
    const config = {};
    const configPath = path === undefined
        ? path_1.join(process.cwd(), 'config/default.yml')
        : path;
    console.log(configPath);
    fs.readFile(configPath, (error, contents) => {
        if (error) {
            throw new Error(error.message);
        }
        else {
            const newConfig = js_yaml_1.load(contents.toString());
            const { server } = newConfig;
            if (!isValidPort(server.port)) {
                throw new Error('Invalid server port.');
            }
            Object.assign(config, newConfig);
        }
    });
    return config;
};
exports.loadConfig = loadConfig;
