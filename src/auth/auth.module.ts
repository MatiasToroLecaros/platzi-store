import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './services/auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule, PassportModule, LocalStrategy],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
