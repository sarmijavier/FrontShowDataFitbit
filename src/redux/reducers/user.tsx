import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store/store"

export interface UserState {
    isAuth: boolean
    email: string
    name: string
}

const initialState: UserState = {
    isAuth: false,
    email: "",
    name: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        authentication: (state, action: PayloadAction<any>) => {
            state.isAuth = true
            state.email = action.payload.email
            state.name = action.payload.name
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
export const selectName = (state: RootState) => state.user.name


export default userSlice.reducer
