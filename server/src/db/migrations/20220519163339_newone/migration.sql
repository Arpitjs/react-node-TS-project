/*
  Warnings:

  - A unique constraint covering the columns `[authorId]` on the table `Task` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_authorId_fkey";

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "authorId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Task_authorId_key" ON "Task"("authorId");

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
