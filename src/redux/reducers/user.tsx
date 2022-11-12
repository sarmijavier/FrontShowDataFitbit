import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store/store"

export interface UserState {
    isAuth: boolean
    email: string
    name: string
    name_contact: string
    email_contact: string
    phone_contact: string
}

const initialState: UserState = {
    isAuth: false,
    email: "",
    name: "",
    name_contact: "",
    email_contact: "",
    phone_contact: ""
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
        setEmergencyContact: (state, action: PayloadAction<any>) => {
            state.name_contact = action.payload.name_contact
            state.email_contact = action.payload.email_contact
            state.phone_contact = action.payload.number_contact
        },
        cleanStateUser: (state) => {
            state.isAuth = false
            state.email = ""
            state.name = ""
            state.name_contact = ""
            state.email_contact = ""
            state.phone_contact = ""
        }
    },
})

// Action creators are generated for each case reducer function
export const { authentication, cleanStateUser, setEmergencyContact } = userSlice.actions

export const selectEmail = (state: RootState) => state.user.email
export const selectName = (state: RootState) => state.user.name
export const selectEmergencyContactName = (state: RootState) => state.user.name_contact
export const selectEmergencyContactEmail = (state: RootState) => state.user.email_contact
export const selectEmergencyContactPhoneNumber = (state: RootState) => state.user.phone_contact


export default userSlice.reducer
