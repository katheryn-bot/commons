import test from 'ava'
import { join } from 'path'
import { load } from '../lib'

interface TestConstants {
  SOME_CONSTANT: string
}

test('fetching config', async (t) => {
  const testDir = join(__dirname, 'data/test.config.yml')

  const { constants } = await load(testDir)

  t.is((constants as TestConstants).SOME_CONSTANT, 'SOME_CONSTANT_VALUE')
})
