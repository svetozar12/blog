import type { Component } from "solid-js";
import Tags from "../../../Tags";
import "./Post.css";

interface Props {
  title: string;
  summary: string;
  tags: string[];
  date: string;
  url: string;
}

const Post: Component<Props> = ({ title, date, summary, tags, url }) => {
  return (
    <article class="container">
      <div>
        <a href={url}>
          <h1 class="text">{title}</h1>
        </a>
        <p>{date}</p>
        <Tags tags={tags} />
      </div>
      <p>{summary}</p>
      <a class="readMore" href={url}>
        Read more
      </a>
    </article>
  );
};

export default Post;
