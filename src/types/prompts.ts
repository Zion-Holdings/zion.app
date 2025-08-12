export type PromptCategory = 'talent' | 'client' | 'admin' | 'partner';

export interface Prompt {
  id: string;
  category: PromptCategory;
  text: string;
}
