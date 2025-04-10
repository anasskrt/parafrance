import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service'; // Adjust the import path as necessary

@Injectable()
export class AdminService {
    constructor(
    private prisma: PrismaService,
    ) {}

    //// Gestion Utilisateurs ////

    async getAllUsers() {
        return this.prisma.user.findMany({
            select: {
                id: true,
                email: true,
                nom: true,
                prenom: true,
                role: true,
            },
        });
    }

    async deleteUser(id: number) : Promise<boolean> {
        if(!id){
            throw new Error("L'ID de l'utilisateur ne peut pas être nul ou indéfini.");
        }

        try{
            await this.prisma.user.delete({
                where: { id },
            });

            return true;
        } catch (error) {
            if (error.code === 'P2025') {
                throw new Error("Aucun utilisateur trouvé avec cet ID.");
            }
            throw error;
        }
    }

    //// Gestion commenaire ////
    async deleteCommentaire(id: number) : Promise<boolean> {
        try {
            await this.prisma.commentaire.delete({
                where: { id },
            });
            return true;
        } catch (error) {
            if (error.code === 'P2025') {
                throw new Error("Aucun commentaire trouvé avec cet ID.");
            }
            throw error;
        }
    }
}
