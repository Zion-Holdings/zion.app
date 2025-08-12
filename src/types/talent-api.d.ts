declare module "@/api/talent" {
  import type { TalentProfile } from "@/types/talent";
  export function getTalentBySlug(slug: string): Promise<TalentProfile | null>;
}
