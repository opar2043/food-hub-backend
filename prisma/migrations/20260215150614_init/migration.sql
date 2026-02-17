-- DropForeignKey
ALTER TABLE "meals" DROP CONSTRAINT "meals_providerId_fkey";

-- AlterTable
ALTER TABLE "meals" ALTER COLUMN "providerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "meals" ADD CONSTRAINT "meals_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
