import axios from 'axios'
import {API} from '../../config'
import {SIGNUP, SignupAction, SignupFaild, SignupSuccess, SIGNIN, signin, signinSuccess, signinFaild,SigninAction} from '../actions/auth.actions'
import {put,takeEvery} from 'redux-saga/effects'

function* handleSignup(action:SignupAction) { 
    try {
        yield axios.post(`${API}/signup`, action.preload)
        yield put(SignupSuccess())
    } catch (error) {
        yield put(SignupFaild(error.response.data.error))
    }
}

function* handleSignin(action:SigninAction) {
    try {
        let {data} = yield axios.post(`${API}/signin`, action.payload) as any
        localStorage.setItem('jwt',JSON.stringify(data));
        yield put(signinSuccess())
    } catch (error) {
        yield put(signinFaild(error.response.data.error))
    }
}
export default function* anthSaga() {
    yield takeEvery(SIGNUP,handleSignup)
    yield takeEvery(SIGNIN, handleSignin)
}