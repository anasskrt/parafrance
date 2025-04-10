import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean, IsOptional, IsInt, IsDate } from 'class-validator';

export class UserSansMotDePasseDto {
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
    description: 'Adresse de l\'utilisateur',
  })
  adresse: string;

    
    @IsString()
  @ApiProperty({ 
    description: 'Telephone de l\'utilisateur' 
  })
  telephone: string;

    
    @IsDate()
  @ApiProperty({
    description: 'Date d\'inscription de l\'utilisateur',
  })
  date_inscription: Date;
}
