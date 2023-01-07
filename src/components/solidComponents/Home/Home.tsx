import type { MarkdownInstance } from "astro";
import type { Component } from "solid-js";
import { formatDate } from "../../../utils/formatDate";
import Post from "./subcomponents/Post";
import Search from "./subcomponents/Search/Search";

interface Props {
  allPosts: MarkdownInstance<Record<string, any>>[];
}

const Home: Component<Props> = ({ allPosts }) => {
  return (
    <main>
      <Search />
      <article id="posts">
        {allPosts.map(({ frontmatter, url }) => {
          const result = formatDate(frontmatter.pubDate);

          return (
            <Post
              date={result}
              summary={frontmatter.description}
              tags={frontmatter.tags}
              title={frontmatter.title}
              url={url as string}
            />
          );
        })}
      </article>
    </main>
  );
};

export default Home;
