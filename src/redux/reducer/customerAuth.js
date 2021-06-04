const initState = {
    customerLogin: false
}
export const customerAuthReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CUSTOMER_DETAILS':
            console.log("customer login details", action);
            break;
       
        default:
            return state
    }
    return state;
}