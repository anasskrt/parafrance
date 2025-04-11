import { Test, TestingModule } from '@nestjs/testing';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { AbilityFactory } from '../abilities/ability.factory';
import { PrismaService } from '../../prisma/prisma.service';
import { Role } from '@prisma/client';

describe('ArticleController', () => {
  let controller: ArticleController;

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
        titre: 'Shampoing',
        description: 'Hydratant',
        prix: 10,
        stock: 20,
        image: 'test.png',
        note: null,
        approuve: true,
        marqueId: 1,
        categorieId: 1,
      },
    ]),
  };

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [ArticleController],
      providers: [
        {
          provide: ArticleService,
          useValue: mockArticleService,
        },
        {
          provide: PrismaService,
          useValue: mockPrisma,
        },
        {
          provide: AbilityFactory,
          useValue: mockAbilityFactory,
        },
      ],
    }).compile();

    controller = moduleRef.get<ArticleController>(ArticleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return articles', async () => {
    const articles = await controller.getAllArticles();
    expect(articles.length).toBe(1);
    expect(articles[0].titre).toBe('Shampoing');
    expect(mockArticleService.getAllArticles).toHaveBeenCalled();
  });
});
