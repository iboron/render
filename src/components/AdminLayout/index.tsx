'use client'
import {ReactNode} from "react"

interface Props {
    children: ReactNode
}

export default function AdminLayout(props: Props) {
    return (
        <div className={'flex w-full h-screen overflow-hidden'}>
            <aside className={'flex-none w-48 border-r border-gray-200'}></aside>
            <main className={'flex-auto'}>
                <header className={'h-12  border-b border-gray-200'}></header>
                <main className={'h-full'}>
                    {props.children}
                </main>
            </main>
        </div>
    )
}