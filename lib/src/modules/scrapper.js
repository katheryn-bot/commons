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
exports.runPuppetInstance = exports.runCheerioInstance = void 0;
const got_1 = __importDefault(require("got"));
const url_1 = require("url");
const cheerio_1 = __importDefault(require("cheerio"));
const puppeteer_1 = __importDefault(require("puppeteer"));
const getPage = (page) => __awaiter(void 0, void 0, void 0, function* () {
    const { body, statusCode, } = yield got_1.default(page);
    if (statusCode === 200) {
        return body;
    }
    throw new Error(`cannot retrieve page contents: ${page}`);
});
const checkDomain = (input) => [
    'hoyolab.com',
    'genshin.mihoyo.com',
    'genshin-impact.fandom.com',
].includes(new url_1.URL(input).hostname);
const runCheerioInstance = (requestUrl, actionQuery) => __awaiter(void 0, void 0, void 0, function* () {
    if (checkDomain(requestUrl)) {
        const page = yield getPage(requestUrl);
        const $ = cheerio_1.default.load(page);
        return $(actionQuery);
    }
    throw new Error('invalid domain/host');
});
exports.runCheerioInstance = runCheerioInstance;
const runPuppetInstance = (requestUrl, actionQuery) => __awaiter(void 0, void 0, void 0, function* () {
    if (checkDomain(requestUrl)) {
        const browser = yield puppeteer_1.default.launch();
        const page = yield browser.newPage();
        const elements = yield page.evaluate(() => document.querySelectorAll(actionQuery));
        return elements;
    }
    throw new Error('invalid domain/host');
});
exports.runPuppetInstance = runPuppetInstance;
