const DataReducer = (state = {}, action) => {
  switch (action.type) {
    case "retrieve":
      return action.data;
    default:
      return state;
  }
};
export default DataReducer;
