const initState = {
    adminLoggedIn: false
}
export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            console.log("do login", action);
            break;
        case 'LOGIN_SUCCESS':
            return { ...state, adminLoggedIn: true }
        case 'LOGIN_FAILED':
            return { ...state, adminLoggedIn: false }
    }
    return state;
}