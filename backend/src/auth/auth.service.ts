import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '@prisma/prisma.service'; // Adjust the import path as necessary
import { Role } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { UserSansMotDePasseDto } from './dto/user-sans-mdp.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt : JwtService) {}

  async inscription(donnees: any) : Promise<{ access_token: string }> {
    const { mot_de_passe, ...autresChamps } = donnees;

    const motDePasseHache = await bcrypt.hash(mot_de_passe, 10);

    try {
      const nouvelUtilisateur = await this.prisma.user.create({
        data: {
          ...autresChamps,
          mot_de_passe: motDePasseHache,
          role: Role.CLIENT,
        },
      });

      const payload = {
        sub: nouvelUtilisateur.id,
        email: nouvelUtilisateur.email,
      };

      const token = this.jwt.sign(payload);
      
      return {
        access_token: token,
      };

    }
    catch (error) {
      if (error.code === 'P2002') {
        throw new UnauthorizedException('Email déjà utilisé');
      }
      throw error;
    }
  }

  async connexion(donnees: any) : Promise<{ access_token: string }> {
    const { email, mot_de_passe } = donnees;
  
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
  
    if (!user) {
      throw new UnauthorizedException('Identifiants invalides');
    }
  
    const passwordMatches = await bcrypt.compare(mot_de_passe, user.mot_de_passe);
    if (!passwordMatches) {
      throw new UnauthorizedException('Identifiants invalides');
    }
  
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };
  
    const token = this.jwt.sign(payload);
  
    return {
      access_token: token,
    };
  }
  
}
