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


export const getQueryInstance = async (requestUrl: string): Promise<cheerio.Root> => {
  if (checkDomain(requestUrl)) {
    const page = await getPage(requestUrl)
    const doc = cheerio.load(page)

    return doc
  }

  throw new Error('invalid domain/host')
}

export const getPuppetInstance =  async (requestUrl: string): Promise<puppeteer.Page> => {
  if (checkDomain(requestUrl)) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    return page
  }

  throw new Error('invalid domain/host')
}
