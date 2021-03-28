import axios from 'axios'
import {API} from '../../config'
import {SIGNUP, SignupAction, SignupFaild, SignupSuccess} from '../actions/auth.actions'
import {put,takeEvery} from 'redux-saga/effects'

function* handleSignup(action:SignupAction) { 
    try {
        yield axios.post(`${API}/signup`, action.preload)
        yield put(SignupSuccess())
    } catch (error) {
        yield put(SignupFaild(error.response.data.error))
    }
}
export default function* anthSaga() {
    yield takeEvery(SIGNUP,handleSignup)
}