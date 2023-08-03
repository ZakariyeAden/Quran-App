const formReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PLAN_FORM':
      return action.payload;
    default:
      return state;
  }
};


export default formReducer;