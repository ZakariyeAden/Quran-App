const chapterItemReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CHAPTER_ITEM':
      return action.payload;
    default:
      return state;
  }
};

export default chapterItemReducer;