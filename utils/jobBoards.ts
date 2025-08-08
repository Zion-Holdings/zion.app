import type { BoardConfig, BoardName, FormattedJob } from './types/jobs';

export const BOARD_CONFIGS: Record<BoardName, BoardConfig> = {
  LinkedIn: {
    name: 'LinkedIn',
    slug: 'linkedin',
    requirements: {
      maxTitleLength: 80,
      maxSummaryLength: 400,
      tone: 'professional',
      acceptsMarkdown: true,
    },
  },
  Indeed: {
    name: 'Indeed',
    slug: 'indeed',
    requirements: {
      maxTitleLength: 64,
      maxSummaryLength: 350,
      tone: 'professional',
      acceptsMarkdown: false,
    },
  },
  StackOverflow: {
    name: 'StackOverflow',
    slug: 'stackoverflow',
    requirements: {
      maxTitleLength: 80,
      maxSummaryLength: 500,
      tone: 'technical',
      acceptsMarkdown: true,
    },
  },
  RemoteOK: {
    name: 'RemoteOK',
    slug: 'remoteok',
    requirements: {
      maxTitleLength: 80,
      maxSummaryLength: 400,
      tone: 'concise',
      acceptsMarkdown: true,
    },
  },
  HackerNews: {
    name: 'HackerNews',
    slug: 'hn',
    requirements: {
      maxTitleLength: 80,
      maxSummaryLength: 280,
      tone: 'community',
      acceptsMarkdown: false,
    },
  },
  AngelList: {
    name: 'AngelList',
    slug: 'angellist',
    requirements: {
      maxTitleLength: 80,
      maxSummaryLength: 400,
      tone: 'professional',
      acceptsMarkdown: true,
    },
  },
};

export function applyBoardConstraints(board: BoardName, formatted: FormattedJob): FormattedJob {
  const cfg = BOARD_CONFIGS[board]?.requirements;
  if (!cfg) return formatted;

  const title = formatted.title.slice(0, cfg.maxTitleLength || 80);
  const summary = formatted.summary.slice(0, cfg.maxSummaryLength || 400);

  let markdown = formatted.markdown;
  if (cfg.acceptsMarkdown === false) {
    markdown = markdown
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/#+\s/g, '')
      .replace(/`([^`]+)`/g, '$1');
  }

  return {
    ...formatted,
    title,
    summary,
    markdown,
  };
}