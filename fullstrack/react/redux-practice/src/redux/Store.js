import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { userReducer } from "./reducers/userReducer"

const rootReducer = combineReducers({
    clients: userReducer
})

const reduxStore = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk)))

export default reduxStore