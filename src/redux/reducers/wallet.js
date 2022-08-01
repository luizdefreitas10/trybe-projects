import { RECEIVE_API, SAVE_FORM } from '../actions/index';

const INITIAL_STATE = {

  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  loading: true,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case RECEIVE_API:
    return {
      ...state,
      currencies: action.payload,
      loading: false,
    };
  case SAVE_FORM:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}

export default wallet;
