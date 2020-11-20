export declare const TypeORMProvider: {
    provide: string;
    useFactory: () => Promise<import("typeorm").Connection>;
};
