import * as types from './Action';
import { dataLoad, dataSave, removedata } from '../../LocalStorage/localStorage';

const tokenKeys = 'token';

const tokenValue = dataLoad(tokenKeys)

const initialValue = {
  token: tokenValue || '',
  isAuth: tokenValue ? true : false,
  isError: null,
  isLoading: false,
};

export const authReducer = (state = initialValue, action) => {
  switch (action.type) {

    case types.REMOVE_TOKEN: {
      // removedata(tokenKeys);
      removedata(tokenKeys);
      return {
        ...state,
        token: '',
        isAuth: false,
        isLoading: false
      };
    }

    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.LOGIN_SUCCESSFULL: {
      
      if (action.payload !== 'fakeToken') return state;

      // localStorage.setItem('token', action.payload);
      dataSave(tokenKeys, action.payload);
       return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: action.payload
       };
    }
     
    default:
      return state;
  }
}; 