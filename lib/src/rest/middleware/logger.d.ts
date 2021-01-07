import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
interface FormatOptions {
    time: string;
    path: string;
    method: 'GET' | 'POST' | 'DELETE' | 'OPTIONS' | 'PUT';
}
export declare const format: ({ time, path, method, }: FormatOptions) => string;
export declare class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function): void;
}
export {};
