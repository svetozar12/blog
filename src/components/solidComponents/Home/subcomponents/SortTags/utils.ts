import type { MarkdownInstance } from "astro";

export const getTags = (allPosts: MarkdownInstance<Record<string, any>>[]) => {
  let tags: Record<string, any> = {};
  allPosts.forEach(({ frontmatter }) => {
    frontmatter.tags.forEach((tag: string) => {
      if (tags[tag] > 0) return (tags[tag] += 1);
      else tags[tag] = 1;
    });
  });
  return tags;
};
