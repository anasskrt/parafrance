import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service'; // Adjust the import path as necessary
import { UserSansMotDePasseDto } from './dto/user-sans-mdp.dto';


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Put('modification/:id')
    async modification(
      @Param('id') id: string,
      @Body() donneesUtilisateur: any
    ) : Promise<UserSansMotDePasseDto> {
      return this.userService.modification(Number(id), donneesUtilisateur);
    }
}
