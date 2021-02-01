"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const path_1 = require("path");
const js_yaml_1 = require("js-yaml");
const promises_1 = require("fs/promises");
const isValidPort = (port) => {
    return port !== 6000 && !isNaN(port);
};
const get = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const configPath = path === undefined
        ? path_1.join(process.cwd(), 'config/default.yml')
        : path;
    const contents = yield promises_1.readFile(configPath);
    const config = js_yaml_1.load(contents.toString());
    const { server, database } = config;
    if (!isValidPort(server.port) || !isValidPort(database.port)) {
        throw new Error('The server/database port is invalid.');
    }
    return config;
});
exports.get = get;
