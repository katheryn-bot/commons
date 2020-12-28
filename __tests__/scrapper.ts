import test from 'ava'
import { ExtraUtils } from '../lib'
import { TESTING_URL } from './data/constants'

const { createInstance } = ExtraUtils

test.skip('extract from page', async (t) => {
  const { page } = await createInstance(TESTING_URL, 'kamisama-ni-natta-hi')

  t.true((await page.title()).includes('Kamisama ni Natta Hi'))
})

