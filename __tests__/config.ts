import test from 'ava'
import { join } from 'path'
// import { ConnectionOptions } from 'typeorm'
import { loadConfig as config } from '../src'

test('(UNIT) config | FETCH DETAILS', (t) => {
  const {
    server,
    // database,
    constants,
  } = config(join('__tests__', 'data/default.yml'))

  console.log(server)

  t.is(server.port, 8000)
  t.true(constants.testing.includes('very fun'))
  t.true(constants.value === 'SOME_CONSTANT_VALUE')
})

test.failing('(UNIT) config | INVALID CONFIG', () => {
  config(join('__tests__', 'data/invalid.yml'))
})
