import got from 'got'
import { URL } from 'url'
import cheerio from 'cheerio'
import puppeteer from 'puppeteer'

const getPage = async (page: string): Promise<string> => {
  const {
    body,
    statusCode,
  } = await got(page)

  if (statusCode === 200) {
    return body
  }

  throw new Error(`cannot retrieve page contents: ${page}`)
}

const checkDomain = (input: string): boolean => [
  'hoyolab.com',
  'genshin.mihoyo.com',
  'genshin-impact.fandom.com',
].includes(new URL(input).hostname)


export const runCheerioInstance = async (
  requestUrl: string,
  actionQuery: string
): Promise<cheerio.Cheerio> => {
  if (checkDomain(requestUrl)) {
    const page = await getPage(requestUrl)
    const $ = cheerio.load(page)

    return $(actionQuery)
  }

  throw new Error('invalid domain/host')
}

export const runPuppetInstance =  async (
  requestUrl: string,
  actionQuery: string,
): Promise<NodeListOf<Element>> => {
  if (checkDomain(requestUrl)) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    const elements = await page.evaluate(() =>
      document.querySelectorAll(actionQuery))

    return elements
  }

  throw new Error('invalid domain/host')
}
