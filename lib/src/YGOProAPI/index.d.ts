import { RequestCard, YGOResponse } from './scheme.cards';
export declare const requestCard: ({ name, fuzzySearch, byArchetype, ...parameters }: RequestCard) => Promise<YGOResponse>;
export declare const calcPrice: (price: string) => number;
