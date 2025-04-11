import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Permet de rendre PrismaService accessible partout sans réimporter
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // 👈 obligatoire
})
export class PrismaModule {}
