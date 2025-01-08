export interface Technology {
  name: string;
  imgUrl: string;
}

export interface Project {
  id: string;
  index: number;
  title: string;
  description: string;
  technologies: Technology[];
  image: string;
  customClass: string;
  githubUrl: string;
  liveTestUrl: string;
}
