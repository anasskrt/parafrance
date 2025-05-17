import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module'; // Adjust the import path as necessary
import { ArticleModule } from './article/article.module';
import { AdminModule } from './admin/admin.module';
import { CommentaireModule } from './commentaire/commentaire.module';
import { UserModule } from './user/user.module';
import { MarqueModule } from './marque/marque.module';

@Module({
  imports: [AuthModule, PrismaModule, ArticleModule, AdminModule, CommentaireModule, UserModule, MarqueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
