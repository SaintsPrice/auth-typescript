import { FC, useEffect, useState } from 'react';
import Register from '../component/Register';
import Login from '../component/Login';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Navigate } from 'react-router-dom';
import { PAGE_ROUTE } from '../utils/const';
import { IUserState } from '../types/userType';
import { useActions } from '../hooks/useAction';

const Auth:FC = () => {

    const [isLogin, setIsLogin] = useState<boolean>(true)

    function handleLogin(): void {
        setIsLogin(!isLogin)
    };

    const {UserRegisterSuccess} = useActions()

    const {user, isAuth} = useTypedSelector(state => state.user);

    useEffect(() => {
        const raw = localStorage.getItem('user')
        if(raw) {
            const user = JSON.parse(raw)
            UserRegisterSuccess(user)
        }
    }, [user]);

    

    return (
        <>
        {isLogin ? <Login changeAuthComponent={handleLogin} /> : <Register changeAuthComponent={handleLogin} />}
        {isAuth && <Navigate to={PAGE_ROUTE} />}
        </>
    );
};

export default Auth;