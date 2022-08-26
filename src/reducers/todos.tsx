
import {
  LOADING_TODOS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_ERROR
} from "../constant";

const initialState = {
  loading: false,
  data: [],
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_TODOS:
      return { ...state, loading: true };
    case LOAD_TODOS_SUCCESS:
      return {
        ...state,
        data: action.todos,
        loading: false
      };
    case LOAD_TODOS_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}
