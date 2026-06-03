import type { ImageMetadata } from 'astro';

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  tagline: string;
  socials: SocialLink[];
}

export interface Experience {
  role: string;
  org: string;
  location: string;
  logo: ImageMetadata;
  logoAlt: string;
  dateRange: string;
  paragraphs: string[];
  stack?: string;
}

export interface Education {
  degree: string;
  school: string;
  field: string;
  dateRange: string;
  note?: string;
  thesis?: { title: string; href: string };
}

export interface SkillIcon {
  name: string;
  icon: string;
}

export interface SkillGroup {
  title: string;
  icon?: string;
  items: string[];
}

export interface Project {
  name: string;
  tagline: string;
  image: ImageMetadata;
  paragraphs: ProjectParagraph[];
}

export type ProjectParagraph =
  | string
  | { text: string; links: { text: string; href: string }[] };

export interface PublicationLink {
  doi: string;
  href: string;
}

export interface Publication {
  authors: string;
  year: number;
  title: string;
  venue: string;
  details?: string;
  link?: PublicationLink;
  note?: string;
}

export interface Award {
  text: string;
}
