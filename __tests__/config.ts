import test from 'ava'
import { join } from 'path'
import { load as getConfig } from '../src'

test ('(UNIT) config | FETCH DETAILS', async (t) => {
  const {
    server,
    database,
    constants,
  }  = await getConfig(join('__tests__', 'data/default.yml'))

  t.true(server.port === 8000)
  t.true(database.port === 5432)
  t.true(constants.testing.includes('very fun'))
  t.true(constants.value === 'SOME_CONSTANT_VALUE')
})

test ('(UNIT) config | INVALID PATH', async (t) => {
  await t.throwsAsync(getConfig('some/path/default.yml'))
})
