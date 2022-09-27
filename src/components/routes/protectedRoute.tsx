import React from "react"
import { Navigate, Route, RouteProps } from "react-router-dom"


type ProtectedRouteProps = {
    isAuth: boolean
    authenticationPath: string
    outlet: JSX.Element
}

export function ProtectedRoute({ isAuth, authenticationPath, outlet }: ProtectedRouteProps) {

    if (isAuth) {
        return outlet
    }else {
        return <Navigate to={{pathname: authenticationPath}} />
    }

}
