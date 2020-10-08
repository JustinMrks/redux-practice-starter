const initialState = {
  players: [],
  isLoading: false,
  error: "",
};

const FETCH_START = "FETCH_START";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
        errors: "",
      };
    default:
      return state;
  }
};

export default reducer;
