import { Module } from '@nestjs/common';
import { MarqueService } from './marque.service';
import { MarqueController } from './marque.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports : [AuthModule],
  controllers: [MarqueController],
  providers: [MarqueService],
})
export class MarqueModule {}
