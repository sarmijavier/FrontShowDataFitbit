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
    firstName: string
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

export const FormSignUp = () => {
    const initialValues: MyFormValues = { firstName: "" }
    const navigate = useNavigate()

    const handleRegister = async (values: MyFormValues) => {
        const resp = await fetch("/api/v1/register", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                Accept: "application/json",
            },
        })
        const ans = await resp.json()
        console.log(ans)
        navigate("/login")
    }

    return (
        <div className="flex justify-center text-center	">
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    handleRegister(values)
                    //console.log({ values, actions })
                    //alert(JSON.stringify(values, null, 2))
                    //actions.setSubmitting(false)
                }}
            >
                <Form>
                    <h1 className="text-slate-100">SIGN UP</h1>
                    <div className="grid">
                        <div className="flex  text-left">
                            <label className="w-full mr-4" htmlFor="firstName">
                                Name
                            </label>
                            <Field
                                name="name"
                                placeholder="name"
                                component={MyInput}
                            />
                        </div>
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
                        <div className="flex  text-left">
                            <label className="w-full mr-4" htmlFor="firstName">
                                Password
                            </label>
                            <Field
                                name="password"
                                placeholder="password"
                                component={InputPassword}
                            />
                        </div>
                        <div className="flex text-left">
                            <label className="w-full mr-4" htmlFor="firstName">
                                Confirm Password
                            </label>
                            <Field
                                name="confirm_password"
                                placeholder="confirm password"
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
