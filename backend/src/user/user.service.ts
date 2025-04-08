import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '@prisma/prisma.service';
import { UserSansMotDePasseDto } from './dto/user-sans-mdp.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async modification(id: number, donnees: any): Promise<UserSansMotDePasseDto> {
    if (!id) {
      throw new Error('ID requis pour la modification.');
    }
  
    // Champs autorisés uniquement
    const champsAutorises = ['nom', 'prenom', 'adresse', 'telephone'];
    const donneesFiltrees: any = {};
  
    for (const champ of champsAutorises) {
      if (donnees[champ] !== undefined) {
        donneesFiltrees[champ] = donnees[champ];
      }
    }
  
    const utilisateurModifie = await this.prisma.user.update({
      where: { id: Number(id) },
        data: donneesFiltrees,
    });
  
    const { mot_de_passe: _, ...utilisateurSansMdp } = utilisateurModifie;
    return utilisateurSansMdp;
  }
}
