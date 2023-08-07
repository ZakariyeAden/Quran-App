const versesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_VERSES':
      return action.payload;
    default:
      return state;
  }
};

export default versesReducer;