export const addKey = (key) => {
  return {
    type: 'ADD_KEY',
    key: key
  };
}

export const emptyKey = () => {
  return {
    type: 'EMPTY_KEY'
  };
}