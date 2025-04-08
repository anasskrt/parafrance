import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from '@prisma/prisma.module'; // Adjust the import path as necessary
import { ArticleModule } from './article/article.module';

@Module({
  imports: [UserModule, AuthModule, PrismaModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
