import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { CreateCommentaireDto } from './dto/create-marque.dto';

@Injectable()
export class MarqueService {
    constructor(
        private readonly prisma : PrismaService
    ){}

    async create(dto : CreateCommentaireDto){
        try {
            await this.prisma.marque.create({
                data : {
                    nom : dto.nom
                }
            })
            return true;
        } catch {
            throw new Error("Erreur lors de l'ajout d'une marque")
        }
    }

    async getAll(){
        try {
            return this.prisma.marque.findMany()
        } catch {
            throw new Error("Erreur lors de la récuperation des marques")
        }
    }
}
