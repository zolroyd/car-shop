//just something in here for now
const addCarReducer = (state = 0, action) => {
  switch (action.type) {
    case 'increment':
      return state + action.payload;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

export default addCarReducer;
