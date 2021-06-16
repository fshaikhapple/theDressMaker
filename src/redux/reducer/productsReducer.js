const initState = {
    products: []
}
export const productsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FRESH_DATA':
            console.log("in reducer ",action);
            return { ...state, products: action.allPosts }

        default:
            return state;
    }
}