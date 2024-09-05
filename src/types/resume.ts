type Period = {
  start: {
    month: string
    year: string
  }
  end?: {
    month: string
    year: string
  }
}

type BioItem = {
  emoji: string
  name: string
}

export type Bio = {
  firstName: string
  lastName: string
  jobTitle: string
  phone: BioItem
  email: BioItem
  website: BioItem
  hobbies: {
    name: string
    emoji: string
  }[]
}

export type Education = {
  institution: {
    name: string
    location: string
  }
  degree: {
    name: string
    department: string
  }
  period: Period
}[]

export type Skills = {
  category: string
  skills: string[]
}[]

export type Experience = {
  employer: string
  period: Period
}[]

export type Resume = {
  bio: Bio
  education: Education
  experience: Experience
  skills: Skills
}
