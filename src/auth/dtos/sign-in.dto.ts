import { IsString, Length, Matches, MinLength} from 'class-validator';
import { PasswordsDto } from './passwords.dto';
import { NAME_REGEX } from '../../common/consts/regex';

export abstract class SignInDto extends PasswordsDto {
  @IsString()
  @Length(3, 100, {
    message: 'Name has to be between 3 and 50 characters.',
  })
  @Matches(NAME_REGEX, {
    message: 'Name can only contain letters, dtos, numbers and spaces.',
  })
  public emailOrUsername: string;

  @IsString()
  @MinLength(1)
  public password: string;
}
