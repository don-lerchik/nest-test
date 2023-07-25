import { IsJWT, IsString, Length, Matches, MinLength } from 'class-validator';
import { PASSWORD_REGEX } from '../../common/consts/regex';

export abstract class PasswordsDto {
  @IsString()
  @Length(8, 35)
  @Matches(PASSWORD_REGEX, {
    message:
      'Password requires a lowercase letter, an uppercase letter, and a number or symbol',
  })
  public password1!: string;

  @IsString()
  @MinLength(1)
  public password2!: string;
}

export abstract class ResetPasswordDto extends PasswordsDto {
  @IsString()
  @IsJWT()
  public resetToken!: string;
}

export abstract class ChangePasswordDto extends PasswordsDto {
  @IsString()
  @MinLength(1)
  public password!: string;
}
