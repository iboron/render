'use client'
import {usePathname} from 'next/navigation'

export default function Home() {
    const pathname = usePathname()

    // 将路径拆分成一个数组
    const pathArray = pathname.split('/');

    // 获取 projectId 和 pageId
    const projectId = pathArray[1];
    const pageId = pathArray[2];


    // 通过 projectId 获取应用信息
    console.log(projectId, pageId)

    // 判断 用户有没有登录，没有登录的话，需要去登录

    // 进入到登录页，获取用户登录权限信息，允许登录才可以登录，

    // 登录之后，渲染页面列表，页面内容单独使用 iframe 渲染
    
    return (
        <div className={'flex h-screen w-screen overflow-hidden'}>
            <div className={'flex-none w-64 border-r border-gray-200 bg-gray-50'}></div>
            <div className={'flex-auto'}>
                <div className={'h-12 border-b border-gray-200'}></div>
                <div className={'h-full'}>

                </div>
            </div>
        </div>
    )
}
