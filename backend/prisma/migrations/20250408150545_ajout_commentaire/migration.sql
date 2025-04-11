-- CreateTable
CREATE TABLE "Commantaire" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "articleId" INTEGER NOT NULL,
    "contenu" TEXT NOT NULL,
    "note" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "approuve" BOOLEAN DEFAULT false,

    CONSTRAINT "Commantaire_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Commantaire" ADD CONSTRAINT "Commantaire_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commantaire" ADD CONSTRAINT "Commantaire_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
