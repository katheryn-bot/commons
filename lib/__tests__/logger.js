"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const sinon_1 = __importDefault(require("sinon"));
const ava_1 = __importDefault(require("ava"));
ava_1.default.before((t) => {
    t.context.LOGGING = sinon_1.default.stub(src_1.logger, 'info');
});
ava_1.default('SIMPLE LOGGING | NODE_ENV = ?', (t) => {
    src_1.logger.info('simple message');
    const calledWith = t.context.LOGGING
        .calledOnceWithExactly(sinon_1.default.match('simple message'));
    t.true(calledWith);
});
ava_1.default('SIMPLE LOGGING | NODE_ENV = production', (t) => {
    src_1.logger.info('SIMPLE MESSAGE');
    const calledWith = t.context.LOGGING
        .calledWithExactly(sinon_1.default.match('SIMPLE MESSAGE'));
    t.true(calledWith);
});
