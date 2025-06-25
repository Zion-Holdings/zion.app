import { TalentProfile } from "@/types/talent";

// Simple talent generation for IT and AI professionals
export function generateAITalents(count: number, startId: number = 1): TalentProfile[] {
  const talents: TalentProfile[] = [];
  
  const titles = ["Senior AI Engineer", "Full-Stack Developer", "Data Scientist", "DevOps Engineer", "Cybersecurity Specialist"];
  const skills = [
    ["Python", "TensorFlow", "Machine Learning", "AI"],
    ["React", "Node.js", "JavaScript", "TypeScript"],
    ["Python", "R", "Statistics", "SQL"],
    ["Docker", "Kubernetes", "AWS", "CI/CD"],
    ["Security", "Penetration Testing", "Risk Management"]
  ];
  const locations = ["San Francisco, CA", "New York, NY", "Remote", "Seattle, WA", "Austin, TX"];
  const companies = ["Tech startup", "Fortune 500", "AI company", "Consulting firm"];
  
  for (let i = 0; i < count; i++) {
    const titleIndex = Math.floor(Math.random() * titles.length);
    const experience = 3 + Math.floor(Math.random() * 10);
    const hourlyRate = 80 + Math.floor(Math.random() * 140);
    const rating = 3.5 + Math.random() * 1.5;
    
    const talent: TalentProfile = {
      id: `ai-talent-${startId + i}`,
      user_id: `user-${startId + i}`,
      full_name: `Professional ${startId + i}`,
      professional_title: titles[titleIndex] || 'IT Professional',
      bio: `Experienced ${(titles[titleIndex] || 'professional').toLowerCase()} with ${experience} years in the industry.`,
      location: locations[Math.floor(Math.random() * locations.length)] || 'Remote',
      skills: skills[titleIndex] || ['IT', 'Technology'],
      hourly_rate: hourlyRate,
      years_experience: experience,
      availability_type: Math.random() > 0.5 ? "full_time" : "part_time",
      average_rating: Math.round(rating * 10) / 10,
      rating_count: Math.floor(Math.random() * 50) + 1,
      is_verified: Math.random() > 0.3,
    };
    
    talents.push(talent);
  }
  
  return talents;
}

export function getTalentMarketStats(talents: TalentProfile[]) {
  const hourlyRates = talents.map(t => t.hourly_rate).filter(Boolean) as number[];
  const ratings = talents.map(t => t.average_rating).filter(Boolean) as number[];
  const experiences = talents.map(t => t.years_experience).filter(Boolean) as number[];
  
  return {
    averageHourlyRate: hourlyRates.reduce((sum, rate) => sum + rate, 0) / hourlyRates.length,
    averageMonthlySalary: hourlyRates.reduce((sum, rate) => sum + rate * 160, 0) / hourlyRates.length,
    averageRating: ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length,
    averageExperience: experiences.reduce((sum, exp) => sum + exp, 0) / experiences.length,
    totalTalents: talents.length,
  };
}

export function getRecommendedTalents(talents: TalentProfile[]): TalentProfile[] {
  return talents.filter(t => (t.average_rating || 0) >= 4.5);
}
