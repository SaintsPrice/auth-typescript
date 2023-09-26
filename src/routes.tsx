import React from "react";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import MainPage from "./pages/MainPage";
import { AUTH_ROUTE, BASKET_ROUTE, PAGE_ROUTE } from "./utils/const";

interface IRoutes {
    path: string,
    Component: React.FC
}

export const publicRoutes:IRoutes[] = [
    {
        path: AUTH_ROUTE,
        Component: Auth
    }
];

export const authRoutes:IRoutes[] = [
    {
        path: PAGE_ROUTE,
        Component: MainPage
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
];