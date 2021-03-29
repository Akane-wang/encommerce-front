import { AuthUnionType,RESET_SIGNUP,SIGNIN, SIGNIN_FAILD,SIGNIN_RESET,SIGNIN_SUCCESS,SIGNUP, SIGNUPFAILD, SIGNUPSUCCESS } from "../actions/auth.actions";


export interface AuthState {
    signup: {
        loaded: boolean,
        success: boolean,
        message: string
    },
    signin: {
        loaded: boolean,
        success: boolean,
        message: string
    }
}

const initialState:AuthState = {
    signup: {
        loaded: false,
        success: false,
        message: ''    
    },
    signin: {
        loaded: false,
        success: false,
        message: ''    
    }
}
export default function AuthReducer (state = initialState,action: AuthUnionType) {

    switch(action.type) {
        case SIGNUP: 
            return {...state,signup:{loaded: false, success: false}}
        case SIGNUPFAILD:
            return {...state, signup: {loaded: true, success: false}}
        case SIGNUPSUCCESS: 
            return {...state,signup: {loaded: true,success: true}}
        case RESET_SIGNUP:
            return {...state, signup: {loaded: false, success: false, message: ''}}
        case SIGNIN:
            return {...state, signin: {loaded: false, success: false, message: ''}}
        case SIGNIN_SUCCESS:
                return {...state, signin: {loaded: true, success: true, message: ''}}
        case SIGNIN_FAILD:
            return {...state, signin: {loaded: true, success: false, message: action.message}}
        case SIGNIN_RESET:
            return {...state, signin: {loaded: false, success: false, message: ''}}
        default:
            return state

    }
}