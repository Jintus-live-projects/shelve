/*
  Warnings:

  - A unique constraint covering the columns `[foodId,locationId]` on the table `LooseStock` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[foodId,locationId]` on the table `StoredStock` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "LooseStock_foodId_key";

-- DropIndex
DROP INDEX "LooseStock_locationId_key";

-- DropIndex
DROP INDEX "StoredStock_foodId_key";

-- DropIndex
DROP INDEX "StoredStock_locationId_key";

-- CreateIndex
CREATE UNIQUE INDEX "LooseStock_foodId_locationId_key" ON "LooseStock"("foodId", "locationId");

-- CreateIndex
CREATE UNIQUE INDEX "StoredStock_foodId_locationId_key" ON "StoredStock"("foodId", "locationId");
