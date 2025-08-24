export type BookChapter = {
  title: string;
  content: string;
};

export type QuoteCallout = {
  text: string;
  attribution?: string;
};

export type Visuals = {
  timelineImages: string[]; // base64 or URLs
  daoVoteCharts: string[];
  uiScreens: string[];
  quoteCallouts: QuoteCallout[];
};

export type BookMeta = {
  title: string;
  subtitle?: string;
  author: string;
  isbn?: string;
  publisher?: string;
};

export type BookProject = {
  meta: BookMeta;
  chapters: BookChapter[];
  visuals: Visuals;
};