import type { MarkdownInstance } from "astro";
import s from "./SortTags.module.css";
import { getTags } from "./utils";
import type { Component } from "solid-js";

interface Props {
  allPosts: MarkdownInstance<Record<string, any>>[];
}

const SortTags: Component<Props> = ({ allPosts }) => {
  return (
    <div class={s.sortTags}>
      {Object.keys(getTags(allPosts)).map(function (key) {
        console.log(key, getTags(allPosts)[key]);
        return (
          <div class={s.tag}>
            <span class={s.tagName}>{key}</span>
            <div class={s.tagCount}>{getTags(allPosts)[key]}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SortTags;
