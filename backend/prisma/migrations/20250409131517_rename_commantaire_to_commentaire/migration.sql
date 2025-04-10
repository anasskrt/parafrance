/*
  Warnings:

  - You are about to drop the `Commantaire` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Commantaire" DROP CONSTRAINT "Commantaire_articleId_fkey";

-- DropForeignKey
ALTER TABLE "Commantaire" DROP CONSTRAINT "Commantaire_userId_fkey";

-- DropTable
DROP TABLE "Commantaire";

-- CreateTable
CREATE TABLE "Commentaire" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "articleId" INTEGER NOT NULL,
    "contenu" TEXT NOT NULL,
    "note" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "approuve" BOOLEAN DEFAULT false,

    CONSTRAINT "Commentaire_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Commentaire" ADD CONSTRAINT "Commentaire_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commentaire" ADD CONSTRAINT "Commentaire_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
