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

export type Personalia = {
  workExperience: {
    svg: ReactNode;
    text: string;
  };
  dateOfBirth: {
    svg: ReactNode;
    day: number;
    month: string;
    year: number;
  };
  residence: {
    svg: ReactNode;
    address: string;
    zipCode: number;
    city: string;
  };
  phone: BioItem;
  email: BioItem;
  website: BioItem;
  linkedin: BioItem,
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
  top: {
    firstName: string;
    lastName: string;
    jobTitle: string;
  };
  personalia: Personalia;
  profile: string;
  education: Education;
  certifications: Certifications;
  experience: Experience;
  skills: Skills;
};
