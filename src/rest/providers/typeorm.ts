import { createConnection } from 'typeorm'
import { loadConfig } from '../../'

export const TypeORMProvider = {
  provide: 'DATABASE_CONNECTION',
  useFactory: async () => {
    const { database } = await loadConfig()

    const connection = await createConnection({
      ...database,
    })

    return connection
  },
}
