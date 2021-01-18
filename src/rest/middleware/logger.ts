import {
  Injectable,
  NestMiddleware,
} from '@nestjs/common'

import {
  Request,
  Response,
} from 'express'

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
    const { path, method, app } = req
    app.use(responseTime())
    let time = ''

    const respTime = res.getHeader('X-Response-Time')

    if (respTime !== undefined) {
      time += `${res.statusMessage} - [${res.statusCode}] (${respTime.toString()})`
    } else {
      time += `${res.statusMessage} (${res.statusCode})`
    }

    console.log(format({
      time,
      path,
      method: method as MethodOptions,
    }))

    next()
  }

}
