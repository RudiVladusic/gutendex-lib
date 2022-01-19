export const addToFavs = (state, item) => {
  const newFavs = [...state, item];
  return newFavs;
};
