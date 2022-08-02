import { RECEIVE_API, SAVE_FORM, DELETE_EXPENSE } from '../actions/index';

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
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses].filter((expense) => expense.id !== action.payload),
    };
  default:
    return state;
  }
}

export default wallet;
