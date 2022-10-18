import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { RootState } from "../../redux/store/store"
import React from "react"

export const Navbar: React.FC = () => {
    const isAuth = useSelector((state: RootState) => state.user.isAuth)

    return (
        <div>
            <nav className="">
                {!isAuth ? (
                    <ul className="flex flex-row justify-center">
                        <li className="m-12 ">
                            <Link to="/login">Login</Link>
                        </li>
                        <li className="m-12 text-slate-100">
                            <Link to="/signup">SignUp</Link>
                        </li>
                    </ul>
                ) : (
                    <ul className="flex flex-row justify-center">
                        <li className="m-12">
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                )}
            </nav>
        </div>
    )
}
