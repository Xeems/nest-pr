/*
  Warnings:

  - You are about to drop the column `name` on the `Api` table. All the data in the column will be lost.
  - Added the required column `api_name` to the `Api` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Api" DROP COLUMN "name",
ADD COLUMN     "api_name" TEXT NOT NULL;
