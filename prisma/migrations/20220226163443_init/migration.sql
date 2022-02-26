-- CreateTable
CREATE TABLE "Persoon" (
    "id" SERIAL NOT NULL,
    "naam" TEXT NOT NULL,
    "leeftijd" INTEGER NOT NULL,

    CONSTRAINT "Persoon_pkey" PRIMARY KEY ("id")
);
