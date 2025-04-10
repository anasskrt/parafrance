import { Body, Controller, Delete, ForbiddenException, Get, Post, Param, Req, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AuthGuard } from '../auth/auth.guard';
import { AbilityFactory } from 'src/abilities/ability.factory';
import { UserRequest } from 'src/auth/dto/user-request';

@UseGuards(AuthGuard)
@Controller('admin')
export class AdminController {
    constructor(
        private  readonly adminService: AdminService,
        private abilityFactory: AbilityFactory
        ) {}
    
    @Get('users')
    async getAllUsers(@Req() req: UserRequest) {
        const ability = this.abilityFactory.createForUser(req.user);
        if (!ability.can('read', 'User')) {
            throw new ForbiddenException();
        }

        return this.adminService.getAllUsers();
    }

    @Delete('user/:id')
    async deleteUser(@Param('id') id: string, @Req() req: UserRequest) {
        const ability = this.abilityFactory.createForUser(req.user);
        if (!ability.can('delete', 'User')) {
            throw new ForbiddenException();
        }

        return this.adminService.deleteUser(Number(id));
    }

    //// Gestion des commentaires //// 
    @Get('commentaire/:id')
    async getAllCommentaireArticle(@Param('id') id: string) {
        return this.adminService.deleteCommentaire(Number(id));
    }
}
