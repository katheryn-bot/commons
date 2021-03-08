import {
  Injectable,
  PipeTransform,
  ArgumentMetadata,
  // BadRequestException,
} from '@nestjs/common'

@Injectable()
export class BodyParser<T> implements PipeTransform {
  transform (value: any, _metadata: ArgumentMetadata) {
    return value as T
  }
}
