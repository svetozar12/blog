import { useEffect, useRef } from "preact/hooks";

const Search = () => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const search = document.getElementById("search") as HTMLInputElement;
    search.addEventListener("input", handleSearch);
  }, []);

  const handleSearch = () => {
    const posts = document.getElementById("posts");
    const filter = ref.current?.value.toUpperCase();
    if (!filter) return;
    if (!posts) return;
    const postsLength = posts.childElementCount;
    for (let i = 0; i < postsLength; i++) {
      const a = posts.getElementsByTagName("a")[0];
      const txtValue = a.textContent || a.innerText;
      const post = posts.getElementsByTagName("div");
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        post[i].style.display = "";
      } else {
        post[i].style.display = "none";
      }
    }
  };
  return (
    <div>
      <input onChange={handleSearch} ref={ref} id="search" type="search" />
    </div>
  );
};

export default Search;
