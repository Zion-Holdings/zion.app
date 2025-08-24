-- AlterTable
ALTER TABLE "ErrorAnalysisSuggestion" ADD COLUMN     "codex_explanation" TEXT,
ADD COLUMN     "codex_suggested_fix_code" TEXT,
ADD COLUMN     "codex_impact_assessment" TEXT;
