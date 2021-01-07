import test from 'ava'
import { scrapper } from '../src'
import { TESTING_URL } from './data/constants'

test ('(UNIT) scrape-utils: GENERAL | INVALID URL', async (t) => {
  await t.throwsAsync(scrapper.getQueryInstance('https://example.com'))
})

test ('(UNIT) scrape-utils: GENERAL | INVALID PAGE', async (t) => {
  await t.throwsAsync(scrapper.getQueryInstance(`${TESTING_URL}/somerandompage`))
})

test ('(UNIT) scrape-utils: CHEERIO | FETCH DATA', async (t) => {
  const instance = await scrapper.getQueryInstance(`${TESTING_URL}/Amos'_Bow`)

  const weaponTitle = instance('h2.pi-item.pi-title').text()

  t.is(weaponTitle, 'Amos\' Bow')
})

test.skip('(UNIT) scrape-utils: PUPPET | FETCH DATA', async (t) => {
  const instance = await scrapper.getPuppetInstance(`${TESTING_URL}/Amos'_Bow`)

  const weaponTitle = await (await instance.$('h2.pi-item.pi-title'))
    .evaluate(() => document.documentElement.innerText)

  t.is(weaponTitle, 'Amos\' Bow')
})
