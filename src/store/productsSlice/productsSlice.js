import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
    },
    reducers: {
        addProducts(state, action) {
            state.data = [...action.payload];
        },
        addToCart(state, action) {
            const id = action.payload;
            const product = state.data.find((elem) => elem.id === id);

            if (product) {
                product.cart = {
                    ...product.cart,
                    inCart: true,
                    count: product.cart.count + 1,
                };
            }
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const product = state.data.find((elem) => elem.id === id);

            if (product && product.cart.count > 1) {
                product.cart = {
                    ...product.cart,
                    count: product.cart.count - 1,
                };
            }
        },
    },
});

export const { addProducts, addToCart, removeFromCart } = productsSlice.actions;

export default productsSlice.reducer;
