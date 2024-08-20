-- CreateTable
CREATE TABLE "Preferences" (
    "id" SERIAL NOT NULL,
    "irrigationStarts" TEXT NOT NULL,
    "irrigationTime" INTEGER NOT NULL,

    CONSTRAINT "Preferences_pkey" PRIMARY KEY ("id")
);
