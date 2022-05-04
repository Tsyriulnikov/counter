// import {loadingReducer} from './loadingReducer'
import {combineReducers, compose, createStore} from "redux";
import {counterReducer} from "./counter-reducer";

const reducers = combineReducers({
    counterReducer: counterReducer,

})
//Для DEVTools  Redux
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//

const store = createStore(reducers, composeEnhancers())

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
