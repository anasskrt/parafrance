import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { AuthModule } from '../auth/auth.module';
import { AbilityFactory } from 'src/abilities/ability.factory';

@Module({
  imports : [AuthModule],
  providers: [ArticleService, AbilityFactory],
  controllers: [ArticleController]
})
export class ArticleModule {}
