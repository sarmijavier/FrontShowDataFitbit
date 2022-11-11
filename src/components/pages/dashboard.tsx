import React, { useEffect, useState } from "react"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"
import { Bar } from "react-chartjs-2"
import faker from "faker"
import { Authorization } from "../authorization/Authorization"
import { Navbar } from "./Navbar"
import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../../redux/reducers/authorization"
import { selectEmail, selectName } from "../../redux/reducers/user"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const labelsProvi = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
]

export const dataProvi = {
    labels: labelsProvi,
    datasets: [
        {
            label: "Dataset 1",
            data: labelsProvi.map(() =>
                faker.datatype.number({ min: 0, max: 1000 })
            ),
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
            label: "Dataset 2",
            data: labelsProvi.map(() =>
                faker.datatype.number({ min: 0, max: 1000 })
            ),
            backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
    ],
}

export interface DateState {
    complete_date: string
}

export interface ActivityState {
    calories: number
    distance: number
    steps: number
}

export interface BreathState {
    breath_rate: number
}

export interface HrState {
    heart_rate_avg: number
}

export function Dashboard() {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const email = useSelector(selectEmail)
    const name = useSelector(selectName)

    const [dataActivity, setDataActivity] = useState<{
        dataCalories: any
        dataDistance: any
        dataSteps: any
    }>({
        dataCalories: {
            labels: labelsProvi,
            datasets: [
                {
                    label: "Dataset 1",
                    data: labelsProvi.map(() =>
                        faker.datatype.number({ min: 0, max: 1000 })
                    ),
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                },
                {
                    label: "Dataset 2",
                    data: labelsProvi.map(() =>
                        faker.datatype.number({ min: 0, max: 1000 })
                    ),
                    backgroundColor: "rgba(53, 162, 235, 0.5)",
                },
            ],
        },
        dataDistance: {
            labels: labelsProvi,
            datasets: [
                {
                    label: "Dataset 1",
                    data: labelsProvi.map(() =>
                        faker.datatype.number({ min: 0, max: 1000 })
                    ),
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                },
                {
                    label: "Dataset 2",
                    data: labelsProvi.map(() =>
                        faker.datatype.number({ min: 0, max: 1000 })
                    ),
                    backgroundColor: "rgba(53, 162, 235, 0.5)",
                },
            ],
        },
        dataSteps: {
            labels: labelsProvi,
            datasets: [
                {
                    label: "Dataset 1",
                    data: labelsProvi.map(() =>
                        faker.datatype.number({ min: 0, max: 1000 })
                    ),
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                },
                {
                    label: "Dataset 2",
                    data: labelsProvi.map(() =>
                        faker.datatype.number({ min: 0, max: 1000 })
                    ),
                    backgroundColor: "rgba(53, 162, 235, 0.5)",
                },
            ],
        },
    })

    const [dataBreath, setDataBreath] = useState<{
        labels: any
        datasets: any
    }>({
        labels: labelsProvi,
        datasets: [
            {
                label: "Dataset 1",
                data: labelsProvi.map(() =>
                    faker.datatype.number({ min: 0, max: 1000 })
                ),
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ]
    })

    const [dataFood, setDataFood] = useState<{
        food: any[]
    }>({
        food: [1, 2, 3, 4],
    })

    const [dataHr, setDataHr] = useState<{
        labels: any
        datasets: any
    }>({
        labels: labelsProvi,
        datasets: [
            {
                label: "Dataset 1",
                data: labelsProvi.map(() =>
                    faker.datatype.number({ min: 0, max: 1000 })
                ),
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ]
    })

    const [dataSleep, setDataSleep] = useState<{
        labels: any
        datasets: any
    }>({
        labels: labelsProvi,
        datasets: [
            {
                label: "Dataset 1",
                data: labelsProvi.map(() =>
                    faker.datatype.number({ min: 0, max: 1000 })
                ),
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ]
    })

    const [dataSpo, setDataSpo] = useState<{
        labels: any
        datasets: any
    }>({
        labels: labelsProvi,
        datasets: [
            {
                label: "Dataset 1",
                data: labelsProvi.map(() =>
                    faker.datatype.number({ min: 0, max: 1000 })
                ),
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ]
    })

    const [dataTemperature, setDataTemperature] = useState<{
        labels: any
        datasets: any
    }>({
        labels: labelsProvi,
        datasets: [
            {
                label: "Dataset 1",
                data: labelsProvi.map(() =>
                    faker.datatype.number({ min: 0, max: 1000 })
                ),
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ]
    })

    const [dataWeight, setDataWeight] = useState<{
        labels: any
        datasets: any
    }>({
        labels: labelsProvi,
        datasets: [
            {
                label: "Dataset 1",
                data: labelsProvi.map(() =>
                    faker.datatype.number({ min: 0, max: 1000 })
                ),
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ]
    })


    const handleRequest = async () => {
        const resp = await fetch("/api/v1/dashboard", {
            method: "POST",
            body: JSON.stringify({ email: email }),
            headers: {
                Accept: "application/json",
            },
        })
        const ans = await resp.json()
        console.log(ans)
        const labelsActivity = ans["activity"].map(
            ({ complete_date }: DateState) => complete_date
        )

        const dataCalories = {
            labels: labelsActivity,
            datasets: [
                {
                    label: "Calories",
                    data: ans["activity"].map(
                        ({ calories }: ActivityState) => calories
                    ),
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                },
            ],
        }
        const dataDistance = {
            labels: labelsActivity,
            datasets: [
                {
                    label: "Distance",
                    data: ans["activity"].map(
                        ({ distance }: ActivityState) => distance
                    ),
                    backgroundColor: "rgba(53, 162, 235, 0.5)",
                },
            ],
        }

        const dataSteps = {
            labels: labelsActivity,
            datasets: [
                {
                    label: "Steps",
                    data: ans["activity"].map(
                        ({ steps }: ActivityState) => steps
                    ),
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                },
            ],
        }
        const dataActivity = {
            dataCalories,
            dataDistance,
            dataSteps,
        }

        setDataActivity(dataActivity)

        const labelsBreath = ans["breath"].map(
            ({ complete_date }: DateState) => complete_date
        )
        const dataBreath = {
            labels: labelsBreath,
            datasets: [
                {
                    label: "Breathing Rate",
                    data: ans["breath"].map(
                        ({ breath_rate }: BreathState) => breath_rate
                    ),
                    backgroundColor: "rgba(53, 162, 235, 0.5)",
                },
            ],
        }

        setDataBreath(dataBreath)
        setDataFood(ans)

        const labelsHr = ans["hr"].map(
            ({ complete_date }: DateState) => complete_date
        )
        const dataHr = {
            labels: labelsHr,
            datasets: [
                {
                    label: "Heart Rate Rate",
                    data: ans["hr"].map(
                        ({ heart_rate_avg }: HrState) => heart_rate_avg
                    ),
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                },
            ],
        }


        setDataHr(dataHr)

        const labelsSleep = ans["sleep"].map(
            ({ complete_date }: DateState) => complete_date
        )
        const dataSleep = {
            labels: labelsSleep,
            datasets: [
                {
                    label: "Sleep Rate",
                    data: ans["sleep"].map(
                        ({ minutes }: any) => minutes
                    ),
                    backgroundColor: "rgba(53, 162, 235, 0.5)",
                },
            ],
        }


        setDataSleep(dataSleep)
    
        const labelsSpo = ans["spo"].map(
            ({ complete_date }: DateState) => complete_date
        )
        const dataSpo = {
            labels: labelsSpo,
            datasets: [
                {
                    label: "Blood oxygen saturation Rate",
                    data: ans["spo"].map(
                        ({ avg }: any) => avg
                    ),
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                },
            ],
        }


        setDataSpo(dataSpo)

            
        const labelsTemperature = ans["temperature"].map(
            ({ complete_date }: DateState) => complete_date
        )
        const dataTemperature = {
            labels: labelsTemperature,
            datasets: [
                {
                    label: "Temperature Average",
                    data: ans["temperature"].map(
                        ({ temperature }: any) => temperature
                    ),
                    backgroundColor: "rgba(53, 162, 235, 0.5)",
                },
            ],
        }


        setDataTemperature(dataTemperature)

        const labelsWeight = ans["weight"].map(
            ({ complete_date }: DateState) => complete_date
        )
        const dataWeight = {
            labels: labelsWeight,
            datasets: [
                {
                    label: "Bmi",
                    data: ans["weight"].map(
                        ({ bmi }: any) => bmi
                    ),
                    backgroundColor: "rgba(53, 162, 235, 0.5)",
                },
                {
                    label: "Fat",
                    data: ans["weight"].map(
                        ({ fat }: any) => fat
                    ),
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                },
                {
                    label: "Weight",
                    data: ans["weight"].map(
                        ({ weight }: any) => weight
                    ),
                    backgroundColor: "rgba(45, 123, 12, 0.5)",
                },
            ],
        }


        setDataWeight(dataWeight)
    }

    useEffect(() => {
        handleRequest()
    }, [])

    return (
        <div className="p-12">
            {!isLoggedIn && (
                <p className="text-center">
                    Before to start we need you to log in on your Fitbit account
                </p>
            )}
            <br />
            <Authorization />
            <div className="text-2xl pb-12">
                <h1>Welcome aboard {name}</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <Bar
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: "top" as const,
                                },
                                title: {
                                    display: true,
                                    text: "Calories in the last 10 days",
                                },
                            },
                        }}
                        data={dataActivity["dataCalories"]}
                    />
                </div>
                <div>
                    <Bar
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: "top" as const,
                                },
                                title: {
                                    display: true,
                                    text: "Distance in the last 10 days",
                                },
                            },
                        }}
                        data={dataActivity["dataDistance"]}
                    />
                </div>
                <div>
                    <Bar
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: "top" as const,
                                },
                                title: {
                                    display: true,
                                    text: "Steps in the last 10 days",
                                },
                            },
                        }}
                        data={dataActivity["dataSteps"]}
                    />
                </div>
                <div>
                    <Bar
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: "top" as const,
                                },
                                title: {
                                    display: true,
                                    text: "Breathing rate in the last 10 days",
                                },
                            },
                        }}
                        data={dataBreath}
                    />
                </div>
                <div className="flex justify-center">
                    <table className="table-auto">
                        <tr>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Calories</th>
                            <th>Carbs</th>
                            <th>Fat</th>
                            <th>Fiber</th>
                            <th>Protein</th>
                            <th>Sodium</th>
                            <th>Water</th>
                        </tr>
                        <tbody>
                            {
                                dataFood.food.map(({ id, name, amount, calories, carbs, fat, fiber, protein, sodium, water }: any) => (
                                    <tr key={id} className="text-center">
                                        <td>{name}</td>
                                        <td>{amount}</td>
                                        <td>{calories}</td>
                                        <td>{carbs}</td>
                                        <td>{fat}</td>
                                        <td>{fiber}</td>
                                        <td>{protein}</td>
                                        <td>{sodium}</td>
                                        <td>{water}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    <Bar
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: "top" as const,
                                },
                                title: {
                                    display: true,
                                    text: "Heart rate in the last 10 days",
                                },
                            },
                        }}
                        data={dataHr}
                    />
                </div>
                <div>
                    <Bar
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: "top" as const,
                                },
                                title: {
                                    display: true,
                                    text: "Sleep rate in the last 10 days",
                                },
                            },
                        }}
                        data={dataSleep}
                    />
                </div>
                <div>
                    <Bar
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: "top" as const,
                                },
                                title: {
                                    display: true,
                                    text: "Spo the last 10 days",
                                },
                            },
                        }}
                        data={dataSpo}
                    />
                </div>
                <div>
                    <Bar
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: "top" as const,
                                },
                                title: {
                                    display: true,
                                    text: "Temperature in the last 10 days",
                                },
                            },
                        }}
                        data={dataTemperature}
                    />
                </div>

                <div>
                    <Bar
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: "top" as const,
                                },
                                title: {
                                    display: true,
                                    text: "Weight in the last 10 days",
                                },
                            },
                        }}
                        data={dataWeight}
                    />
                </div>
            </div>
        </div>
    )
}
