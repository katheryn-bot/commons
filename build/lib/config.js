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
const get = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const configPath = path !== undefined
        ? path
        : path_1.join(process.cwd(), 'config/default.yml');
    console.log(configPath);
    const contents = yield promises_1.readFile(configPath);
    return js_yaml_1.load(contents.toString());
});
exports.get = get;
