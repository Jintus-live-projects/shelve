-- CreateTable
CREATE TABLE "Food" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LooseStock" (
    "id" SERIAL NOT NULL,
    "filledQuantity" DOUBLE PRECISION NOT NULL,
    "fillingPoucentage" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "LooseStock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StoredStock" (
    "id" SERIAL NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "bestBeforeDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StoredStock_pkey" PRIMARY KEY ("id")
);
