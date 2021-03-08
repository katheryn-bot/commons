import {
  Module,
  NestModule,
  RequestMethod,
  MiddlewareConsumer,
} from '@nestjs/common'
import { LoggerMiddleware } from './middleware/logger'

import { TypeORMProvider } from './providers/typeorm'

@Module({
  exports: [ TypeORMProvider ],
  providers: [ TypeORMProvider ],
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
