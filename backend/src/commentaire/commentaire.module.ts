import { Module } from '@nestjs/common';
import { CommentaireService } from './commentaire.service';
import { CommentaireController } from './commentaire.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports : [AuthModule],
  controllers: [CommentaireController],
  providers: [CommentaireService],
})
export class CommentaireModule {}
