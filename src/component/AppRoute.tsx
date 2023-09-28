import React, { FC } from 'react';
import {Routes, Route, BrowserRouterProps} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import Auth from '../pages/Auth';
import { useTypedSelector } from '../hooks/useTypedSelector';

const AppRoutes = (props:BrowserRouterProps) => {

    const {isAuth} = useTypedSelector(state => state.user)

    return (
        <Routes>
            {publicRoutes.map(({path, Component}) => 
                <Route path={path} element={<Component />} />
            )
            }
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route path={path} element={<Component />} />
            )}
            <Route path='*' element={<Auth />} />
        </Routes>
    );
};

export default AppRoutes;