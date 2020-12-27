import test from 'ava'
import { ExtraUtils } from '../lib'

const testingUrl = 'https://kitsu.io/anime/'
const { createInstance } = ExtraUtils

test.skip('extract from page', async (t) => {
  const { page } = await createInstance(testingUrl, 'kamisama-ni-natta-hi')

  t.true((await page.title()).includes('Kamisama ni Natta Hi'))
})

