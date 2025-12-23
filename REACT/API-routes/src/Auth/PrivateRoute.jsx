import { useContext } from "react";
import {contextCreated} from '../Components/ ';
import {Navigate} from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
    const { islogin } = useContext(contextCreated);
    console.log('islogin', islogin);

    if (!islogin) {
        return <Navigate to="auth" />;
    }

    return children;
};