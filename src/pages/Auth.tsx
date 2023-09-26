import { FC, useState } from 'react';
import Register from '../component/Register';
import Login from '../component/Login';

const Auth:FC = () => {

    const [isLogin, setIsLogin] = useState<boolean>(true)

    function handleLogin(): void {
        setIsLogin(!isLogin)
    }

    return (
        isLogin ? <Login changeAuthComponent={handleLogin} /> : <Register changeAuthComponent={handleLogin} />
    );
};

export default Auth;