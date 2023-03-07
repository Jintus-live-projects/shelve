/*
  Warnings:

  - You are about to drop the column `barcode` on the `FoodEntity` table. All the data in the column will be lost.
  - You are about to drop the column `temperature` on the `LocationEntity` table. All the data in the column will be lost.
  - You are about to drop the `CustomBarcodeEntity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LooseStockEntity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StoredStockEntity` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `FoodEntity` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `LocationEntity` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "QuantityUnitEnum" AS ENUM ('GRAM', 'LITER', 'UNIT');

-- DropForeignKey
ALTER TABLE "CustomBarcodeEntity" DROP CONSTRAINT "CustomBarcodeEntity_looseStockId_fkey";

-- DropForeignKey
ALTER TABLE "LooseStockEntity" DROP CONSTRAINT "LooseStockEntity_foodId_fkey";

-- DropForeignKey
ALTER TABLE "LooseStockEntity" DROP CONSTRAINT "LooseStockEntity_locationId_fkey";

-- DropForeignKey
ALTER TABLE "StoredStockEntity" DROP CONSTRAINT "StoredStockEntity_foodId_fkey";

-- DropForeignKey
ALTER TABLE "StoredStockEntity" DROP CONSTRAINT "StoredStockEntity_locationId_fkey";

-- DropIndex
DROP INDEX "FoodEntity_barcode_key";

-- AlterTable
ALTER TABLE "FoodEntity" DROP COLUMN "barcode";

-- AlterTable
ALTER TABLE "LocationEntity" DROP COLUMN "temperature";

-- DropTable
DROP TABLE "CustomBarcodeEntity";

-- DropTable
DROP TABLE "LooseStockEntity";

-- DropTable
DROP TABLE "StoredStockEntity";

-- CreateTable
CREATE TABLE "FoodCategoryEntity" (
    "id" SERIAL NOT NULL,
    "translateKey" TEXT,
    "customName" TEXT,

    CONSTRAINT "FoodCategoryEntity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SealedStockEntity" (
    "id" SERIAL NOT NULL,
    "foodId" INTEGER NOT NULL,
    "locationId" INTEGER NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "unit" "QuantityUnitEnum" NOT NULL,
    "expiryDate" TIMESTAMP(3) NOT NULL,
    "purchaseDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SealedStockEntity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnitStockEntity" (
    "id" SERIAL NOT NULL,
    "foodId" INTEGER NOT NULL,
    "locationId" INTEGER NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "unit" "QuantityUnitEnum" NOT NULL,
    "expiryDate" TIMESTAMP(3) NOT NULL,
    "purchaseDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UnitStockEntity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LooseContainerEntity" (
    "id" SERIAL NOT NULL,
    "foodId" INTEGER NOT NULL,
    "locationId" INTEGER NOT NULL,
    "fullQuantity" DOUBLE PRECISION NOT NULL,
    "unit" "QuantityUnitEnum" NOT NULL,
    "currentPercentage" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "LooseContainerEntity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomBarCodeEntity" (
    "code" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "looseContainerId" INTEGER,

    CONSTRAINT "CustomBarCodeEntity_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "_FoodCategoryEntityToFoodEntity" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "FoodCategoryEntity_translateKey_key" ON "FoodCategoryEntity"("translateKey");

-- CreateIndex
CREATE UNIQUE INDEX "FoodCategoryEntity_customName_key" ON "FoodCategoryEntity"("customName");

-- CreateIndex
CREATE UNIQUE INDEX "SealedStockEntity_foodId_locationId_unit_key" ON "SealedStockEntity"("foodId", "locationId", "unit");

-- CreateIndex
CREATE UNIQUE INDEX "UnitStockEntity_foodId_locationId_unit_key" ON "UnitStockEntity"("foodId", "locationId", "unit");

-- CreateIndex
CREATE UNIQUE INDEX "LooseContainerEntity_foodId_locationId_unit_key" ON "LooseContainerEntity"("foodId", "locationId", "unit");

-- CreateIndex
CREATE UNIQUE INDEX "CustomBarCodeEntity_color_key" ON "CustomBarCodeEntity"("color");

-- CreateIndex
CREATE UNIQUE INDEX "CustomBarCodeEntity_looseContainerId_key" ON "CustomBarCodeEntity"("looseContainerId");

-- CreateIndex
CREATE UNIQUE INDEX "_FoodCategoryEntityToFoodEntity_AB_unique" ON "_FoodCategoryEntityToFoodEntity"("A", "B");

-- CreateIndex
CREATE INDEX "_FoodCategoryEntityToFoodEntity_B_index" ON "_FoodCategoryEntityToFoodEntity"("B");

-- CreateIndex
CREATE UNIQUE INDEX "FoodEntity_name_key" ON "FoodEntity"("name");

-- CreateIndex
CREATE UNIQUE INDEX "LocationEntity_name_key" ON "LocationEntity"("name");

-- AddForeignKey
ALTER TABLE "SealedStockEntity" ADD CONSTRAINT "SealedStockEntity_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "FoodEntity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SealedStockEntity" ADD CONSTRAINT "SealedStockEntity_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "LocationEntity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitStockEntity" ADD CONSTRAINT "UnitStockEntity_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "FoodEntity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitStockEntity" ADD CONSTRAINT "UnitStockEntity_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "LocationEntity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LooseContainerEntity" ADD CONSTRAINT "LooseContainerEntity_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "FoodEntity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LooseContainerEntity" ADD CONSTRAINT "LooseContainerEntity_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "LocationEntity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomBarCodeEntity" ADD CONSTRAINT "CustomBarCodeEntity_looseContainerId_fkey" FOREIGN KEY ("looseContainerId") REFERENCES "LooseContainerEntity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FoodCategoryEntityToFoodEntity" ADD CONSTRAINT "_FoodCategoryEntityToFoodEntity_A_fkey" FOREIGN KEY ("A") REFERENCES "FoodCategoryEntity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FoodCategoryEntityToFoodEntity" ADD CONSTRAINT "_FoodCategoryEntityToFoodEntity_B_fkey" FOREIGN KEY ("B") REFERENCES "FoodEntity"("id") ON DELETE CASCADE ON UPDATE CASCADE;
