import test from 'ava'
import { join } from 'path'
import { loadConfig as config } from '../src'

test ('(UNIT) config | FETCH DETAILS', async (t) => {
  const {
    server,
    database,
    constants,
  }  = await config(join('__tests__', 'data/default.yml'))

  t.true(server?.port === 8000)
  t.true(database?.port === 5432)
  t.true(constants.testing.includes('very fun'))
  t.true(constants.value === 'SOME_CONSTANT_VALUE')
})

test ('(UNIT) config | INVALID CONFIG', async (t) => {
  await t.throwsAsync(config(join('__tests__', 'data/invalid.yml')))
})

test ('(UNIT) config | INVALID PATH', async (t) => {
  await t.throwsAsync(config('some/path/default.yml'))
})
