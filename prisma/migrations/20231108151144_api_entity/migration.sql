-- CreateTable
CREATE TABLE "Api" (
    "api_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "group_id" INTEGER NOT NULL,

    CONSTRAINT "Api_pkey" PRIMARY KEY ("api_id")
);

-- AddForeignKey
ALTER TABLE "Api" ADD CONSTRAINT "Api_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Group"("group_id") ON DELETE RESTRICT ON UPDATE CASCADE;
