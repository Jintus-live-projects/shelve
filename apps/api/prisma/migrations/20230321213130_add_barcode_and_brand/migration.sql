/*
  Warnings:

  - Added the required column `barCode` to the `SealedStockEntity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brand` to the `SealedStockEntity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SealedStockEntity" ADD COLUMN     "barCode" TEXT NOT NULL,
ADD COLUMN     "brand" TEXT NOT NULL;
