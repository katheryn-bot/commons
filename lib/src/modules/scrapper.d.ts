import cheerio from 'cheerio';
import puppeteer from 'puppeteer';
export declare const getQueryInstance: (requestUrl: string) => Promise<cheerio.Root>;
export declare const getPuppetInstance: (requestUrl: string) => Promise<puppeteer.Page>;
