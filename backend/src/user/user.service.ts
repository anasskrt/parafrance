import { Injectable } from '@nestjs/common';
import { $Enums } from '@prisma/client';
import { PrismaService } from '@prisma/prisma.service';
import { error } from 'console';
import { UserSansMotDePasseDto } from 'src/auth/dto/user-sans-mdp.dto';


@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
 
  async deleteCommentaire(userId: number, commentaireId: number): Promise<boolean> {
    try {
      const commentaire = await this.prisma.commentaire.findUnique({
        where: { id: commentaireId },
      });
  
      if (!commentaire) {
        throw new Error('Commentaire introuvable.');
      }
  
      if (commentaire.userId !== userId) {
        throw new Error('Vous ne pouvez supprimer que vos propres commentaires.');
      }
  
      await this.prisma.commentaire.delete({
        where: { id: commentaireId },
      });
  
      return true;
    } catch (error) {
      console.error(error);
      throw new Error('Erreur lors de la suppression du commentaire');
    }
  }

  async profil(id: number): Promise<UserSansMotDePasseDto> {
    const utilisateur = await this.prisma.user.findUnique({ where: { id } });
  
    if (!utilisateur) throw new Error('Utilisateur introuvable.');
  
    const { mot_de_passe, role, id: _, ...profil } = utilisateur;
    return profil;
  }
}
