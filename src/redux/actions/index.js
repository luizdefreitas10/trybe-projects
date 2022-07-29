// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const RECEIVE_API = 'RECEIVE_API';
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
