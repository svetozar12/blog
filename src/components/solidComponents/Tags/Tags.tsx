import type { Component } from "solid-js";
import "./Tags.css";

interface Props {
  tags: string[];
}

const Tags: Component<Props> = ({ tags }) => {
  return (
    <div class="tagsContainer">
      {tags.map((tag) => (
        <span class="tag">{tag}</span>
      ))}
    </div>
  );
};

export default Tags;
