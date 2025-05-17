import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean, IsOptional, IsInt, min, Max, Min } from 'class-validator';

export class UserConnexion {
  @ApiProperty({ description: 'Email de l\'utilisateur' })
  @IsString()
  email: string;

  @ApiProperty({ description: 'Mot de passe de l\'utilisateur' })
  @IsString()
  password: string;
}
