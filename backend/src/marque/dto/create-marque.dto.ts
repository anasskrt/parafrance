import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCommentaireDto {
  @ApiProperty({ description: 'Nom d\'une marque' })
  @IsString()
  nom: string;
}
