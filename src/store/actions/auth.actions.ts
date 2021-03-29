export const SIGNUP = 'SIGNUP'
export const SIGNUPSUCCESS = 'SIGNUPSUCCESS'
export const SIGNUPFAILD = 'SIGNUPFAILD'
export const RESET_SIGNUP = 'RESET_SIGNUP'

export interface SignupPreload {
    email: string
    name: string
    password: string
}
export interface SignupAction {
    type: typeof SIGNUP
    preload: SignupPreload
}

export interface SignupSuccessAction {
    type: typeof SIGNUPSUCCESS
}

export interface SignupFaildAction {
    type: typeof SIGNUPFAILD
    message: string
}

export interface ResetSignupAction {
    type: typeof RESET_SIGNUP
}

export const signup = (preload: SignupPreload):SignupAction => ({
    type: SIGNUP,
    preload
})

export const SignupSuccess = ():SignupSuccessAction => ({
    type: SIGNUPSUCCESS
})

export const SignupFaild = (message: string):SignupFaildAction => ({
    type: SIGNUPFAILD,
    message
})

export const ResetSignup = ():ResetSignupAction => ({
    type: RESET_SIGNUP
})

export const SIGNIN = 'SIGNIN'
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
export const SIGNIN_FAILD = 'SIGNIN_FAILD'
export const SIGNIN_RESET = 'SIGNIN_RESET'

export interface SigninPayload {
    email: string,
    password: string
}
export interface SigninAction {
    type: typeof SIGNIN,
    payload: SigninPayload
}

export interface SigninSuccessAction {
    type: typeof SIGNIN_SUCCESS
}

export interface SigninFaildAction {
    type: typeof SIGNIN_FAILD,
    message: string
}

export interface RestSigninAction {
    type: typeof SIGNIN_RESET
}

export const signin = (payload: SigninPayload):SigninAction => ({
    type: SIGNIN,
    payload
})

export const signinFaild = (message:string):SigninFaildAction => ({
    type: SIGNIN_FAILD,
    message
})

export const signinSuccess = ():SigninSuccessAction => ({
    type: SIGNIN_SUCCESS
})

export const signinReset = ():RestSigninAction => ({
    type: SIGNIN_RESET
})

export type AuthUnionType = SignupFaildAction | SignupSuccessAction | SignupAction | ResetSignupAction | SigninAction | SigninFaildAction | SigninSuccessAction | RestSigninAction