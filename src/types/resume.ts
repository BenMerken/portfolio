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

export type Resume = {
  bio: {
    jobTitle: string;
    hobbies: {
      name: string;
      emoji: string;
    }[];
  };
  education: {
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
  experience: {
    employer: string;
    period: Period;
  }[];
  skills: {}[];
};
