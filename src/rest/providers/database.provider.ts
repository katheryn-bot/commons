import {
  Connection,
  createConnection,
  ConnectionOptions,
} from 'typeorm'

import { loadConfig as conf } from '../../'
const { NODE_ENV } = process.env

const IMPORT_DATABASE = NODE_ENV === 'dev'
  ? {
    port: 6000,
    type: 'postgres',
    database: 'test',
    username: 'test',
    password: 'test',
  } as ConnectionOptions
  : conf().database

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<Connection> =>
      await createConnection({
        ...IMPORT_DATABASE,
      })
  }
]
