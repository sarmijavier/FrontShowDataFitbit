import React, { useState } from "react"
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Navigate,
} from "react-router-dom"
import { Dashboard } from "../pages/dashboard"
import { FormLogin } from "../pages/login"
import { FormSignUp } from "../pages/singUp"
import { ProtectedRoute } from "./protectedRoute"

export type ProtectedRouteProps = {
    isAuth: boolean
    authenticationPath: string
    outlet: JSX.Element
}

export default function MainRouter() {
    const [isAuth, setIsAuth] = useState(false)

    const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
        isAuth: isAuth,
        authenticationPath: "/login",
    }

    return (
        <Router>
            <div className="">
                <nav>
                    <ul className="flex flex-row justify-center">
                        <li className="m-12 text-slate-100	">
                            <Link to="/login">Login</Link>
                        </li>
                        <li className="m-12 text-slate-100	">
                            <Link to="/signup">SignUp</Link>
                        </li>
                        <li className="m-12 text-slate-100	">
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route
                        path="/dashboard"
                        element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<Dashboard />} />}
                    />
                    <Route path="/signup"  element={<FormSignUp />} />
                    <Route
                        path="/login"
                        element={<FormLogin setIsAuth={setIsAuth} />}
                    />
                    <Route
                        path="/"
                        element={<Navigate replace to="/login" />}
                    />
                </Routes>
            </div>
        </Router>
    )
}
