import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { CommentaireService } from './commentaire.service';
import { CreateCommentaireDto } from './dto/create-commentaire.dto';
import { UpdateCommentaireDto } from './dto/update-commentaire.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { UserRequest } from 'src/auth/dto/user-request';

@Controller('commentaire')
export class CommentaireController {
  constructor(private readonly commentaireService: CommentaireService) {}

    @UseGuards(AuthGuard)
    @Post('/article/:id')
    async addCommentaire(@Req() req: UserRequest, 
                          @Param('articleId') articleId: string, 
                            @Body() createCommentaireDto : CreateCommentaireDto) : Promise<boolean>{
  
      return this.commentaireService.addCommenaitre(req.user.sub, Number(articleId), createCommentaireDto)
    } 

}
