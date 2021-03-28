// import testReducer from "./test.reducer";
import {combineReducers} from 'redux';
import {connectRouter, RouterState} from 'connected-react-router';
import {History} from 'history'
import AuthReducer, { AuthState } from "./auth.reducer";
export interface AppState {
    router: RouterState
    auth: AuthState
}
const createRooterReducer = (history: History) => {
    return combineReducers({
        router: connectRouter(history),
        auth: AuthReducer
    })
}

export default createRooterReducer;

// 第一模块第八小节