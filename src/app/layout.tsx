import React from 'react';
import {AntdRegistry} from '@ant-design/nextjs-registry';
import 'antd/dist/reset.css';

const RootLayout = ({children}: React.PropsWithChildren) => (
    <html lang="zh-cn">
    <body>
    <AntdRegistry>{children}</AntdRegistry>
    </body>
    </html>
);

export default RootLayout;


