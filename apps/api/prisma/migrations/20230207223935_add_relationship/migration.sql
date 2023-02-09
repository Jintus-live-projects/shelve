/*
  Warnings:

  - A unique constraint covering the columns `[foodId]` on the table `LooseStock` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[locationId]` on the table `LooseStock` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[foodId]` on the table `StoredStock` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[locationId]` on the table `StoredStock` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `foodId` to the `LooseStock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationId` to the `LooseStock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foodId` to the `StoredStock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationId` to the `StoredStock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LooseStock" ADD COLUMN     "foodId" INTEGER NOT NULL,
ADD COLUMN     "locationId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "StoredStock" ADD COLUMN     "foodId" INTEGER NOT NULL,
ADD COLUMN     "locationId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "LooseStock_foodId_key" ON "LooseStock"("foodId");

-- CreateIndex
CREATE UNIQUE INDEX "LooseStock_locationId_key" ON "LooseStock"("locationId");

-- CreateIndex
CREATE UNIQUE INDEX "StoredStock_foodId_key" ON "StoredStock"("foodId");

-- CreateIndex
CREATE UNIQUE INDEX "StoredStock_locationId_key" ON "StoredStock"("locationId");

-- AddForeignKey
ALTER TABLE "LooseStock" ADD CONSTRAINT "LooseStock_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LooseStock" ADD CONSTRAINT "LooseStock_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoredStock" ADD CONSTRAINT "StoredStock_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoredStock" ADD CONSTRAINT "StoredStock_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
