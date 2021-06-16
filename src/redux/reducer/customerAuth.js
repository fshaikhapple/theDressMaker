const initState = {
    customerLogin: false
}
export const customerAuthReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CUSTOMER_DETAILS':
            console.log("customer login details", action.user);
            let user = { ...state, user: action.user,id:action?.user?.user?.uid,customerLogin: true }
            return user
        default:
            return state
    }
}