-- AlterTable
ALTER TABLE "User" ALTER COLUMN "emailVerified" DROP NOT NULL,
ALTER COLUMN "password" SET DATA TYPE TEXT;
