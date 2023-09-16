-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "income" INTEGER,
    "riskProfile" TEXT,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("createdAt", "id", "income", "riskProfile") SELECT "createdAt", "id", "income", "riskProfile" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
