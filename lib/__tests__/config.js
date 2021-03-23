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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const path_1 = require("path");
const src_1 = require("../src");
ava_1.default('(UNIT) config | FETCH DETAILS', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const { server, database, constants, } = yield src_1.loadConfig(path_1.join('__tests__', 'data/default.yml'));
    t.true((server === null || server === void 0 ? void 0 : server.port) === 8000);
    t.true((database === null || database === void 0 ? void 0 : database.port) === 5432);
    t.true(constants.testing.includes('very fun'));
    t.true(constants.value === 'SOME_CONSTANT_VALUE');
}));
ava_1.default('(UNIT) config | INVALID CONFIG', (t) => __awaiter(void 0, void 0, void 0, function* () {
    yield t.throwsAsync(src_1.loadConfig(path_1.join('__tests__', 'data/invalid.yml')));
}));
ava_1.default('(UNIT) config | INVALID PATH', (t) => __awaiter(void 0, void 0, void 0, function* () {
    yield t.throwsAsync(src_1.loadConfig('some/path/default.yml'));
}));
