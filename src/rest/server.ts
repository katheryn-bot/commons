import {
  Module,
  NestModule,
  RequestMethod,
  MiddlewareConsumer,
} from '@nestjs/common'
import { LoggerMiddleware } from './middleware/logger'
import { ParserMiddleware } from './middleware/parser'

import { TypeORMProvider } from './providers/typeorm'

@Module({
  exports: [ TypeORMProvider ],
  providers: [ TypeORMProvider ],
})
export class CommonModule implements NestModule {

  public configure (consumer: MiddlewareConsumer): void {
    consumer
      .apply(...[
        LoggerMiddleware,
        ParserMiddleware,
      ])
      .forRoutes({
        path: '/',
        method: RequestMethod.ALL,
      })
  }

}
