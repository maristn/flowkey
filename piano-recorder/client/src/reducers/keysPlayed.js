const keysPlayed = (state = [], action) => {
  switch (action.type) {
    case 'ADD_KEY':
      return [
        ...state,
        action.key
      ];
    case 'EMPTY_KEY':
      return [];
    default:
      return state;
  }
}

export default keysPlayed;