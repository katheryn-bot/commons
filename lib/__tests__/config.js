"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const path_1 = require("path");
// import { ConnectionOptions } from 'typeorm'
const src_1 = require("../src");
ava_1.default('(UNIT) config | FETCH DETAILS', (t) => {
    const { server, 
    // database,
    constants, } = src_1.loadConfig(path_1.join('__tests__', 'data/default.yml'));
    console.log(server);
    t.is(server.port, 8000);
    t.true(constants.testing.includes('very fun'));
    t.true(constants.value === 'SOME_CONSTANT_VALUE');
});
ava_1.default.failing('(UNIT) config | INVALID CONFIG', () => {
    src_1.loadConfig(path_1.join('__tests__', 'data/invalid.yml'));
});
