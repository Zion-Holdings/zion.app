export function generateRecoveryChecklistPdf(items: string[]): string {
  const content = [`Zion OS Recovery Checklist`, '', ...items.map((i, idx) => `${idx + 1}. ${i}`)].join('\n');
  const blob = new Blob([content], { type: 'application/pdf' });
  return URL.createObjectURL(blob);
}