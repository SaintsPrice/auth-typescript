import { FC } from 'react';
import NavBar from '../component/NavBar';
import { useTypedSelector } from '../hooks/useTypedSelector';

const MainPage: FC = () => {

    const {user} = useTypedSelector(state => state.user)

    return (
        <div>
            <NavBar />
            <h1>Добро пожаловать{user.name}</h1>
        </div>
    );
};

export default MainPage;