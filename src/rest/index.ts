import { loadConfig as config } from '../config'
import { TypeOrmModule } from '@nestjs/typeorm'

export { LoggerMiddleware } from './middleware/logger'

export const DatabseModule = () => {
  const { database: DATABASE_CONFIG } = config()

  return TypeOrmModule.forRoot({
    ...DATABASE_CONFIG
  })
}
