export interface IUser {
    name: string;
    email: string;
    password: string;
};

export interface IUserState {
    user: IUser;
    isLoading: boolean;
    isAuth: boolean;
    error: null | string;
};

export const enum EnumUser {
    USER = 'USER',
    USER_SUCCESS = 'USER_SUCCESS',
    USER_ERROR = 'USER_ERROR'
};

export interface IRegister {
    type: EnumUser.USER
};

export interface IRegisterSuccess {
    type: EnumUser.USER_SUCCESS,
    payload: IUser
};

export interface IRegisterError {
    type: EnumUser.USER_ERROR,
    payload: 'string'
};

export type UserAction = IRegister | IRegisterSuccess | IRegisterError;

export type UserReducerFunction = (state: IUserState, action: UserAction) => IUserState;