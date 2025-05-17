import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { MarqueService } from './marque.service';
import { CreateCommentaireDto } from './dto/create-marque.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('marque')
export class MarqueController {
  constructor(private readonly marqueService: MarqueService) {}

  @UseGuards(AuthGuard)
  @Post('/')
  async addCommentaire(@Body() dto : CreateCommentaireDto) : Promise<boolean>{
  
      return this.marqueService.create(dto)
    } 
}
