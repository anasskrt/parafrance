import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRequest } from 'src/auth/dto/user-request';
import { CreateCommentaireDto } from '../commentaire/dto/create-commentaire.dto'
import { AuthGuard } from 'src/auth/auth.guard';
import { UserSansMotDePasseDto } from 'src/auth/dto/user-sans-mdp.dto';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  @UseGuards(AuthGuard)
  async profil(@Req() req: UserRequest): Promise<UserSansMotDePasseDto> {
    return this.userService.profil(req.user.sub);
  }
}
