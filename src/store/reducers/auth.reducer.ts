import { AuthUnionType,SIGNUP, SIGNUPFAILD, SIGNUPSUCCESS } from "../actions/auth.actions";


export interface AuthState {
    signup: {
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
        default:
            return state

    }
}