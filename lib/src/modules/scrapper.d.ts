import cheerio from 'cheerio';
export declare const runCheerioInstance: (requestUrl: string, actionQuery: string) => Promise<cheerio.Cheerio>;
export declare const runPuppetInstance: (requestUrl: string, actionQuery: string) => Promise<NodeListOf<Element>>;
