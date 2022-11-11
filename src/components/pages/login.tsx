import * as React from "react"
import {
    Formik,
    Form,
    Field,
} from "formik"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { authentication } from "../../redux/reducers/user"
import { setLoggedIn } from "../../redux/reducers/authorization"

interface MyFormValues {
    email: string
    password: string
}

interface InputValues {
    field: any
    form: any
}



const MyInput: React.FunctionComponent<InputValues> = ({ field, ...props }) => {
    return <input className="m-1 text-black	" {...field} {...props} />
}

const InputPassword: React.FunctionComponent<InputValues> = ({ field, ...props }) => {
    return <input className="m-1 text-black	" type="password" {...field} {...props} />
}

export const FormLogin: React.FC = () => {
    const initialValues: MyFormValues = { email: "", password: "" }
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleLogin = async (values: MyFormValues) => {
        const resp = await fetch("/api/v1/login", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                Accept: "application/json",
            },
        })
        const ans = await resp.json()
        if(ans.code === 200){
            dispatch(authentication({email: ans.email, name: ans.name}))
            dispatch(setLoggedIn(ans.active_session))
        }
        navigate("/dashboard")
    }

    return (
        <div className="flex justify-center text-center	">
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    handleLogin(values)
                    //console.log({ values, actions })
                    //alert(JSON.stringify(values, null, 2))
                    //actions.setSubmitting(false)
                }}
            >
                <Form>
                    <h1 className="text-slate-100">LOGIN</h1>
                    <div className="grid">
                        <div className="flex  text-left">
                            <label className="w-full mr-4" htmlFor="firstName">
                                Email
                            </label>
                            <Field
                                name="email"
                                placeholder="email"
                                component={MyInput}
                            />
                        </div>
                        <div className="flex text-left">
                            <label className="w-full mr-4" htmlFor="firstName">
                                Password
                            </label>
                            <Field     
                                name="password"
                                placeholder="password"
                                component={InputPassword}
                            />
                        </div>

                        <button type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}
