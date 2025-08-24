export type BaseEntity = {
  id: string;
  created_at?: string;
  updated_at?: string;
  status?: 'draft' | 'active' | 'archived' | 'suspended' | 'closed';
  verified?: boolean;
};

export type UserEntity = BaseEntity & {
  name: string;
  email: string;
  role: 'user' | 'talent' | 'client' | 'admin' | 'moderator';
};

export type CvEntity = BaseEntity & {
  user_id: string;
  title: string;
  skills: string[];
  experience_years?: number;
};

export type ProjectEntity = BaseEntity & {
  title: string;
  client?: string;
  budget_usd?: number;
  owner_user_id?: string;
};

export type ServiceEntity = BaseEntity & {
  title: string;
  category?: string;
  price_usd?: number;
  owner_user_id?: string;
};

export type JobPostEntity = BaseEntity & {
  title: string;
  company?: string;
  location?: string;
  employment_type?: 'full-time' | 'contract' | 'freelance' | 'part-time';
};

export type EquipmentEntity = BaseEntity & {
  name: string;
  category?: string;
  daily_rate_usd?: number;
  owner_user_id?: string;
};

export type AdminEntity =
  | ({ __type: 'users' } & UserEntity)
  | ({ __type: 'cvs' } & CvEntity)
  | ({ __type: 'projects' } & ProjectEntity)
  | ({ __type: 'services' } & ServiceEntity)
  | ({ __type: 'job_posts' } & JobPostEntity)
  | ({ __type: 'equipment' } & EquipmentEntity);

export type AdminType = 'users' | 'cvs' | 'projects' | 'services' | 'job_posts' | 'equipment';

export const ADMIN_TYPES: AdminType[] = ['users', 'cvs', 'projects', 'services', 'job_posts', 'equipment'];

export type ListParams = {
  search?: string;
  sort?: string;
  order?: 'asc' | 'desc';
  page?: number;
  pageSize?: number;
  filters?: Record<string, string | number | boolean | undefined>;
};

export type ListResult<T> = { items: T[]; total: number };