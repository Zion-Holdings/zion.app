
export interface ResumeBasicInfo {
  id?: string;
  title: string;
  headline?: string;
  summary?: string;
}

export interface WorkExperience {
  id?: string;
  company_name: string;
  role_title: string;
  start_date: Date | string;
  end_date?: Date | string;
  is_current: boolean;
  description?: string;
  company_logo_url?: string;
  location?: string;
}

export interface Education {
  id?: string;
  institution: string;
  degree: string;
  field_of_study?: string;
  start_date: Date | string;
  end_date?: Date | string;
  is_current: boolean;
  description?: string;
  institution_logo_url?: string;
  location?: string;
}

export interface Skill {
  id?: string;
  name: string;
  proficiency?: number;
  category?: string;
  years_experience?: number;
}

export interface Certification {
  id?: string;
  name: string;
  issuing_organization: string;
  issue_date?: Date | string;
  expiration_date?: Date | string;
  credential_id?: string;
  credential_url?: string;
}

export interface PortfolioProject {
  id?: string;
  title: string;
  description?: string;
  technologies?: string[];
  image_url?: string;
  github_url?: string;
  demo_url?: string;
  pdf_url?: string;
}

export interface Resume {
  id?: string;
  user_id?: string;
  basic_info: ResumeBasicInfo;
  work_experience: WorkExperience[];
  education: Education[];
  skills: Skill[];
  certifications: Certification[];
  portfolio_projects?: PortfolioProject[];
  is_active: boolean;
}
