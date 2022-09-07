export const addItem = (item) => {
  return {
    type: "ADD",
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: "REMOVE",
    payload: item,
  };
};
