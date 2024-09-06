import { ReactNode } from 'react';

type Period = {
  start: {
    month: string;
    year: string;
  };
  end?: {
    month: string;
    year: string;
  };
};

type BioItem = {
  svg: ReactNode;
  name: string;
};

export type Bio = {
  firstName: string;
  lastName: string;
  jobTitle: string;
  phone: BioItem;
  email: BioItem;
  website: BioItem;
  hobbies: {
    name: string;
    svg: ReactNode;
  }[];
};

export type Education = {
  institution: {
    name: string;
    location: string;
  };
  degree: {
    name: string;
    department: string;
  };
  period: Period;
}[];

export type Certifications = {
  name: string;
  institution: string;
  date: string;
}[];

export type Skills = {
  category: string;
  skills: string[];
}[];

export type Experience = {
  employer: string;
  period: Period;
}[];

export type Resume = {
  bio: Bio;
  education: Education;
  certifications: Certifications;
  experience: Experience;
  skills: Skills;
};
