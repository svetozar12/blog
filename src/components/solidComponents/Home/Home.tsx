import type { MarkdownInstance } from "astro";
import { Component, createSignal } from "solid-js";
import { formatDate } from "../../../utils/formatDate";
import Post from "./subcomponents/Post";
import Search from "./subcomponents/Search/Search";
import SortTags from "./subcomponents/SortTags/SortTags";

interface Props {
  allPosts: MarkdownInstance<Record<string, any>>[];
}

const Home: Component<Props> = ({ allPosts }) => {
  const [posts, setPosts] = createSignal<typeof allPosts>(allPosts);
  return (
    <main>
      <Search />
      <SortTags allPosts={posts()} setPosts={setPosts} />
      <article id="posts">
        {posts().map(({ frontmatter, url }) => {
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
