import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import contactsReducer from './contacts/contacts-reducers';
import { setupListeners } from '@reduxjs/toolkit/query'
import { contactsApi } from "./authPhonebook/contacts-RTK-operations";
import authReducer from './authPhonebook/auth-slice';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'] 
};

const middleware = (getDefaultMiddleware) => [...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
}), contactsApi.middleware];

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        auth: persistReducer(authPersistConfig, authReducer),
        [contactsApi.reducerPath]: contactsApi.reducer,
    },
    middleware,
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);