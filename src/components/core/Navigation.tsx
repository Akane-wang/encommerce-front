import React from 'react'
import {Link} from 'react-router-dom'
import {Menu} from 'antd'
import {useSelector} from 'react-redux'
import {RouterState} from 'connected-react-router'
import {AppState} from '../../store/reducers/index'

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
    return (
    <Menu mode="horizontal" selectable={false}>
        <Menu.Item className={isHome}>
            <Link to='/'>首页</Link>
        </Menu.Item>
        <Menu.Item className={isShop}>
            <Link to='/shop'>商城</Link>
        </Menu.Item>
        <Menu.Item className={isSignup}>
            <Link to='/signup'>注册</Link>
        </Menu.Item>
        <Menu.Item className={isSignin}>
            <Link to='/signin'>登录</Link>
        </Menu.Item>
    </Menu>)
}

export default Navigation;