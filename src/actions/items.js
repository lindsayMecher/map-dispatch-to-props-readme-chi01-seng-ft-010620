export const addItem = (name) => {
  console.log(name)
  return {
    type: 'INCREASE_COUNT',
    name: name
  };
};
