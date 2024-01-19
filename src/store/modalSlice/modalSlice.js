import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: false,
    reducers: {
        showModal: (state, action) => {
            return action.payload;
        },
        hideModal: () => false,
    },
});

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;
