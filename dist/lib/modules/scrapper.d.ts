import puppeteer from 'puppeteer';
export interface Instance {
    page: puppeteer.Page;
    browser: puppeteer.Browser;
    shutdown: () => Promise<void>;
}
export declare const createInstance: (url: string, path: string) => Promise<Instance>;
