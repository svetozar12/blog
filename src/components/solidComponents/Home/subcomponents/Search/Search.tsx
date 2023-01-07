import { Component, onMount } from "solid-js";
import "./Search.css";

const Search = () => {
  const handleSearch = (search: HTMLInputElement) => {
    const posts = document.getElementById("posts");
    const filter = search?.value.toUpperCase();
    if (!posts) return;
    const postsLength = posts.childElementCount;
    const articles = posts.getElementsByTagName("article");
    for (let i = 0; i < postsLength; i++) {
      const a = articles[i].getElementsByTagName("a")[0].children[0];
      const txtValue = a.textContent || "";
      const post = posts.getElementsByTagName("article");
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        post[i].style.display = "";
      } else {
        post[i].style.display = "none";
      }
    }
  };
  onMount(() => {
    const search = document.getElementById("search") as HTMLInputElement;
    search.addEventListener("input", () => handleSearch(search));
  });

  return (
    <div>
      <label for="search">Search</label>
      <input type="search" id="search" />
    </div>
  );
};

export default Search;
