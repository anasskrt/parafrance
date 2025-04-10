-- DropForeignKey
ALTER TABLE "Commentaire" DROP CONSTRAINT "Commentaire_articleId_fkey";

-- DropForeignKey
ALTER TABLE "Commentaire" DROP CONSTRAINT "Commentaire_userId_fkey";

-- AddForeignKey
ALTER TABLE "Commentaire" ADD CONSTRAINT "Commentaire_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commentaire" ADD CONSTRAINT "Commentaire_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE CASCADE ON UPDATE CASCADE;
