import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../../prisma/prisma.service'; // Adjust the import path as necessary
import { JwtModule } from '@nestjs/jwt';
import { AbilityFactory } from '../abilities/ability.factory';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, AbilityFactory, AuthGuard],
  exports: [AbilityFactory, JwtModule],
})
export class AuthModule {}
