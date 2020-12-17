import {
  Injectable,
  NestMiddleware,
} from '@nestjs/common'

import {
  Request,
  Response,
} from 'express'

import { logger } from '../../'
import responseTime from 'response-time'

interface FormatOptions {
  time: string
  path: string
  method: 'GET'
  | 'POST'
  | 'DELETE'
  | 'OPTIONS'
  | 'PUT'
}

type MethodOptions = 'GET'
| 'PUT'
| 'POST'
| 'DELETE'
| 'OPTIONS'

export const format = ({
  time,
  path,
  method,
}: FormatOptions): string => {
  return `A ${method} request was made to: ${path} | ${time}`
}

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

  use (req: Request, res: Response, next: Function) {
    const respTime = res.getHeader('X-Response-Time')
    const { path, method } = req
    res.app.use(responseTime())

    let time = ''

    if (respTime !== undefined) {
      time += `${res.statusMessage} (${respTime.toString()})`
    }

    logger.info(format({
      time,
      path,
      method: method as MethodOptions,
    }))

    next()
  }

}
