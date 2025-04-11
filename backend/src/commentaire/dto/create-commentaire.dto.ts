import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean, IsOptional, IsInt, min, Max, Min } from 'class-validator';

export class CreateCommentaireDto {
  @ApiProperty({ description: 'Contenue du commentaire' })
  @IsString()
  contenu: string;

  @ApiProperty({ description: 'Note du commentaire' })
  @IsNumber()
  @Min(0)
  @Max(5)
  note: number;
}
