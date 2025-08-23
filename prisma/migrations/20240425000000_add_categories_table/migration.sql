-- CreateCategoryTable
CREATE TABLE "category" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "slug" TEXT NOT NULL,
  "icon" TEXT,
  "active" BOOLEAN NOT NULL DEFAULT true
);

CREATE UNIQUE INDEX "category_slug_key" ON "category"("slug");
