import * as React from "react"
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
} from "formik"
import { useNavigate } from "react-router-dom"

interface MyFormValues {
    email: string
    password: string
}

interface InputValues {
    field: any
    form: any
}

interface Props {
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}

const MyInput: React.FunctionComponent<InputValues> = ({ field, ...props }) => {
    return <input className="m-1" {...field} {...props} />
}

export const FormLogin: React.FC<Props> = ({ setIsAuth }) => {
    const initialValues: MyFormValues = { email: "", password: "" }

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
        console.log(ans)
        setIsAuth(true)
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
                                component={MyInput}
                            />
                        </div>

                        <button type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}
