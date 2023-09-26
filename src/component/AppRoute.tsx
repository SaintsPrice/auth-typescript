import React, { FC } from 'react';
import {Routes, Route, BrowserRouterProps} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import Auth from '../pages/Auth';

const AppRoutes = (props:BrowserRouterProps) => {

    const isAuth: boolean = false

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