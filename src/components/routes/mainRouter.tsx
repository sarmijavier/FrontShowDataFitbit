import React from "react"
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from "react-router-dom"
import { FormLogin } from "../pages/login"
import { FormSignUp } from "../pages/singUp"

export default function MainRouter() {
    return (
        <Router>
            <div className="">
                <nav >
                    <ul className="flex flex-row justify-center" >
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
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/signup" element={<FormSignUp />} />
                    <Route path="/login" element={<FormLogin />} />
                    <Route path="/" element={<Navigate replace to="/login" />} />
                </Routes>
            </div>
        </Router>
    )
}


function Dashboard() {
    return <h2>Dashboard</h2>
}
