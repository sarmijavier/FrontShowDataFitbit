import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { RootState } from "../../redux/store/store"
import React from "react"
import { cleanStateUser } from "../../redux/reducers/user"
import { cleanStateAuth } from "../../redux/reducers/authorization"

export const Navbar: React.FC = () => {
    const isAuth = useSelector((state: RootState) => state.user.isAuth)
    const dispatch = useDispatch()
    return (
        <div>
            <nav className="">
                {!isAuth ? (
                    <ul className="flex flex-row justify-center">
                        <li className="m-12 ">
                            <Link to="/login">Iniciar Sesión</Link>
                        </li>
                        <li className="m-12 text-slate-100">
                            <Link to="/signup">Registrarse</Link>
                        </li>
                    </ul>
                ) : (
                    <ul className="flex flex-row justify-center">
                        <div className="flex justify-between w-full">
                            <div className="flex flex-col lg:flex-row">
                                <li className="m-12">
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li className="m-12">
                                    <Link to="/perfil">Perfil</Link>
                                </li>
                            </div>
                            <li className="m-12">
                                <button
                                    onClick={() => {
                                        dispatch(cleanStateAuth())
                                        dispatch(cleanStateUser())
                                    }}
                                >
                                    Cerrar sesión
                                </button>
                            </li>
                        </div>
                    </ul>
                )}
            </nav>
        </div>
    )
}
