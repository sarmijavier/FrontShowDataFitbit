import * as React from "react"
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
} from "formik"

interface MyFormValues {
    firstName: string
}

interface InputValues {
    field: any
    form: any
}
const MyInput: React.FunctionComponent<InputValues> = ({ field, ...props }) => {
    return <input className="m-1" {...field} {...props} />
}

export const FormSignUp = () => {
    const initialValues: MyFormValues = { firstName: "" }
    return (
        <div>
            <h1>LOGIN</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log({ values, actions })
                    alert(JSON.stringify(values, null, 2))
                    actions.setSubmitting(false)
                }}
            >
                <Form>
                    <div className="grid">
                        <div className="flex  text-left">
                            <label className="w-full mr-4" htmlFor="firstName">Email</label>
                            <Field
                                name="email"
                                placeholder="email"
                                component={MyInput}
                            />
                        </div>
                        <div className="flex text-left">
                            <label className="w-full mr-4" htmlFor="firstName">Password</label>
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
