export const SIGNUP = 'SIGNUP'
export const SIGNUPSUCCESS = 'SIGNUPSUCCESS'
export const SIGNUPFAILD = 'SIGNUPFAILD'

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

export type AuthUnionType = SignupFaildAction | SignupSuccessAction | SignupAction

