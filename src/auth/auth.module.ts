import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { MailerModule } from '../mailer/mailer.module';
import { JwtModule } from '../jwt/jwt.module';

@Module({
  imports: [UsersModule, JwtModule, MailerModule],
  providers: [AuthService],
})
export class AuthModule {}
