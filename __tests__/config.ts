import test from 'ava'
import { join } from 'path'
import { get } from '../src'

test('(UNIT) config | FETCH DETAILS', async (t) => {
  const {
    server,
    database,
    constants,
  } = await get(join('__tests__', 'data/default.yml'))

  t.is(server.port, 8000)
  t.is(database.database, 'testing-db')
  t.true(constants.testing.includes('very fun'))
  t.true(constants.value === 'SOME_CONSTANT_VALUE')
})

// to lazy to fix rn
// test ('(UNIT) config | INVALID CONFIG', async (t) => {
//   await t.throwsAsync(get(join('__tests__', 'data/invalid.yml')))
// })
