import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privetRoutes, publicRoutes, routes } from '../router/Routes';
import Posts from '../pages/Posts';
import { Login } from '../pages/Login';
import { useContext } from 'react';
import { AuthContext } from '../contex';
import { Louder } from './UI/louder/Louder';

export const AppRouter = () => {
    const { isAuth, isLouding } = useContext(AuthContext)

    if (isLouding) {
        return <Louder />
    }
    return (
        <Routes>
            {isAuth ? (
                // Приватные маршруты
                privetRoutes.map(route => (
                    <Route
                        key={route.path}
                        element={<route.component />}
                        path={route.path}
                        exact={route.exact}
                    />
                ))
            ) : (
                // Публичные маршруты
                publicRoutes.map(route => (
                    <Route
                        key={route.path}
                        element={<route.component />}
                        path={route.path}
                        exact={route.exact}
                    />
                ))
            )}
            <Route path="*" element={isAuth ? <Posts /> : <Login />} />
        </Routes>
    );
};






