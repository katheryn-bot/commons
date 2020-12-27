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
exports.createInstance = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const createInstance = (url, path) => __awaiter(void 0, void 0, void 0, function* () {
    const instanceUrl = `${url}/${path !== null && path !== void 0 ? path : ''}`;
    const browser = yield puppeteer_1.default.launch({
        // comment if you're not running WSL2
        executablePath: '/usr/bin/chromedriver',
    });
    const page = yield browser.newPage();
    yield page.goto(instanceUrl, {
        waitUntil: 'load',
    });
    return {
        browser,
        page,
        shutdown: () => __awaiter(void 0, void 0, void 0, function* () {
            yield browser.close();
        }),
    };
});
exports.createInstance = createInstance;
