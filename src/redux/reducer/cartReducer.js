const initState = {
    products: []
}
export const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CART_ADD_PRODUCT':
            return { ...state, products: [...state.products, action.product] }
        case 'CART_EMPTY_PRODUCT':
            return { ...state, products: [] }
        case 'CART_REMOVE_PRODUCT':
            console.log("action",action.item.id);
            const filteredProducts = state.products.filter(i=>i.id!==action.item.id)
            return { ...state, products: filteredProducts }
        default:
            return state;
    }
}


