import { BadRequestException, PipeTransform } from '@nestjs/common';
import { Status } from '../task-status.enum';

export class TaskStatusValidationPipe implements PipeTransform {
  transform(value: Status): Status {
    if (value in Status) {
      return value;
    }

    throw new BadRequestException("Status isn't valid");
  }
}
