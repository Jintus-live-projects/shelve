/*
  Warnings:

  - You are about to drop the column `fillingPoucentage` on the `LooseStock` table. All the data in the column will be lost.
  - Added the required column `fillingPourcentage` to the `LooseStock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LooseStock" DROP COLUMN "fillingPoucentage",
ADD COLUMN     "fillingPourcentage" DOUBLE PRECISION NOT NULL;
