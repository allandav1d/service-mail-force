/*
  Warnings:

  - You are about to drop the column `emailTemplateId` on the `TemplateVariation` table. All the data in the column will be lost.
  - You are about to drop the `EmailTemplate` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `templateId` to the `TemplateVariation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EmailTemplate" DROP CONSTRAINT "EmailTemplate_projectId_fkey";

-- DropForeignKey
ALTER TABLE "TemplateVariation" DROP CONSTRAINT "TemplateVariation_emailTemplateId_fkey";

-- AlterTable
ALTER TABLE "TemplateVariation" DROP COLUMN "emailTemplateId",
ADD COLUMN     "templateId" TEXT NOT NULL;

-- DropTable
DROP TABLE "EmailTemplate";

-- CreateTable
CREATE TABLE "Template" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "templateName" TEXT NOT NULL,

    CONSTRAINT "Template_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemplateVariation" ADD CONSTRAINT "TemplateVariation_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
