import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { Status } from '../task-status.enum';

export class GetTaskFilterDto {
  @IsOptional()
  @IsIn(Object.keys(Status))
  status?: string;

  @IsOptional()
  @IsNotEmpty()
  search?: string;
}
