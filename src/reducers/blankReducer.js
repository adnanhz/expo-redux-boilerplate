const initialState = {
  i: 0
}
const blankReducer = function(state = initialState, action) {
  switch(action.type){
    case "INCREMENT":
      return {
        ...state,
        i: state.i+1
      }

    default: return state;
  }
}

export default blankReducer;
