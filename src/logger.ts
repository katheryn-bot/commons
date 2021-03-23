import {
  format,
  transports,
  createLogger,
} from 'winston'

const debug = format.printf(({ level, message, timestamp }) => {
  return `[${level.toUpperCase()}] | ${message} (${timestamp})`
})

const prod = format.printf(({ level, message, label, timestamp }) => {
  return `(${level.toUpperCase()}) ${label} : ${message} | ${timestamp}`
})

export const logger = createLogger({
  level: process.env.NODE_ENV !== 'production'
    ? 'debug' : 'info',
  format: process.env.NODE_ENV !== 'production'
    ? format.combine(
      format.timestamp(),
      debug,
    ) :
    format.combine(
      format.timestamp(),
      format.label({ label: 'DMG LOGGER' }),
      prod,
    ),
  transports: [
    new transports.Console(),
  ]
})

