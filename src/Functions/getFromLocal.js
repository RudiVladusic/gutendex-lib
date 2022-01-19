export const getFromLocal = (key) => {
  const getItem = localStorage.getItem(key);
  return JSON.parse(getItem);
};
