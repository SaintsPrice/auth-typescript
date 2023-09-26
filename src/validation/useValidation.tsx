import { useEffect, useState } from "react";
import { IValidations } from "./useInput";

type useValidationType = (value: string, validations: IValidations) => string

const useValidation:useValidationType = (value, validations) => {

    const [isEmpty, setIsEmpty] = useState<string>('');
    const [minLength, setMinLength] = useState<string>('');
    const [maxLength, setMaxLength] = useState<string>('');
    const [isEmail, setIsEmail] = useState<string>('')

    const validateEmail = (email:string): RegExpMatchArray | null => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

      useEffect(() => {
        if(!value) {
            setIsEmpty('Это обязательное поле')
            setMinLength('')
            setMaxLength('')
        }
        else {
            setIsEmpty('')
            for(let validation in validations) {
                switch(validation) {
                    case 'minLength':
                        if(value.length < validations[validation]) {
                            setMinLength('Слишком мало символов')
                            setIsEmail('')
                        }
                        else {
                            setMinLength('')
                        }
                    break
                    case 'maxLength':
                        if(value.length > validations[validation]) {
                            setMaxLength('Слишком много символов')
                            setIsEmail('')
                        }
                        else {
                            setMaxLength('')
                        }
                    break
                    case 'isEmail':
                        if(!maxLength && !minLength) {
                            validateEmail(value) === null ? setIsEmail('Введен некорректный email') : setIsEmail('')
                            setMinLength('')
                        }
                    break
                }
            }
        }
      }, [value])

      const validationMessage = [isEmpty, minLength, maxLength, isEmail].filter((i) => i != '').join('')

      return validationMessage
};

export default useValidation