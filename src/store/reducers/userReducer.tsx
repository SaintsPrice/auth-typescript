import { EnumUser, IUser, IUserState, UserReducerFunction } from "../../types/userType";

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

const userReducer:UserReducerFunction = (state = initialState, action) => {
    switch(action.type) {
        case EnumUser.USER:
            return {...state, isLoading: true}
        case EnumUser.USER_SUCCESS:
            return {...state, isLoading: false, isAuth: true, user: action.payload}
        case EnumUser.USER_ERROR:
            return {...state, isLoading: false, error: action.payload}
        default:
            return state
    }
};

export default userReducer;