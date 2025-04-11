import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean, IsOptional, IsInt } from 'class-validator';

export class CreateArticleDto {
  @ApiProperty({ description: 'Nom de l’article' })
  @IsString()
  titre: string;

  @ApiProperty({ description: 'Description de l’article' })
  @IsString()
  description: string;

  @ApiProperty({ description: 'Prix en euros' })
  @IsNumber()
  prix: number;

  @ApiProperty({ description: 'Quantité en stock' })
  @IsInt()
  stock: number;

  @ApiProperty({ description: 'URL de l’image de l’article' })
  @IsString()
  image: string;

  @ApiProperty({ description: 'Note moyenne', required: false })
  @IsOptional()
  @IsNumber()
  note?: number;

  @ApiProperty({ description: 'Article approuvé ?', required: false })
  @IsOptional()
  @IsBoolean()
  approuve?: boolean;

  @ApiProperty({ description: 'ID de la marque liée à l’article' })
  @IsInt()
  marqueId: number;

  @ApiProperty({ description: 'ID de la catégorie liée à l’article' })
  @IsInt()
  categorieId: number;
}
