import { useState } from "react";
import useValidation from "./useValidation";

export interface IValidations {
    minLength: number;
    maxLength: number;
    isEmpty: boolean;
    isEmail?: boolean;
};

interface IUseInputReturn {
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    value: string;
    isDirty: boolean;
    validMessage?: string
}

type UseInput = (initialValue: string, validations: IValidations) => IUseInputReturn

const useInput:UseInput = (initialValue, validations) => {
    const [value, setIsValue] = useState<string>(initialValue);
    const [isDirty, setIsDirty] = useState<boolean>(false);

    const validMessage = useValidation(value, validations)

    function onChange(e:React.ChangeEvent<HTMLInputElement>):void {
        setIsValue(e.target.value)
    };

    function onBlur(): void {
        setIsDirty(true)
    };

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        validMessage
    }
};

export default useInput;