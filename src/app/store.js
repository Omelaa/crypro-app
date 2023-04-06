import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {cryptosApi} from "../services/cryptoApi";
import {cryptoNewsApi} from "../services/cryptoNewsApi";

const rootReducer = combineReducers({
    [cryptosApi.reducerPath]: cryptosApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
});

export default configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cryptosApi.middleware, cryptoNewsApi.middleware),
});

