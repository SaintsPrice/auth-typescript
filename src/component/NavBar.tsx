import { FC } from 'react';
import { BASKET_ROUTE } from '../utils/const';
import { NavLink } from 'react-router-dom';
import { useActions } from '../hooks/useAction';

const NavBar: FC = () => {

    const {UserLogout} = useActions()

    function handleLogout(): void {
        localStorage.removeItem('user')
        UserLogout()
    };

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 50}}>
            <NavLink style={{textDecoration: 'none', color: 'blue'}} to={BASKET_ROUTE}>Заказы</NavLink>
            <button onClick={handleLogout}>Выйти</button>
        </div>
    );
};

export default NavBar;