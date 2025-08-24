export interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  href?: string;
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

export interface Stat {
  number: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export interface FormErrors {
  [key: string]: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

export interface UpdateItem {
  title: string;
  href: string;
  description: string;
  date: string;
}

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}