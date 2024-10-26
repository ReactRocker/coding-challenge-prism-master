-- CreateTable
CREATE TABLE "Spacing" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "value" VARCHAR NOT NULL DEFAULT 'auto',
    "type" VARCHAR NOT NULL,

    CONSTRAINT "Spacing_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Spacing_name_key" ON "Spacing"("name");
