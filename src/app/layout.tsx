import {ReactNode} from 'react'
import './globals.css'

interface Props {
    children: ReactNode
    params: any;
}

export default function RootLayout(props: Props) {
    return (
        <html lang="zh-CN">
        <body>{props.children}</body>
        </html>
    )
}
