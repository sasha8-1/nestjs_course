import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredintialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/[a-z]/, {
    message: 'Password must be weak. Only lower case latters are allowed',
  })
  password: string;
}
