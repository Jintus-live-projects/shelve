/*
  Warnings:

  - You are about to drop the `CustomBarcode` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Food` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LooseStock` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StoredStock` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CustomBarcode" DROP CONSTRAINT "CustomBarcode_looseStockId_fkey";

-- DropForeignKey
ALTER TABLE "LooseStock" DROP CONSTRAINT "LooseStock_foodId_fkey";

-- DropForeignKey
ALTER TABLE "LooseStock" DROP CONSTRAINT "LooseStock_locationId_fkey";

-- DropForeignKey
ALTER TABLE "StoredStock" DROP CONSTRAINT "StoredStock_foodId_fkey";

-- DropForeignKey
ALTER TABLE "StoredStock" DROP CONSTRAINT "StoredStock_locationId_fkey";

-- DropTable
DROP TABLE "CustomBarcode";

-- DropTable
DROP TABLE "Food";

-- DropTable
DROP TABLE "Location";

-- DropTable
DROP TABLE "LooseStock";

-- DropTable
DROP TABLE "StoredStock";

-- CreateTable
CREATE TABLE "FoodEntity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "barcode" TEXT,

    CONSTRAINT "FoodEntity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LocationEntity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "temperature" DOUBLE PRECISION,

    CONSTRAINT "LocationEntity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LooseStockEntity" (
    "id" SERIAL NOT NULL,
    "foodId" INTEGER NOT NULL,
    "locationId" INTEGER NOT NULL,
    "filledQuantity" DOUBLE PRECISION NOT NULL,
    "fillingPourcentage" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "LooseStockEntity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoredStockEntity" (
    "id" SERIAL NOT NULL,
    "foodId" INTEGER NOT NULL,
    "locationId" INTEGER NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "bestBeforeDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StoredStockEntity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomBarcodeEntity" (
    "id" SERIAL NOT NULL,
    "barcode" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "looseStockId" INTEGER,

    CONSTRAINT "CustomBarcodeEntity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FoodEntity_barcode_key" ON "FoodEntity"("barcode");

-- CreateIndex
CREATE UNIQUE INDEX "LooseStockEntity_foodId_locationId_key" ON "LooseStockEntity"("foodId", "locationId");

-- CreateIndex
CREATE UNIQUE INDEX "StoredStockEntity_foodId_locationId_key" ON "StoredStockEntity"("foodId", "locationId");

-- CreateIndex
CREATE UNIQUE INDEX "CustomBarcodeEntity_barcode_key" ON "CustomBarcodeEntity"("barcode");

-- CreateIndex
CREATE UNIQUE INDEX "CustomBarcodeEntity_color_key" ON "CustomBarcodeEntity"("color");

-- AddForeignKey
ALTER TABLE "LooseStockEntity" ADD CONSTRAINT "LooseStockEntity_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "FoodEntity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LooseStockEntity" ADD CONSTRAINT "LooseStockEntity_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "LocationEntity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoredStockEntity" ADD CONSTRAINT "StoredStockEntity_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "FoodEntity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoredStockEntity" ADD CONSTRAINT "StoredStockEntity_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "LocationEntity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomBarcodeEntity" ADD CONSTRAINT "CustomBarcodeEntity_looseStockId_fkey" FOREIGN KEY ("looseStockId") REFERENCES "LooseStockEntity"("id") ON DELETE SET NULL ON UPDATE CASCADE;
