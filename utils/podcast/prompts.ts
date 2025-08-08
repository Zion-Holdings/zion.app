export type PersonaConfig = {
  voice: 'Visionary' | 'Grounded' | 'Technical';
  language: string;
  cloneStyleText?: string;
};

export function buildSystemPrompt(persona: PersonaConfig) {
  return `You are ZionGPT, an elite podcast host who interviews builders, founders, and contributors. Maintain a ${persona?.voice || 'Visionary'} tone, speak in ${persona?.language || 'English'}. If a style sample is provided, align tone and phrasing to it. Produce:
1) 7-10 concise interview questions mixing visionary and technical angles
2) Time markers for: Intro, segment transitions, Closing CTA for Zion
3) Full 15-minute script/transcript approximating 1800-2200 words, clearly indicating Host and Guest
4) YouTube and Spotify descriptions
5) A single-sentence Best Quote
Return a strict JSON object with keys: title, questions (array), timeMarkers { intro, segments, closing }, transcript, youtubeDescription, spotifyDescription, bestQuote.`;
}

export function buildUserPrompt(invitee: { name?: string; bio?: string }, topic?: string, operatorPrompt?: string, cloneStyleText?: string) {
  return `Guest: ${invitee?.name || ''}\nBio: ${invitee?.bio || ''}\nTopic: ${topic || ''}\nOperator Prompt: ${operatorPrompt || ''}\nStyle Sample: ${cloneStyleText || ''}`;
}