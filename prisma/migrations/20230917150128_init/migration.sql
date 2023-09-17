/*
  Warnings:

  - Added the required column `riskProfile` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "riskProfile" TEXT NOT NULL,
    "income" TEXT NOT NULL
);
INSERT INTO "new_User" ("id", "income") SELECT "id", "income" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
