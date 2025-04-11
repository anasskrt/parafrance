import { Test, TestingModule } from '@nestjs/testing';
import { CommentaireController } from './commentaire.controller';
import { CommentaireService } from './commentaire.service';
import { PrismaService } from '../../prisma/prisma.service';
import { AuthModule } from '../auth/auth.module';

describe('CommentaireController', () => {
  let controller: CommentaireController;

  const mockPrisma = {};
  const mockAbilityFactory = {
    createForUser: jest.fn().mockReturnValue({
      can: () => true,
    }),
  };
  const mockArticleService = {
    getAllArticles: jest.fn().mockResolvedValue([
      {
        id: 1,
        userId: 1,
        articleId: 1,
        contenu: 'très bien',
        date: '2024-',
        image: 'test.png',
        note: null,
        approuve: true,
        marqueId: 1,
        categorieId: 1,
      },
    ]),
  };
 
});
