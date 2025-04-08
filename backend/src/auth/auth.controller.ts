import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('inscription')
  async inscription(@Body() donneesUtilisateur: any) : Promise<{ access_token: string }> {
    return this.authService.inscription(donneesUtilisateur);
  }

  @Post('connexion')
  async connection(
    @Body() donneesUtilisateur: any) : Promise<{ access_token: string }> {
    return this.authService.connexion(donneesUtilisateur);
  }
}
