import { ApiProperty } from '@nestjs/swagger';

export class UserSansMotDePasseDto {
  @ApiProperty({
    description: 'Id de l\'utilisateur',
  })
  id: number;

  @ApiProperty({
    description: 'Nom de l\'utilisateur',
  })
  nom: string;

  @ApiProperty({
    description: 'Prenom de l\'utilisateur',
  })
  prenom: string;

  @ApiProperty({
    description: 'Email de l\'utilisateur',
  })
  email: string;

  @ApiProperty({
    description: 'Adresse de l\'utilisateur',
  })
  adresse: string;

  @ApiProperty({ 
    description: 'Telephone de l\'utilisateur' 
})
  telephone: string;

  @ApiProperty({
    description: 'Date d\'inscription de l\'utilisateur',
  })
  date_inscription: Date;

  @ApiProperty({
    description: 'Role de l\'utilisateur',
  })
  role: string;
}
