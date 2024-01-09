'use client'
import AdminLayout from "@/components/AdminLayout";

export default function Home(props: any) {

    const {params} = props;

    console.log(params);

    // 获取 projectId

    // 获取 pageId

    // 通过 projectId 获取信息

    return (
        <AdminLayout>
            <iframe width={'100%'} height={'100%'} src="https://product.shanda.cloud/2/"></iframe>
        </AdminLayout>

    )
}
