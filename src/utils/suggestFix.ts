import { callZionGPT } from './zion-gpt';
import {logErrorToProduction} from '@/utils/productionLogger';

/**
 * Attempt to generate a short fix or fallback suggestion using ZionGPT.
 * If the AI call fails, return a generic recovery message.
 */
export async function suggestFix(error: Error): Promise<string> {
  try {
    const prompt = `Provide a concise suggestion to resolve or work around this error: ${error.message}`;
    return await callZionGPT({ prompt, purpose: 'support' });
  } catch (e) {
    logErrorToProduction(e instanceof Error ? e.message : String(e), e instanceof Error ? e : undefined, { context: 'suggestFix' });
    return 'Something went wrong while generating a fix suggestion. Please try again later.';
  }
}
