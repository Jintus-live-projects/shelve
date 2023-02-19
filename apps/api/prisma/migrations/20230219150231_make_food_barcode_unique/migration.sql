/*
  Warnings:

  - A unique constraint covering the columns `[barcode]` on the table `Food` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Food_barcode_key" ON "Food"("barcode");
