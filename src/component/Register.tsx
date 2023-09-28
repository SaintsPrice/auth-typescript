import { FC } from 'react';
import useInput from '../validation/useInput';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';

interface IRegisterProps {
    changeAuthComponent: () => void
}

const Register:FC<IRegisterProps> = ({changeAuthComponent}) => {

    const isName = useInput('', {isEmpty: true, minLength: 2, maxLength: 30});
    const isEmail = useInput('', {isEmpty: true, minLength: 3, maxLength: 30, isEmail: true});
    const isPassword = useInput('', {isEmpty: true, minLength: 3, maxLength: 30});
    const isValid: boolean = !isName.validMessage && !isEmail.validMessage && !isPassword.validMessage;

    const {UserRegisterSuccess} = useActions()

    const {user} = useTypedSelector(state => state)

    function handleSubmit(e:React.FormEvent<HTMLFormElement>): void {
        e.preventDefault()
        UserRegisterSuccess({email: isEmail.value, name: isName.value, password: isPassword.value})
    };

    console.log(user)

    return (
        <div className='auth'>
            <h2 className='auth__title'>Зарегистрироваться</h2>
            <form className='auth__form' onSubmit={handleSubmit} noValidate>
                <label className='auth__label' htmlFor='name'>Имя</label>
                <input className={`auth__input ${isName.validMessage && isName.isDirty && 'auth__input__error'}`} type='text' id='name' onChange={isName.onChange} onBlur={isName.onBlur} value={isName.value} />
                <label className='auth__label' htmlFor='email'>Email</label>
                <input className={`auth__input ${isEmail.validMessage && isEmail.isDirty && 'auth__input__error'}`} type='email' id='email' onChange={isEmail.onChange} onBlur={isEmail.onBlur} value={isEmail.value}/>
                {isEmail.validMessage && isEmail.isDirty && <span className='auth__form__error'>{isEmail.validMessage}</span>}
                <label className='auth__label' htmlFor='password'>Пароль</label>
                <input className={`auth__input ${isPassword.validMessage && isPassword.isDirty && 'auth__input__error'}`} type='password' id='password' onChange={isPassword.onChange} onBlur={isPassword.onBlur} value={isPassword.value}/>
                {isPassword.validMessage && isPassword.isDirty && <span className='auth__form__error'>{isPassword.validMessage}</span>}
                <button disabled={!isValid} className='auth__submit'>Войти</button>
            </form>
            <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                <p className='auth__description'>Если у вас уже есть аккаунт</p>
                <p style={{cursor:'pointer', color:'blue'}} className='auth__description' onClick={() => changeAuthComponent()}>Войдите</p>
            </div>
        </div>
    );
};

export default Register;