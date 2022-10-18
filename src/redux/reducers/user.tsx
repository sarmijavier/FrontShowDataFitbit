import { createSlice, PayloadAction } from "@reduxjs/toolkit"

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
    },
})

// Action creators are generated for each case reducer function
export const { authentication } = userSlice.actions

export default userSlice.reducer
