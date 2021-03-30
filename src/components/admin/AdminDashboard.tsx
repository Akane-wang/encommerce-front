import React from 'react'
import Layout from '../core/Layout'
import {Row, Col, Menu} from 'antd'
import {Link} from 'react-router-dom'

import {
    ShoppingCartOutlined,
    UserOutlined,
    OrderedListOutlined
} from '@ant-design/icons'

import {Typography, Descriptions} from 'antd'
import { Jwt } from '../../store/models/auth'
import { isAuth } from '../../helpers/auth'
const {Title} = Typography

const AdminDashboard =  () => {

    const {user: {name,email}} = isAuth() as Jwt
    const adminLinks = () => (
        <>
        <Title level={5}>管理员链接</Title>
        <Menu>
            <ShoppingCartOutlined/>
            <Menu.Item>
                <Link to="">添加分类</Link>
            </Menu.Item>
            <UserOutlined/>
            <Menu.Item>
                <Link to="">添加产品</Link>
            </Menu.Item>
            <OrderedListOutlined/>
            <Menu.Item>
                <Link to="">订单列表</Link>
            </Menu.Item>
        </Menu>
        </>
    )

    const adminInfo = () => (
        <Descriptions title="管理员信息" bordered>
            <Descriptions.Item label="昵称">{name}</Descriptions.Item>
            <Descriptions.Item label="邮件">{email}</Descriptions.Item>
            <Descriptions.Item label="角色">管理员</Descriptions.Item>
        </Descriptions>
    )
    return (
        <Layout title="管理员 Dashboard" subTitle="">
            <Row gutter={10}>
                <Col span="4">{adminLinks()}</Col>
                <Col span="20">{adminInfo()}</Col>
            </Row>
        </Layout>
    )
}

export default AdminDashboard