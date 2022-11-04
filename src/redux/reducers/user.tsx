import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store/store"

export interface UserState {
    isAuth: boolean
    email: string
}

const initialState: UserState = {
    isAuth: false,
    email: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        authentication: (state, action: PayloadAction<string>) => {
            state.isAuth = true
            state.email = action.payload
        },
        cleanStateUser: (state) => {
            state.isAuth = false
            state.email = ""
        }
    },
})

// Action creators are generated for each case reducer function
export const { authentication, cleanStateUser } = userSlice.actions

export const selectEmail = (state: RootState) => state.user.email

export default userSlice.reducer
