export const formatDate = (date: Date) => {
  const postDate = new Date(date);
  return postDate.toLocaleString("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
};
