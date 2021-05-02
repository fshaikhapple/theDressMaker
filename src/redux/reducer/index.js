import { authReducer } from "./authReducer";
import { productsReducer } from "./productsReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
    authReducer,
    productsReducer,
    firestoreReducer,
})

export default rootReducer;