import type { MarkdownInstance } from "astro";
import s from "./SortTags.module.css";
import { getTags } from "./utils";
import { Component, createEffect, createSignal, Setter } from "solid-js";

interface Props {
  allPosts: MarkdownInstance<Record<string, any>>[];
  setPosts: Setter<MarkdownInstance<Record<string, any>>[]>;
}

const SortTags: Component<Props> = ({ allPosts, setPosts }) => {
  const [activeTag, setActiveTag] = createSignal<string[]>([]);
  const initialPosts = allPosts;
  const handleClick = (key: string) => {
    if (activeTag().includes(key)) {
      const index = activeTag().indexOf(key);
      if (index > -1) {
        activeTag().splice(index, 1);
        return setActiveTag([...activeTag()]);
      }
    }
    setActiveTag([...activeTag(), key]);
  };
  createEffect(() => {
    if (activeTag().length < 1) return setPosts(initialPosts);

    const sortedPosts = allPosts.filter((k) =>
      k.frontmatter.tags.some((e: string) => activeTag().includes(e)),
    );
    console.log(sortedPosts);

    setPosts(sortedPosts);
  });
  return (
    <div class={s.sortTags}>
      {Object.keys(getTags(allPosts)).map(function (key) {
        return (
          <div class={s.tag} onClick={() => handleClick(key)}>
            <span
              class={`${s.tagName} ${activeTag().includes(key) && s.activeTag}`}
            >
              {key}
            </span>
            <div class={s.tagCount}>{getTags(allPosts)[key]}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SortTags;
