import { combineReducers, configureStore } from "@reduxjs/toolkit";
import StructureReducer from "./slices/structure";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
const appReducer = combineReducers({
    structure: StructureReducer,
});

export const store = configureStore({
    reducer: appReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
        getDefaultMiddleware().concat([]),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Notes
// Using configureStore should not need any additional typings.
// You will, however, want to extract the RootState type and the Dispatch type so that they can be referenced as needed.
// Inferring these types from the store itself means that they correctly update as you add more state slices or modify middleware settings.

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appReducer>;
// Inferred type: {posts: PostsState}
export type AppDispatch = typeof store.dispatch;
