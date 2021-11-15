export const addFormReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_FORM_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "ADD_FORM_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ADD_FORM_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}


