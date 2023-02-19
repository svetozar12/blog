export const PAGE_NUMBER = 0;
export const PAGE_SIZE = 10;

export const paginateArray = <Arr>(arr: Arr[], page: number): Arr[] =>
  arr.slice(page * PAGE_SIZE, PAGE_SIZE * (page + 1));
