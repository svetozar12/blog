interface IProps {
  tags: string[];
}
import type { FunctionalComponent } from "preact";

const Tags: FunctionalComponent<IProps> = ({ tags }) => {
  return (
    <div class="tagsContainer">
      {tags.map((tag) => (
        <span class="tag">{tag}</span>
      ))}
    </div>
  );
};

export default Tags;
//  <style>
//   .tagsContainer {
//     display: flex;
//   }
//   .tag {
//     padding: 0.25em 0.5em;
//     border: 1px solid white;
//     color: white;
//     border-radius: 5px;
//     margin-right: 1em;
//   }
// </style>
