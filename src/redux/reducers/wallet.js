import { RECEIVE_API } from '../actions/index';

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
  default:
    return state;
  }
}

export default wallet;
