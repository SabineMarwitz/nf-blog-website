export interface BlogEntry {
  id?: string;
  title: string;
  image: string;
  author: string;
  createdAt: number;
  teaser: string;
  content: string;
  slug?: string;
}

export type BlogEntries = BlogEntry[];
