import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean, IsOptional, IsInt, IsDate } from 'class-validator';

export class UserInscription {
    @IsString()
  @ApiProperty({
    description: 'Nom de l\'utilisateur',
  })
  nom: string;

    
    @IsString()
  @ApiProperty({
    description: 'Prenom de l\'utilisateur',
  })
  prenom: string;

    
    @IsString()
  @ApiProperty({
    description: 'Email de l\'utilisateur',
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: 'Mot de passe de l\'utilisateur',
  })
  mot_de_passe: string;

    
    @IsString()
  @ApiProperty({
    description: 'Adresse de l\'utilisateur',
  })
  adresse: string;

    
    @IsString()
  @ApiProperty({ 
    description: 'Telephone de l\'utilisateur' 
  })
  telephone: string;
}
