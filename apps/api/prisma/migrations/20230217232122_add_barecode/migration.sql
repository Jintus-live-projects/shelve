-- DropForeignKey
ALTER TABLE "LooseStock" DROP CONSTRAINT "LooseStock_foodId_fkey";

-- DropForeignKey
ALTER TABLE "LooseStock" DROP CONSTRAINT "LooseStock_locationId_fkey";

-- DropForeignKey
ALTER TABLE "StoredStock" DROP CONSTRAINT "StoredStock_foodId_fkey";

-- DropForeignKey
ALTER TABLE "StoredStock" DROP CONSTRAINT "StoredStock_locationId_fkey";

-- AlterTable
ALTER TABLE "Food" ADD COLUMN     "barecode" TEXT;

-- CreateTable
CREATE TABLE "CustomBarcode" (
    "id" SERIAL NOT NULL,
    "barecode" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "looseStockId" INTEGER,

    CONSTRAINT "CustomBarcode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CustomBarcode_barecode_key" ON "CustomBarcode"("barecode");

-- CreateIndex
CREATE UNIQUE INDEX "CustomBarcode_color_key" ON "CustomBarcode"("color");

-- AddForeignKey
ALTER TABLE "LooseStock" ADD CONSTRAINT "LooseStock_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LooseStock" ADD CONSTRAINT "LooseStock_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoredStock" ADD CONSTRAINT "StoredStock_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoredStock" ADD CONSTRAINT "StoredStock_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomBarcode" ADD CONSTRAINT "CustomBarcode_looseStockId_fkey" FOREIGN KEY ("looseStockId") REFERENCES "LooseStock"("id") ON DELETE SET NULL ON UPDATE CASCADE;
