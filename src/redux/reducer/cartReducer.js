const initState = {
    products: [],
    totalPayable : 0
}
export const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CART_ADD_PRODUCT':
            let totalPayableAmount = 0;
            let updatedCart = { ...state, products: [...state.products, action.product] }
            
            console.log(" updatedCart",updatedCart);
            
            updatedCart.products.map(i=>{
                totalPayableAmount =  totalPayableAmount+i.price * i.updateQuantity
            })
                updatedCart = { ...updatedCart, totalPayable: totalPayableAmount}
                console.log(" updatedCart totalPayable" ,totalPayableAmount);

            return updatedCart;
        case 'CART_EMPTY_PRODUCT':
            return { ...state, products: [], totalPayable:0}
        case 'CART_REMOVE_PRODUCT':
            console.log("action",action.item.id);
            const filteredProducts = state.products.filter(i=>i.id!==action.item.id)
            return { ...state, products: filteredProducts }
        default:
            return state;
    }
}


