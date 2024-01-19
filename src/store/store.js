import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import modalReducer from './modalSlice/modalSlice';
import productsReducer from './productsSlice/productsSlice';

const rootReducer = {
    products: productsReducer,
    modal: modalReducer,
};

const persistedReducer = persistReducer(
    { key: 'royalSuvRoot', storage },
    combineReducers(rootReducer),
);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

export default store;
