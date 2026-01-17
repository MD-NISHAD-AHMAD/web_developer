import * as types from '../Reducer/AUTH/Action';

import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Login } from '../Components/Login';


export const LoginPage = () => {
    const dispatch = useDispatch();
    const { isLoading, isError, isAuth } = useSelector((state) => {
        console.log('🚀 ~ LoginPage.jsx ~ state:', state);
        return state.auths;
    });

    const handleLogin = ({ email, pass }) => {
        if (email === 'admin' && pass === 'admin@123') {
            dispatch({ type: types.LOGIN_SUCCESSFULL, payload: 'fakeToken' });
        } else {
            dispatch({ type: types.LOGIN_FAILURE, payload: 'Wrong credentials' });
        }
    };

    if (isAuth) {
        return <Navigate to="/todo" replace />;
    }

    if (isLoading) return <h1>Loading....😎</h1>;
    
    return (
        <>
        <Login props={handleLogin}/>
        {isError && <h1>Something went wrong....🤦‍♂️</h1>}
        </>
    );
};