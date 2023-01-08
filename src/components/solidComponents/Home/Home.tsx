import type { MarkdownInstance } from "astro";
import { Component, createEffect, createSignal, on, onMount } from "solid-js";
import { formatDate } from "../../../utils/formatDate";
import Pagination from "./subcomponents/Pagination/Pagination";
import Post from "./subcomponents/Post";
import Search from "./subcomponents/Search/Search";
import SortTags from "./subcomponents/SortTags/SortTags";
import { PAGE_NUMBER, PAGE_SIZE, paginateArray } from "./utils";

interface Props {
  allPosts: MarkdownInstance<Record<string, any>>[];
}

const Home: Component<Props> = (props) => {
  const [posts, setPosts] = createSignal<typeof props.allPosts>([]);
  const [page, setPage] = createSignal<number>(PAGE_NUMBER);
  const [activeTag, setActiveTag] = createSignal<string[]>([]);
  const [total, setTotal] = createSignal<number>(props.allPosts.length);
  const initialPosts = props.allPosts;
  createEffect(
    on(
      page,
      (v) => {
        const paginatedArray = paginateArray(props.allPosts, v);
        setPosts(paginatedArray);
      },
      { defer: true },
    ),
  );

  createEffect(
    on(
      activeTag,
      (v) => {
        console.log(v);

        if (v.length < 1) {
          setTotal(props.allPosts.length);
          return paginateArray(props.allPosts, page());
        }
        const sortedPosts = props.allPosts.filter((k) =>
          k.frontmatter.tags.some((tag: string) => activeTag().includes(tag)),
        );
        const paginatedArray = paginateArray(sortedPosts, page());
        setPosts(paginatedArray);
        setTotal(sortedPosts.length);
      },
      { defer: true },
    ),
  );

  setPosts(paginateArray(props.allPosts, page()));

  return (
    <main>
      <Search />
      <SortTags
        allPosts={props.allPosts}
        setPosts={setPosts}
        activeTag={activeTag()}
        setActiveTag={setActiveTag}
      />
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
      <Pagination pageNumber={page() + 1} total={total()} setPage={setPage} />
    </main>
  );
};

export default Home;
