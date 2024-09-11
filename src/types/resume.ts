import { ReactNode } from 'react';

type Period = {
  start: {
    month: string;
    year: number;
  };
  end?: {
    month: string;
    year: number;
  };
};

type BioItem = {
  svg: ReactNode;
  name: string;
};

export type Personalia = {
  phone: BioItem;
  email: BioItem;
  website?: BioItem;
  linkedin: BioItem;
  github: BioItem;
  hobbies: {
    name: string;
    svg: ReactNode;
  }[];
  languages: {
    svg: ReactNode;
    name: string;
    proficiency: string;
  }[];
};

type Credentials = {
  institution: {
    name: string;
    location: string;
  };
  degreeName: string;
  period: Period;
  additionalInfo?: string;
}[];

export type Certifications = {
  name: string;
  institution: string;
  date: string;
  additionalInfo?: string;
}[];

export type Education = {
  credentials: Credentials;
  certifications: Certifications;
};

export type Skills = {
  category: string;
  skills: string[];
}[];

export type Experience = {
  employer: string;
  jobTitle: string;
  jobDescription: string;
  highlightedProjects?: {
    client: string;
    period: Period;
    description?: string;
  }[];
  otherProjects?: string[];
  period: Period;
}[];

export type Resume = {
  top: {
    firstName: string;
    lastName: string;
  };
  personalia: Personalia;
  education: Education;
  experience: Experience;
  skills: Skills;
};
