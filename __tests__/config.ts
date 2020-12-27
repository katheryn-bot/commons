import test from 'ava'
import { join } from 'path'
import { load as getConfig } from '../lib'

test ('fetch config details', async (t) => {
  const {
    server,
    database,
    constants,
  }  = await getConfig(join('__tests__', 'data/default.yml'))

  t.true(server.port === 8000)
  t.true(database.port === 5432)
  t.true(constants.testing.includes('very fun'))
})

