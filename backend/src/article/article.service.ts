import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { CreateArticleDto } from './dto/create-article';

@Injectable()
export class ArticleService {
    constructor(private prisma : PrismaService) {}

    async getAllArticles() {
        try {
            const articles = await this.prisma.article.findMany();
            if (!articles || articles.length === 0) {
                throw new Error('Aucun article trouvé');
            }
            return articles;
        } catch (error) {
            throw new Error('Erreur lors de la récupération des articles');
        }
    }

    async getAllCommentairesByArticleId(articleId: number) {
        try {
          const article = await this.prisma.article.findUnique({
            where: { id: articleId },
            include: {
              commentaires: true,
            },
          });
      
          if (!article) {
            throw new Error('Article non trouvé');
          }
      
          if (article.commentaires.length === 0) {
            throw new Error('Aucun commentaire trouvé pour cet article');
          }
      
          return article.commentaires;
        } catch (error) {
            console.error('Erreur Prisma :', error); // 👈 Ajoute ça
          throw new Error('Erreur lors de la récupération des commentaires');
        }
      }

      async addArticle(donnees : CreateArticleDto){
        return this.prisma.article.create({
            data: {
                ...donnees,
            },
        });
    }

    async deleteArticle(id: number) : Promise<boolean> {
        try {
            await this.prisma.article.delete({
                where: { id },
            });
            return true;
        } catch (error) {
            if (error.code === 'P2025') {
                throw new Error("Aucun article trouvé avec cet ID.");
            }
            throw error;
        }
    }
      
}
