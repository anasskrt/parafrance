import { Body, Controller, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserSansMotDePasseDto } from './dto/user-sans-mdp.dto';
import { AuthGuard } from './auth.guard';
import { UserRequest } from './dto/user-request';
import { UserConnexion } from './dto/user-connexion.dto';
import { UserInscription } from './dto/user-inscription.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('inscription')
  async inscription(@Body() donneesUtilisateur: UserInscription) : Promise<{ access_token: string }> {
    return this.authService.inscription(donneesUtilisateur);
  }

  @Post('connexion')
  async connection(
    @Body() donneesUtilisateur: UserConnexion) : Promise<{ access_token: string }> {
      console.log(donneesUtilisateur)
    return this.authService.connexion(donneesUtilisateur);
  }
}
