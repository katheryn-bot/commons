import {
  Injectable,
  NestMiddleware,
} from '@nestjs/common'

import {
  Request,
  Response,
} from 'express'
import bodyParser from 'body-parser'

@Injectable()
export class ParserMiddleware implements NestMiddleware {

  use (req: Request, _: Response, next: Function) {
    req.app.use(bodyParser.json())
    req.app.use(bodyParser.urlencoded())

    next()
  }

}
