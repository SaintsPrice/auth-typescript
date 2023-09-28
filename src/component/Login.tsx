import {FC} from 'react';
import useInput from '../validation/useInput';

interface ILoginProps {
    changeAuthComponent: () => void
}

const Login:FC<ILoginProps> = ({changeAuthComponent}) => {

    const isEmail = useInput('', {isEmpty: true, minLength: 3, maxLength: 30, isEmail: true});
    const isPassword = useInput('', {isEmpty: true, minLength: 3, maxLength: 30});
    const isValid: boolean = !isEmail.validMessage && !isPassword.validMessage;

    return (
        <div className='auth'>
            <h2 className='auth__title'>Войти</h2>
            <form className='auth__form' noValidate>
                <label className='auth__label' htmlFor='email'>Email</label>
                <input className={`auth__input ${isEmail.validMessage && isEmail.isDirty && 'auth__input__error'}`} type='email' id='email' onChange={isEmail.onChange} onBlur={isEmail.onBlur} value={isEmail.value}/>
                {isEmail.validMessage && isEmail.isDirty && <span className='auth__form__error'>{isEmail.validMessage}</span>}
                <label className='auth__label' htmlFor='password'>Пароль</label>
                <input className={`auth__input ${isPassword.validMessage && isPassword.isDirty && 'auth__input__error'}`} type='password' id='password' onChange={isPassword.onChange} onBlur={isPassword.onBlur} value={isPassword.value}/>
                {isPassword.validMessage && isPassword.isDirty && <span className='auth__form__error'>{isPassword.validMessage}</span>}
                <button disabled={!isValid} className='auth__submit'>Войти</button>
            </form>
            <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                <p className='auth__description'>Если у вас нет аккаунта</p>
                <p style={{cursor:'pointer', color:'blue'}} className='auth__description' onClick={() => changeAuthComponent()}>Зарегистрируйтесь</p>
            </div>
        </div>
    );
};

export default Login;