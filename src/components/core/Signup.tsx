import React, { useEffect } from 'react'
import Layout from './Layout'
import {Form, Input, Button,Result} from 'antd'
import {SignupPreload,signup} from '../../store/actions/auth.actions'
import {useDispatch,useSelector} from 'react-redux'
import {AuthState} from '../../store/reducers/auth.reducer'
import {AppState} from '../../store/reducers/index'
import {Link} from 'react-router-dom'

const Signup = () => {
    const dispatch = useDispatch()
    const onFinish = (value: SignupPreload) => {
        dispatch(signup(value))
    }

    const auth = useSelector<AppState, AuthState>(state => state.auth)

    const [form] = Form.useForm()
    // 注册成功，清空表单
    useEffect(() => {
        if(auth.signup.loaded && auth.signup.success) {
            form.resetFields()
        }
    },[auth])

    const showSuccess = () => {
        if(auth.signup.loaded && auth.signup.success) {
            return <Result 
                    status='success'
                    title='注册成功'
                    extra={[
                        <Button type='primary' key='console'><Link to='/signin'>登录</Link></Button>
                    ]}
                />
        }
    }

    const showError = () => {
        if(auth.signup.loaded && !auth.signup.success) {
            return <Result 
                    status='success'
                    title='注册失败'
                    subTitle={auth.signup.message}
                />
        }
    }

    useEffect(() => {
        return () => {

        }
    },[])

    const signupForm = () => {
        return <Form form={form} onFinish={onFinish}>
        <Form.Item name="name" label="昵称">
            <Input />
        </Form.Item>
        <Form.Item name="password" label="密码">
            <Input.Password />
        </Form.Item>
        <Form.Item name="email" label="邮箱">
            <Input />
        </Form.Item>
        <Form.Item name="name">
            <Button type="primary" htmlType="submit">注册</Button>
        </Form.Item>
    </Form>
    }
    return <Layout title="注册" subTitle="">
        {showSuccess()}
        {showError()}
        {signupForm()}
    </Layout>
}

export default Signup