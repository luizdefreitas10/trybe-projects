// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const RECEIVE_API = 'RECEIVE_API';
export const SAVE_FORM = 'SAVE_FORM';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';
// export const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';

export const userLoginAction = (email) => ({
  type: USER_LOGIN,
  payload: email,
});

export const requestApiAction = () => ({
  type: REQUEST_API,
});

export const receiveApiAction = (currencies) => ({
  type: RECEIVE_API,
  payload: currencies,
});

export const saveFormData = (formData) => ({
  type: SAVE_FORM,
  payload: formData,
});

export const deleteExpenseAction = (expenseId) => ({
  type: DELETE_EXPENSE,
  payload: expenseId,
});

export const editExpenseAction = (editedExpense) => ({
  type: EDIT_EXPENSE,
  payload: editedExpense,
});

export const updateExpenseAction = (updatedExpensive) => ({
  type: UPDATE_EXPENSE,
  payload: updatedExpensive,
});

export const fetchCurrencies = () => async (dispatch) => {
  try {
    dispatch(requestApiAction());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const coins = Object.keys(data).filter((coin) => coin !== 'USDT');
    dispatch(receiveApiAction(coins));
  } catch (error) {
    console.error(error);
  }
};
