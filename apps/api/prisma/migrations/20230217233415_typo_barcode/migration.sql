/*
  Warnings:

  - You are about to drop the column `barecode` on the `CustomBarcode` table. All the data in the column will be lost.
  - You are about to drop the column `barecode` on the `Food` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[barcode]` on the table `CustomBarcode` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `barcode` to the `CustomBarcode` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "CustomBarcode_barecode_key";

-- AlterTable
ALTER TABLE "CustomBarcode" DROP COLUMN "barecode",
ADD COLUMN     "barcode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Food" DROP COLUMN "barecode",
ADD COLUMN     "barcode" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "CustomBarcode_barcode_key" ON "CustomBarcode"("barcode");
