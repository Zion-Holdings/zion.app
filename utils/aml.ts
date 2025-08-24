export type WatchlistMatch = {
  list: 'OFAC' | 'PEP' | 'Sanctions' | 'AdverseMedia';
  name: string;
  score: number; // 0-1 match confidence
  referenceId?: string;
  detailsUrl?: string;
};

export type AmlCheckResult = {
  status: 'clear' | 'match' | 'review' | 'unknown';
  matches: WatchlistMatch[];
  checkedAt: string; // ISO
  provider: 'mock' | 'remote';
};

export interface AmlProvider {
  checkPerson(input: { fullLegalName: string; country?: string; dob?: string }): Promise<AmlCheckResult>;
  checkBusiness(input: { businessName: string; country?: string; registrationNumber?: string }): Promise<AmlCheckResult>;
}

class MockAmlProvider implements AmlProvider {
  async checkPerson({ fullLegalName }: { fullLegalName: string }): Promise<AmlCheckResult> {
    const lowered = fullLegalName.toLowerCase();
    const isPep = lowered.includes('minister') || lowered.includes('president');
    const isOfac = lowered.includes('sanction');
    const matches: WatchlistMatch[] = [];
    if (isPep) matches.push({ list: 'PEP', name: fullLegalName, score: 0.9 });
    if (isOfac) matches.push({ list: 'OFAC', name: fullLegalName, score: 0.95 });
    return {
      status: matches.length ? 'review' : 'clear',
      matches,
      checkedAt: new Date().toISOString(),
      provider: 'mock',
    };
  }

  async checkBusiness({ businessName }: { businessName: string }): Promise<AmlCheckResult> {
    const lowered = businessName.toLowerCase();
    const isSanction = lowered.includes('banned');
    return {
      status: isSanction ? 'review' : 'clear',
      matches: isSanction ? [{ list: 'Sanctions', name: businessName, score: 0.8 }] : [],
      checkedAt: new Date().toISOString(),
      provider: 'mock',
    };
  }
}

let provider: AmlProvider = new MockAmlProvider();

export function setAmlProvider(custom: AmlProvider) {
  provider = custom;
}

export function getAmlProvider(): AmlProvider {
  return provider;
}