import { type } from "os";
import { EnumUser, IUser, UserAction } from "../../types/userType";

export const UserRegister = ():UserAction => ({type: EnumUser.USER});

export const UserRegisterSuccess = (payload: IUser):UserAction => ({type: EnumUser.USER_SUCCESS, payload});

export const UserRegisterError = (payload: string) => ({type: EnumUser.USER_ERROR, payload});