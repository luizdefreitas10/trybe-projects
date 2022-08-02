import { RECEIVE_API,
  SAVE_FORM, DELETE_EXPENSE, EDIT_EXPENSE, UPDATE_EXPENSE } from '../actions/index';

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
  case EDIT_EXPENSE:
    return {
      ...state,
      idToEdit: action.payload,
      editor: true,
    };
  case UPDATE_EXPENSE:
    return {
      ...state,
      expenses: action.payload,
      editor: false,
    };
  default:
    return state;
  }
}

export default wallet;
