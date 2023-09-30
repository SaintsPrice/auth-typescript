import { EnumUser, IUserState, UserAction } from "../../types/userType";

const initialState:IUserState = {
    user: {
        name: '',
        email: '',
        password: ''
    },
    isLoading: false,
    isAuth: false,
    error: null
};

const userReducer = (state = initialState, action: UserAction): IUserState => {
    switch(action.type) {
        case EnumUser.USER:
            return {...state, isLoading: true}
        case EnumUser.USER_SUCCESS:
            return {...state, isLoading: false, isAuth: true, user: action.payload}
        case EnumUser.USER_ERROR:
            return {...state, isLoading: false, error: action.payload}
        case EnumUser.USER_LOGOUT:
            return {...state, isLoading: false, isAuth: false, user: initialState.user}
        default:
            return state
    }
};

export default userReducer;