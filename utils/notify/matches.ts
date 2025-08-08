type TalentNotification = {
  talentSlug: string;
  jobSummary: {
    id: string;
    title: string;
    description: string;
    ctaUrl: string;
  };
};

export async function notifyMatchedTalent(input: TalentNotification) {
  // TODO: integrate with email provider or in-app notifications
  console.log('[NotifyTalent]', JSON.stringify(input));
}