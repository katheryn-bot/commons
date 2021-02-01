import test from 'ava'
import { scrapeContents } from '../src'

test('SCRAPE FROM SITE', async (t) => {
  // great manga btw...
  const SCRAPE_URL = 'https://mangakakalot.com/manga/fu917686'
  const query = '.manga-info-top .manga-info-text h1'

  const scrapedResult = await scrapeContents(SCRAPE_URL, query)

  console.log(scrapedResult.text())

  t.true(scrapedResult.text() === 'Majo-Senpai Nichijou')
})
