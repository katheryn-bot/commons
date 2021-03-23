import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class BodyParser<T> implements PipeTransform {
    transform(value: any, _metadata: ArgumentMetadata): T;
}
