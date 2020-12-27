import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
export declare class ParserMiddleware implements NestMiddleware {
    use(req: Request, _req: Response, next: Function): void;
}
