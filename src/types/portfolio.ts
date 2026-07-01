export type CaseStudy = {
  id: string;
  title: string;
  problem: string;
  solution: string;
  images?: CaseStudyImage[];
  howIBuiltIt: string[];
  whatIMade: string[];
  challenges: string[];
  outcome: string;
  stack: string[];
};

export type CaseStudySectionId =
  | 'problem'
  | 'solution'
  | 'howIBuiltIt'
  | 'whatIMade'
  | 'challenges'
  | 'outcome'
  | 'stack';

export type CaseStudyImage = {
  id: string;
  sectionId: CaseStudySectionId;
  imageUrl: string;
  aspectRatio?: number;
  caption?: string;
};

export type ContributedProject = {
  id: string;
  title: string;
  description: string;
  caseStudy?: CaseStudy;
  thumbnailUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  detailsSections?: ContributedProjectDetailsSection[];
  children?: ContributedProject[];
};

export type ContributedProjectDetailsSection = {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  items?: string[];
};
