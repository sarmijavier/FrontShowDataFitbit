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
import { selectEmail } from "../../redux/reducers/user"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top" as const,
        },
        title: {
            display: true,
            text: "Heart Rate last 10 Days",
        },
    },
}

const labelsProvi = ["January", "February", "March", "April", "May", "June", "July"]


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

export interface HrState {
    heart_rate_avg: number
}

export interface DataState {
    data: object
}

export function Dashboard() {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const email = useSelector(selectEmail)

    const [data, setData] =  useState<{labels: any; datasets: any}>({
        labels: "",
        datasets: 0,
    })

    const handleRequest = async () => {
        const resp = await fetch("/api/v1/hr", {
            method: "POST",
            body: JSON.stringify({email: email}),
            headers: {
                Accept: "application/json",
            },
        })
        const ans = await resp.json()

        const labels = ans.map(({complete_date}: DateState) => complete_date).slice(0,10)
        

        const dataTemplate = {
            labels,
            datasets: [
                {
                    label: "User 1",
                    data: ans.slice(0,10).map(({heart_rate_avg}: HrState) =>
                        heart_rate_avg
                    ),
                    backgroundColor: "rgba(0,255,0,0.7)",
                }
            ],
        }
        setData(dataTemplate)
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
            <br/>
            <Authorization/>
            
            <Bar options={options} data={data } />
        </div>
    )
}
