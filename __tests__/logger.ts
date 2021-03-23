import { logger } from '../src'
import winston from 'winston'
import sinon from 'sinon'
import test from 'ava'

test.before((t) => {
  (t.context as TestContext).LOGGING = sinon.stub(logger, 'info')
})

test ('SIMPLE LOGGING | NODE_ENV = ?', (t) => {
  logger.info('simple message')

  const calledWith = (t.context as TestContext).LOGGING
    .calledOnceWithExactly(sinon.match('simple message'))

  t.true(calledWith)
})

test ('SIMPLE LOGGING | NODE_ENV = production', (t) => {
  logger.info('SIMPLE MESSAGE')

  const calledWith = (t.context as TestContext).LOGGING
    .calledWithExactly(sinon.match('SIMPLE MESSAGE'))

  t.true(calledWith)
})

interface TestContext {
  LOGGING: sinon.SinonStub<[infoObject: object], winston.Logger>
}
