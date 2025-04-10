import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports : [AuthModule],
  providers: [ArticleService],
  controllers: [ArticleController]
})
export class ArticleModule {}
