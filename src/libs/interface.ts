export interface Iproject {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
  imgUrl?: string;
  gitUrl?: string;
  previewUrl?: string;
  techStack?: Array<{ id: string; src: string; alt: string }>;
}

export interface TypeAnimationProps {
  sequence: Array<string | number>;
  wrapper?: string;
  repeat?: number;
  cursor?: boolean;
  className?: string;
}

export interface Ireveal {
  children?: JSX.Element;
  className?: string;
}
