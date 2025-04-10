import { Body, Controller, Delete, ForbiddenException, Get, Param, Post, Req } from '@nestjs/common';
import { ArticleService } from './article.service';
import { UserRequest } from 'src/auth/dto/user-request';
import { AbilityFactory } from 'src/abilities/ability.factory';
import { CreateArticleDto } from './dto/create-article';

@Controller('article')
export class ArticleController {
    constructor(
        private readonly articleService : ArticleService,
        private abilityFactory: AbilityFactory
    ) {}

    @Get('/')
    async getAllArticles() {
        return this.articleService.getAllArticles();
    }

    @Get('/:id/commentaire')
    async getAllCommentaireArticle(@Param('id') id: string) {
        return this.articleService.getAllCommentairesByArticleId(Number(id));
    }

    @Post('')
    async addArticle(@Body() donnees: CreateArticleDto, @Req() req: UserRequest) {
        const ability = this.abilityFactory.createForUser(req.user);
        if (!ability.can('create', 'Article')) {
            throw new ForbiddenException();
        }
    
        return this.articleService.addArticle(donnees);
    }


    @Delete('/:id')
     async deleteArticle(@Param('id') id: string, @Req() req: UserRequest) {
        const ability = this.abilityFactory.createForUser(req.user);
        if (!ability.can('delete', 'Article')) {
            throw new ForbiddenException();
        }
    
        return this.articleService.deleteArticle(Number(id));
    }
}
