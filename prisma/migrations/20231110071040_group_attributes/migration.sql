/*
  Warnings:

  - You are about to drop the column `groupName` on the `Group` table. All the data in the column will be lost.
  - Added the required column `group_name` to the `Group` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Group" DROP COLUMN "groupName",
ADD COLUMN     "group_name" TEXT NOT NULL;
