import {ReactNode} from 'react'
import '../globals.css'
import AppProvider from "@/components/AppProvier";

interface Props {
    children: ReactNode
}

export default function RootLayout(props: Props) {

    return (
        <html lang="zh-CN">
        <body><AppProvider>{props.children}</AppProvider></body>
        </html>
    )
}
