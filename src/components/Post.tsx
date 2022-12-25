import type { FunctionalComponent } from "preact";
import Tags from "./Tags";

interface IProps {
  title: string;
  summary: string;
  tags: string[];
  date: string;
  url: string;
}

const Post: FunctionalComponent<IProps> = ({
  date,
  summary,
  tags,
  title,
  url,
}) => {
  return (
    <article class="container">
      <div>
        <a href={url}>
          {" "}
          <h1 class="text">{title}</h1>
        </a>
        <p>{date}</p>
        <Tags tags={tags} />
      </div>
      <p>{summary}</p>
      <a href={url}>Read more</a>
    </article>
  );
};

export default Post;
{
  /* <style>
  .text {
    font-size: 2.25rem;
    font-weight: 700;
  }
  .container > * {
    color: white;
  }
  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    text-decoration: underline hsl(200, 100%, 30%);
  }
</style> */
}
