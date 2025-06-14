-- CreateCategoryTable
CREATE TABLE "Category" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "slug" TEXT NOT NULL,
  "icon" TEXT,
  "active" BOOLEAN NOT NULL DEFAULT true
);

CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");
