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
exports.getPuppetInstance = exports.getQueryInstance = void 0;
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
const getQueryInstance = (requestUrl) => __awaiter(void 0, void 0, void 0, function* () {
    if (checkDomain(requestUrl)) {
        const page = yield getPage(requestUrl);
        const doc = cheerio_1.default.load(page);
        return doc;
    }
    throw new Error('invalid domain/host');
});
exports.getQueryInstance = getQueryInstance;
const getPuppetInstance = (requestUrl) => __awaiter(void 0, void 0, void 0, function* () {
    if (checkDomain(requestUrl)) {
        const browser = yield puppeteer_1.default.launch();
        const page = yield browser.newPage();
        return page;
    }
    throw new Error('invalid domain/host');
});
exports.getPuppetInstance = getPuppetInstance;
