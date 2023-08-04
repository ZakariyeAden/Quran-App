const editFormReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_EDIT_PLAN":
      return action.payload;
    case "EDIT_ON_CHANGE":
      return {
        ...state,
        [action.payload.property]: action.payload.value
    }
    default:
      return state;
  }
};

export default editFormReducer;
