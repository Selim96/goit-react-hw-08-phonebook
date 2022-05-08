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
import { pokemonApi } from "./contacts/pokemon";
import { contactsApi } from "./contacts/contacts-RTK-operations";

const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: 'filter' 
};

const ignoredActions = {
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }

export const store = configureStore({
    reducer: {
        contacts: persistReducer(persistConfig, contactsReducer),
        [contactsApi.reducerPath]: contactsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(ignoredActions), pokemonApi.middleware, contactsApi.middleware],
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);