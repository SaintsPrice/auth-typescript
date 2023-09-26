import { FC } from 'react';

interface IRegisterProps {
    changeAuthComponent: () => void
}

const Register:FC<IRegisterProps> = ({changeAuthComponent}) => {
    return (
        <div className='auth'>
            <h2 className='auth__title'>Зарегистрироваться</h2>
            <form className='auth__form'>
                <label className='auth__label' htmlFor='name'>Имя</label>
                <input className='auth__input' type='name' id='name'/>
                <label className='auth__label' htmlFor='email'>Email</label>
                <input className='auth__input' type='email' id='email'/>
                <label className='auth__label' htmlFor='password'>Password</label>
                <input className='auth__input' type='password' id='password'/>
                <button className='auth__submit'>Зарегистрироваться</button>
            </form>
            <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                <p className='auth__description'>Если у вас уже есть аккаунт</p>
                <p style={{cursor:'pointer', color:'blue'}} className='auth__description' onClick={() => changeAuthComponent()}>Войдите</p>
            </div>
        </div>
    );
};

export default Register;