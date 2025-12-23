import { Routes, Route } from 'react-router-dom'
import { Auth } from '../Components/Auth'
import { Show_Login } from '../Pages/Show_Login'
import { Page_404 } from '../Pages/Page_404'
import { ApiCall } from '../Components/ApiCall'
import { privateRoute } from '../Auth/PrivateRoute'

export const AllRoutes = () => {
    return (
        <Routes>
            <Route
            path="/"
            element={
                <privateRoute>
                    <ApiCall />
                </privateRoute>
            }
            ></Route>
            <Route path="/auth" element={<Auth />}></Route>
            <Route path="/show_login" element={<Show_Login />}></Route>
            <Route path="*" element={<Page_404 />}></Route>
        </Routes>
    );
};