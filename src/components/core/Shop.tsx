import React from "react";
import Layout from "./Layout";
import {useSelector} from 'react-redux'

const Shop = () => {
    const state = useSelector(state => state)
    return <Layout title="拉钩商城" subTitle="拉钩商城展示">Shop {JSON.stringify(state)}</Layout>
}

export default Shop
