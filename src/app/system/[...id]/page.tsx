'use client'
import {Layout,} from 'antd';
import styles from './page.module.css'

export default function Home() {

    const {Sider, Header, Content} = Layout;

    return (
        <Layout className={styles.layout}>
            <Sider width={240} className={styles.sider}>
                Sider
            </Sider>
            <Layout>
                <Header className={styles.header}>Header</Header>
                <Content>Content</Content>
            </Layout>
        </Layout>
    );
}
