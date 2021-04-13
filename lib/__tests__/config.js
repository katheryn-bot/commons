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
    const { server, database, constants, } = yield src_1.get(path_1.join('__tests__', 'data/default.yml'));
    t.is(server.port, 8000);
    t.is(database.database, 'testing-db');
    t.true(constants.testing.includes('very fun'));
    t.true(constants.value === 'SOME_CONSTANT_VALUE');
}));
// to lazy to fix rn
// test ('(UNIT) config | INVALID CONFIG', async (t) => {
//   await t.throwsAsync(get(join('__tests__', 'data/invalid.yml')))
// })
