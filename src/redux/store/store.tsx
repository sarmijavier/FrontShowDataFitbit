import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { userSlice } from "../reducers/user"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import thunk from "redux-thunk"
import { authorizationSlice } from "../reducers/authorization"

const persistConfig = {
    key: "root",
    storage,
}

const rootReducer = combineReducers({
    user: userSlice.reducer,
    authorization: authorizationSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)
