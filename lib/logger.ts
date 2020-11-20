// felt loggie today, might edit later..

import { createLogger } from 'bunyan'

const { NODE_ENV } = process.env

export const logger = createLogger({
  name: 'katheryn-logger',
  level: NODE_ENV !== 'production'
    ? 'info'
    : 'debug',
  streams: [
    {
      level: 'info',
      stream: process.stdout,
    },
    {
      level: 'debug',
      stream: process.stderr,
    },
    {
      level: 'error',
      path: '/var/tmp/katheryn-error.log',
    },
  ],
})
