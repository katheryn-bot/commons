import {
  Module,
  NestModule,
  RequestMethod,
  MiddlewareConsumer,
} from '@nestjs/common'

import { LoggerMiddleware } from './middleware/logger'
import { DatabaseModule } from './modules/database.module'

@Module({
  imports: [
    DatabaseModule
  ]
})
export class CommonModule implements NestModule {

  public configure (consumer: MiddlewareConsumer): void {
    consumer
      .apply(...[ LoggerMiddleware ])
      .forRoutes({
        path: '/',
        method: RequestMethod.ALL,
      })
  }

}
