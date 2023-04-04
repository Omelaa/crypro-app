import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {cryptosApi} from "../services/cryptoApi";

const rootReducer = combineReducers({
    [cryptosApi.reducerPath]: cryptosApi.reducer,
})

export default configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cryptosApi.middleware),
});

