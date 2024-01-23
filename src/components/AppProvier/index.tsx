'use client'
import {ReactNode} from "react"

interface Props {
    children: ReactNode
}

export default function AppProvider(props: Props) {

    return (
        <>
            {props.children}
        </>
    )
}