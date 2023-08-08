const spinnerReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_SPINNER":
      return true;
    case "HIDE_SPINNER":
      return false;
    default:
      return state;
  }
};

export default spinnerReducer;
