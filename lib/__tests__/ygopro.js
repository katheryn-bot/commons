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
const YGOProAPI_1 = require("../src/YGOProAPI");
ava_1.default('YGOPRO WRAPPER | FETCH CARD', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const name = 'Black Rose Dragon';
    const incomingCard = yield YGOProAPI_1.requestCard({
        name,
        fuzzySearch: false,
        byArchetype: false
    });
    t.is(incomingCard.data[0].name, name);
}));
ava_1.default('YGOPRO WRAPPER | SEARCH CARDS', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const query = 'Dark Magician';
    const incomingCards = yield YGOProAPI_1.requestCard({
        name: query,
        fuzzySearch: true,
        byArchetype: false,
    });
    t.is(incomingCards.data[0].name, 'Dark Magician');
    t.is(incomingCards.data[1].name, 'Dark Magician Girl');
}));
ava_1.default('YGOPRO WRAPPER | CALCULATE PRICE', (t) => __awaiter(void 0, void 0, void 0, function* () {
    t.is(YGOProAPI_1.calcPrice('0.04'), 500);
    t.is(YGOProAPI_1.calcPrice('5.40'), 3000);
}));
