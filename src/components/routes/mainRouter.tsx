import React, { useState } from "react"
import { useSelector } from "react-redux"
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Navigate,
} from "react-router-dom"
import { RootState } from "../../redux/store/store"
import { Dashboard } from "../pages/dashboard"
import { FormLogin } from "../pages/login"
import { Navbar } from "../pages/Navbar"
import { FormSignUp } from "../pages/singUp"
import { ProtectedRoute } from "./protectedRoute"

export type ProtectedRouteProps = {
    isAuth: boolean
    authenticationPath: string
    outlet: JSX.Element
}

export default function MainRouter() {
    const isAuth = useSelector((state: RootState) => state.user.isAuth)

    const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
        isAuth: isAuth,
        authenticationPath: "/login",
    }

    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute
                            {...defaultProtectedRouteProps}
                            outlet={<Dashboard />}
                        />
                    }
                />
                <Route path="/signup" element={<FormSignUp />} />
                <Route path="/login" element={<FormLogin />} />
                <Route path="/" element={<Navigate replace to="/login" />} />
            </Routes>
        </Router>
    )
}
