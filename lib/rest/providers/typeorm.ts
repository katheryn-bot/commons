import { createConnection } from 'typeorm'
import { load as getConfig } from '../../'

export const TypeORMProvider = {
  provide: 'DATABASE_CONNECTION',
  useFactory: async () => {
    const { database } = await getConfig()

    const connection = await createConnection({
      ...database,
    })

    return connection
  },
}
