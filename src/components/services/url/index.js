export const getSearchParam = (location, name) => {
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(name);
};