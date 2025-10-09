export interface IExperience {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  stack: string[];
}

export interface IEducation {
  degree: string;
  institution: string;
  details: string;
  duration: string;
}

export interface ICertification {
  name: string;
  issuer: string;
  date?: string;
  imageUrl?: string;
}

// Add this new interface for the carousel
export interface IAchievement {
  imageUrl: string;
  caption: string;
}

export interface ISkill {
  area: string;
  skills: string[];
}

