export interface RequestCard {
    name: string;
    race?: string;
    link?: number;
    scale?: number;
    level?: number;
    atkPoints?: number;
    defPoints?: number;
    attribute?: string;
    fuzzySearch: boolean;
    byArchetype: boolean;
}
export interface YGORawCards {
    id: number;
    name: string;
    type: string;
    desc: string;
    atk: number;
    def: number;
    level: number;
    race: string;
    attribute: string;
    card_sets: YGORawCardSet[];
    card_images: YGORawCardImage[];
    card_prices: YGORawCardPrices[];
}
export interface YGORawCardSet {
    set_name: string;
    set_code: string;
    set_price: string;
    set_rarity: string;
    set_rarity_code: string;
}
export interface YGORawCardImage {
    id: number;
    image_url: string;
    image_url_small: string;
}
export interface YGORawCardPrices {
    cardmarket_price: string;
    tcgplayer_price: string;
    ebay_price: string;
    amazon_price: string;
    coolstuffinc_price: string;
}
export interface YGOResponse {
    data: YGORawCards[];
}
