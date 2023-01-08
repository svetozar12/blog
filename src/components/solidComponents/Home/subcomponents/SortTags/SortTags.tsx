import type { MarkdownInstance } from "astro";
import s from "./SortTags.module.css";
import { getTags } from "./utils";
import type { Component, Setter } from "solid-js";

interface Props {
  activeTag: string[];
  setActiveTag: Setter<string[]>;
  allPosts: MarkdownInstance<Record<string, any>>[];
  setPosts: Setter<MarkdownInstance<Record<string, any>>[]>;
}

const SortTags: Component<Props> = (props) => {
  const handleClick = (key: string) => {
    if (props.activeTag.includes(key)) {
      const index = props.activeTag.indexOf(key);
      if (index > -1) {
        props.activeTag.splice(index, 1);
        return props.setActiveTag([...props.activeTag]);
      }
    }
    props.setActiveTag([...props.activeTag, key]);
  };

  return (
    <div class={s.sortTags}>
      {Object.keys(getTags(props.allPosts)).map(function (key) {
        return (
          <div class={s.tag} onClick={() => handleClick(key)}>
            <span
              class={`${s.tagName} ${
                props.activeTag.includes(key) && s.activeTag
              }`}
            >
              {key}
            </span>
            <div class={s.tagCount}>{getTags(props.allPosts)[key]}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SortTags;
