export interface Post {
  content?: string;
  path?: string;
  href?: string;
  frontMatter?: { [key: string]: string };
}
