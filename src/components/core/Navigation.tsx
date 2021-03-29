import React from 'react'
import {Link} from 'react-router-dom'
import {Menu} from 'antd'
import {useSelector} from 'react-redux'
import {RouterState} from 'connected-react-router'
import {AppState} from '../../store/reducers/index'
import { isAuth } from '../../helpers/auth'
import { Jwt } from '../../store/models/auth'

const Navigation = () => {
    function useActive(currentPath: string, path: string):string {
        return currentPath === path?'ant-menu-item-selected':''
    }
    const router = useSelector<AppState, RouterState>(state => state.router);
    const currentPath = router.location.pathname
    const isHome = useActive(currentPath,'/');
    const isShop = useActive(currentPath, '/shop')
    const isSignin = useActive(currentPath,'/signin')
    const isSignup = useActive(currentPath,'/signup')
    const isDashboard = useActive(currentPath, getDashboardUrl())

    function getDashboardUrl():string {
        let url = '/user/dashboard'
        const auth = isAuth()
        if(auth) {
            const {user: {role}} = auth as Jwt
            if(role === 1) {
                url = '/admin/dashboard'
            }
        }

        return url
    }
    return (
    <Menu mode="horizontal" selectable={false}>
        <Menu.Item className={isHome}>
            <Link to='/'>首页</Link>
        </Menu.Item>
        <Menu.Item className={isShop}>
            <Link to='/shop'>商城</Link>
        </Menu.Item>
        {
            !isAuth() && 
            <>
                <Menu.Item className={isSignup}>
                    <Link to='/signup'>注册</Link>
                </Menu.Item>
                <Menu.Item className={isSignin}>
                    <Link to='/signin'>登录</Link>
                </Menu.Item>
            </>
        }
        {
            isAuth() && <Menu.Item className={isDashboard}>
                            <Link to={getDashboardUrl()}>dashboard</Link>
                        </Menu.Item>
        }
    </Menu>)
}

export default Navigation;