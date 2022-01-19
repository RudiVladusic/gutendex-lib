export const removeFromFavs = (state, item) => {
  const userFavs = state.filter((id) => {
    return id.id !== item.id;
  });

  return userFavs;
};
