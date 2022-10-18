import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
    setLoggedIn,
    selectIsLoggedIn,
} from "../../redux/reducers/authorization"
import { getAuthorizeHref } from "../../oauthConfig"
import { RootState } from "../../redux/store/store"

const getCode = () => {
    const url_string = window.location.href
    const url = new URL(url_string)
    const code = url.searchParams.get("code")
    return code
}

const code = getCode()

export function Authorization() {

    const isLoggedIn = useSelector(selectIsLoggedIn)
    const email = useSelector((state: RootState) => state.user.email)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!isLoggedIn) {

            const valuesToApi = {
                email,
                code
            }

            const getToken = async () => {
                const resp = await fetch(
                    "/api/v1/register/fitbit",
                    {
                        method: "POST",
                        body: JSON.stringify(valuesToApi),
                        headers: {
                            Accept: "application/json",
                        },
                    }
                )
                const ans = await resp.json()
                console.log(ans)
                if(ans.active_session){
                    dispatch(setLoggedIn(ans.active_session))
                }
            }
            getToken()
        }
    }, [])

    return (
        <div>
            <div className="flex justify-center">
                {!isLoggedIn && (
                    <button
                        className="border p-4"
                        aria-label="Log in using OAuth 2.0"
                        onClick={() => window.open(getAuthorizeHref(), "_self")}
                    >
                        Log in with Fitbit
                    </button>
                )}
            </div>
        </div>
    )
}
