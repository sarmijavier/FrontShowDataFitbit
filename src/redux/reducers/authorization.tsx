import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store/store"

interface AuthorizationState {
    loggedIn: boolean
}

const initialState: AuthorizationState = {
    loggedIn: false,
}

export const authorizationSlice = createSlice({
    name: "authorization",
    initialState,
    reducers: {
        setLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.loggedIn = action.payload
        },
        cleanStateAuth: (state) => {
            state.loggedIn = false
        }
    },
})

export const { setLoggedIn, cleanStateAuth } = authorizationSlice.actions

export const selectIsLoggedIn = (state: RootState) => state.authorization.loggedIn

export default authorizationSlice.reducer
