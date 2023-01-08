import type { MarkdownInstance } from "astro";
import { Component, createEffect, createSignal, on, onMount } from "solid-js";
import { formatDate } from "../../../utils/formatDate";
import Pagination from "./subcomponents/Pagination/Pagination";
import Post from "./subcomponents/Post";
import Search from "./subcomponents/Search/Search";
import SortTags from "./subcomponents/SortTags/SortTags";

interface Props {
  allPosts: MarkdownInstance<Record<string, any>>[];
}

const PAGE_NUMBER = 0;
export const PAGE_SIZE = 2;

const Home: Component<Props> = (props) => {
  const [posts, setPosts] = createSignal<typeof props.allPosts>([]);
  const [page, setPage] = createSignal<number>(PAGE_NUMBER);
  const total = props.allPosts.length;
  createEffect(
    on(
      page,
      (v) => {
        console.log(v * PAGE_SIZE, PAGE_SIZE * (v + 1));

        const paginatedArray = props.allPosts.slice(
          v * PAGE_SIZE,
          PAGE_SIZE * (v + 1),
        );
        setPosts(paginatedArray);
      },
      { defer: true },
    ),
  );

  const paginatedArray = props.allPosts.slice(page(), PAGE_SIZE * (page() + 1));
  setPosts(paginatedArray);

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
      <Pagination pageNumber={page() + 1} total={total} setPage={setPage} />
    </main>
  );
};

export default Home;
