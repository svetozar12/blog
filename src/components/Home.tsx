import type { MarkdownInstance } from "astro";
import type { FunctionalComponent } from "preact";
import Post from "./Post";
import Search from "./Search";

interface IProps {
  allPosts: MarkdownInstance<Record<string, any>>[];
}

const Home: FunctionalComponent<IProps> = ({ allPosts }) => {
  return (
    <>
      <Search />
      <main id="posts">
        {allPosts.map((post) => {
          const postDate = new Date(post.frontmatter.pubDate);
          const result = postDate.toLocaleString("en-GB", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          });

          return (
            <Post
              date={result}
              summary={post.frontmatter.description}
              tags={post.frontmatter.tags}
              title={post.frontmatter.title}
              url={post.url as string}
            />
          );
        })}
      </main>
    </>
  );
};

export default Home;
