import * as React from "react"
import { Formik, Form, Field } from "formik"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
    authentication,
    selectEmail,
    selectEmergencyContactEmail,
    selectEmergencyContactName,
    selectEmergencyContactPhoneNumber,
    selectName,
} from "../../redux/reducers/user"
import { setLoggedIn } from "../../redux/reducers/authorization"

interface PerfilValues {
    name: string
    email: string
}

interface PerfilValues2 {
    password: string
    email: string
}

interface PerfilValues3 {
    name_contact: string
    number_contact: string
    email_contact: string
    email: string
}

interface InputValues {
    field: any
    form: any
}

const MyInput: React.FunctionComponent<InputValues> = ({ field, ...props }) => {
    return <input className="my-2 text-black	" {...field} {...props} />
}

const InputPassword: React.FunctionComponent<InputValues> = ({
    field,
    ...props
}) => {
    return (
        <input
            className="m-1 text-black	"
            type="password"
            {...field}
            {...props}
        />
    )
}

export const FormPerfil: React.FC = () => {
    const email = useSelector(selectEmail)
    const name = useSelector(selectName)
    const contact_name = useSelector(selectEmergencyContactName)
    const contact_email = useSelector(selectEmergencyContactEmail)
    const contact_phone_number = useSelector(selectEmergencyContactPhoneNumber)

    const initialValues: PerfilValues = { name: "", email: "" }
    const initialValues2: PerfilValues2 = { password: "", email: "" }
    const initialValues3: PerfilValues3 = {
        name_contact: "",
        number_contact: "",
        email_contact: "",
        email: "",
    }
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleUpdateUserInformation = async (values: any) => {
        const resp = await fetch("/api/v1/user", {
            method: "PUT",
            body: JSON.stringify(values),
            headers: {
                Accept: "application/json",
            },
        })
        const ans = await resp.json()
        console.log(ans)
    }

    const handleUpdatePassword = async (values: any) => {
        const resp = await fetch("/api/v1/password", {
            method: "PUT",
            body: JSON.stringify(values),
            headers: {
                Accept: "application/json",
            },
        })
        const ans = await resp.json()
        console.log(ans)
    }

    const handleUpdateEmergencyContact = async (values: any) => {
        const resp = await fetch("/api/v1/emergency", {
            method: "PUT",
            body: JSON.stringify(values),
            headers: {
                Accept: "application/json",
            },
        })
        const ans = await resp.json()
        console.log(ans)
    }
    return (
        <div className="flex flex-col ">
            <div className="flex justify-center p-8 text-center">
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                        values = {
                            ...values,
                            email,
                        }
                        handleUpdateUserInformation(values)
                        //console.log({ values, actions })
                        //alert(JSON.stringify(values, null, 2))
                        //actions.setSubmitting(false)
                    }}
                >
                    <Form>
                        <h1 className="text-slate-100 pb-4">
                            UPDATE INFORMATION
                        </h1>
                        <div className="grid">
                            <div className="flex text-left ">
                                <label
                                    className="w-full mr-4"
                                    htmlFor="firstName"
                                >
                                    Name
                                </label>
                                <Field
                                    className="text-black"
                                    name="name"
                                    placeholder={name}
                                />
                            </div>

                            <button className="p-4" type="submit">
                                Update
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
            <div className="flex justify-center p-8 text-center">
                <Formik
                    initialValues={initialValues2}
                    onSubmit={(values, actions) => {
                        values = {
                            ...values,
                            email,
                        }
                        handleUpdatePassword(values)
                        //console.log({ values, actions })
                        //alert(JSON.stringify(values, null, 2))
                        //actions.setSubmitting(false)
                    }}
                >
                    <Form>
                        <h1 className="text-slate-100 pb-4">UPDATE PASSWORD</h1>
                        <div className="grid">
                            <div className="flex  text-left">
                                <label
                                    className="w-full mr-4"
                                    htmlFor="firstName"
                                >
                                    Password
                                </label>
                                <Field
                                    name="password"
                                    placeholder="password"
                                    component={InputPassword}
                                />
                            </div>
                            <div className="flex text-left">
                                <label
                                    className="w-full mr-4"
                                    htmlFor="firstName"
                                >
                                    Confirm Password
                                </label>
                                <Field
                                    name="confirm_password"
                                    placeholder="confirm password"
                                    component={InputPassword}
                                />
                            </div>

                            <button className="p-4" type="submit">
                                Update
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
            <div className="flex justify-center p-8 text-center">
                <Formik
                    initialValues={initialValues3}
                    onSubmit={(values, actions) => {
                        values = {
                            ...values,
                            email,
                        }
                        handleUpdateEmergencyContact(values)
                        //console.log({ values, actions })
                        //alert(JSON.stringify(values, null, 2))
                        //actions.setSubmitting(false)
                    }}
                >
                    <Form>
                        <h1 className="text-slate-100 pb-4">
                            EMERGENCY INFORMATION
                        </h1>
                        <div className="grid">
                            <div className="flex  text-left my-2">
                                <label
                                    className="w-full mr-4"
                                    htmlFor="firstName"
                                >
                                    Name
                                </label>
                                <Field
                                    className="text-black"
                                    name="name_contact"
                                    placeholder={contact_name}
                                />
                            </div>
                            <div className="flex  text-left">
                                <label
                                    className="w-full mr-4"
                                    htmlFor="firstName"
                                >
                                    Phone Number
                                </label>
                                <Field
                                    className="text-black"
                                    name="number_contact"
                                    placeholder={contact_phone_number}
                                />
                            </div>
                            <div className="flex  text-left">
                                <label
                                    className="w-full mr-4"
                                    htmlFor="firstName"
                                >
                                    Email
                                </label>
                                <Field
                                    name="emai_contact"
                                    placeholder={contact_email}
                                    component={MyInput}
                                />
                            </div>

                            <button className="p-4" type="submit">
                                Update
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
