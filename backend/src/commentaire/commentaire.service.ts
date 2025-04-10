import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { error } from 'console';

@Injectable()
export class CommentaireService {

  constructor(
    private readonly prisma: PrismaService
  ){}


  async addCommenaitre(userId : number, articleId : number, donnee : any) : Promise<boolean> {
    try {
      await this.prisma.commentaire.create({
        data: {
          userId : userId,
          articleId : articleId,
          ...donnee,
        },
      }); 

      return true;
    } catch {
      return new error('Erreur lors de la création du commentaire')
    }
  }
}
