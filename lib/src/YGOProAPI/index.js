"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestCard = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const BASE_URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php/';
const requestCard = (_a) => {
    var { name, fuzzySearch, byArchetype } = _a, parameters = __rest(_a, ["name", "fuzzySearch", "byArchetype"]);
    return new Promise((resolve, reject) => {
        const prefix = byArchetype
            ? `?archetype=${name}`
            : fuzzySearch
                ? `?fname=${name}`
                : `?name=${name}`;
        const requestURL = [];
        const params = Object.entries(parameters)
            .map(([key, value]) => `&${key}=${value}`)
            .join();
        requestURL.push(BASE_URL);
        requestURL.push(prefix);
        requestURL.push(params);
        requestURL.push('&misc=yes');
        node_fetch_1.default(requestURL.join(''))
            .then((resp) => resp.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));
    });
};
exports.requestCard = requestCard;
