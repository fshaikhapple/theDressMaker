import { authReducer } from "./authReducer";
import { productsReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
    authReducer,
    productsReducer,
    firestoreReducer,
    cartReducer,
})

export default rootReducer;