export interface PostBase {
  title: string;
  date: string;
  slug: string;
  image: string;
  location: string;
  author: string;
  lang: string;
}

export interface PostMetadata extends PostBase {
  subtitle: string;
}

export interface PostData extends PostBase {
  content: string;
}
