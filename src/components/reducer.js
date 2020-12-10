export const initialState = {
  user: null,
  submit: false,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_SUBMIT: "SET_SUBMIT",
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_SUBMIT:
      return {
        ...state,
        submit: action.submit,
      };

    default:
      return state;
  }
};
export default reducer;
