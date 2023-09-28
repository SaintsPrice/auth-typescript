import { FC, useState } from 'react';
import Register from '../component/Register';
import Login from '../component/Login';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Navigate } from 'react-router-dom';
import { PAGE_ROUTE } from '../utils/const';

const Auth:FC = () => {

    const [isLogin, setIsLogin] = useState<boolean>(true)

    function handleLogin(): void {
        setIsLogin(!isLogin)
    };

    const {isAuth} = useTypedSelector(state => state.user);
    console.log(isAuth)

    return (
        <>
        {isLogin ? <Login changeAuthComponent={handleLogin} /> : <Register changeAuthComponent={handleLogin} />}
        {isAuth && <Navigate to={PAGE_ROUTE} />}
        </>
    );
};

export default Auth;