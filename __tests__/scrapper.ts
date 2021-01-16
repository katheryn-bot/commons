import test from 'ava'
import { scrapper } from '../src'
import { TESTING_URL } from './data/constants'

test ('(UNIT) scrape-utils: GENERAL | INVALID URL', async (t) => {
  await t.throwsAsync(scrapper.runCheerioInstance('https://example.com', '_'))
})

test ('(UNIT) scrape-utils: GENERAL | INVALID PAGE', async (t) => {
  await t.throwsAsync(scrapper.runCheerioInstance(`${TESTING_URL}/somerandompage`, '_'))
})

test ('(UNIT) scrape-utils: CHEERIO | FETCH DATA', async (t) => {
  const instance = await scrapper.runCheerioInstance(
    `${TESTING_URL}/Amos'_Bow`,
    'h2.pi-item.pi-title'
  )

  const weaponTitle = instance.text()

  t.is(weaponTitle, 'Amos\' Bow')
})

test.skip('(UNIT) scrape-utils: PUPPET | FETCH DATA', async (t) => {
  const page = await scrapper.runPuppetInstance(
    `${TESTING_URL}/Amos'_Bow`,
    'h2.pi-item.pi-title'
  )

  const weaponTitle = page.item(0).textContent;

  t.is(weaponTitle, 'Amos\' Bow')
})
