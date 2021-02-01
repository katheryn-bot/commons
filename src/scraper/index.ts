import got from 'got'
import cheerio from 'cheerio'

export const scrapeContents = async (url: string, query: string): Promise<cheerio.Cheerio> => {
  try {
    const { body } = await got(url, {
      method: 'GET',
    })

    const $ = cheerio.load(body)

    return $(query)
  } catch (error) {
    throw new Error(`unable to scrape contents from URL: ${url}, reason: ${error}`)
  }
}
