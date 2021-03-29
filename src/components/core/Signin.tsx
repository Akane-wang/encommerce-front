import React, { useEffect } from 'react'
import Layout from './Layout'
import {Form, Input, Button, Result} from 'antd'
import { SigninPayload, signin } from '../../store/actions/auth.actions'
import {useDispatch, useSelector} from 'react-redux'
import { AppState } from '../../store/reducers'
import { AuthState } from '../../store/reducers/auth.reducer'
import { Jwt } from '../../store/models/auth'
import { isAuth } from '../../helpers/auth'
import {Redirect} from 'react-router'

const Signin = () => {
    
    const dispatch = useDispatch()
    const onFinish = (value: SigninPayload) => {
        dispatch(signin(value))
    }
    const [form] = Form.useForm()
    const auth = useSelector<AppState, AuthState>(state => state.auth)

    const showError = () => {
        if(auth.signin.loaded && !auth.signin.success) {
            return (
                <Result 
                    status='warning'
                    title='登录失败'
                    subTitle={auth.signin.message}
                />
            )
        }
    }

    const redirectToDashboard = () => {
        const auth = isAuth()
        if(auth) {
            const {user: {role}} = auth as Jwt
    
            if(role === 0) {
                return <Redirect to='/user/dashboard' />
            } else {
                return <Redirect to='/admin/dashboard' />
            }
        }
    }

    useEffect(()=> {
        if(auth.signin.loaded && auth.signin.success) {
            form.resetFields()
        }
    },[auth])
    const signinForm = () => {
        return <Form form = {form} onFinish={onFinish}>
        <Form.Item name="password" label="密码">
            <Input.Password />
        </Form.Item>
        <Form.Item name="email" label="邮箱">
            <Input />
        </Form.Item>
        <Form.Item name="name">
            <Button type="primary" htmlType="submit">登录</Button>
        </Form.Item>
    </Form>
    }
    return <Layout title="登录" subTitle="">
        {showError()}
        {redirectToDashboard()}
        {signinForm()}
    </Layout>
}
export default Signin