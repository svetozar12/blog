import type { Component, Setter } from "solid-js";
import { PAGE_SIZE } from "../../utils";
import s from "./Pagination.module.css";

interface Props {
  total: number;
  pageNumber: number;
  setPage: Setter<number>;
}

const Pagination: Component<Props> = (props) => {
  let totalPages: number[] = [];
  for (let i = 1; i <= props.total / PAGE_SIZE; i++) totalPages.push(i);

  return (
    <div class={s.container}>
      {totalPages.map((page) => {
        return (
          <div
            class={`${page === props.pageNumber && s.activePage}`}
            onClick={() => props.setPage(page - 1)}
          >
            {page}
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
