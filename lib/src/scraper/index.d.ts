import cheerio from 'cheerio';
export declare const scrapeContents: (url: string, query: string) => Promise<cheerio.Cheerio>;
