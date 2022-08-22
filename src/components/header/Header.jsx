import { Dropdown, Layout, Typography, Button, Input, Menu } from "antd";
import React from "react";
import { GlobalOutlined } from "@ant-design/icons"
import logo from "../../assets/logo.svg";
import "./Header.css"
import { useNavigate, Link } from 'react-router-dom'

export const Header = () => {

    const nav = useNavigate()

    return(
        <div className="app-header">
            <div className="top-header">
                <div className="inner">
                    <Typography.Text>
                        你猜我猜不猜
                    </Typography.Text>
                    <Dropdown.Button
                    style={{ marginLeft: 15 }}
                    icon={<GlobalOutlined/>}
                    overlay={
                        <Menu items={
                            [
                                {key:'1',label:'中文'},
                                {key:'2',label:'Englsh'}
                            ]
                        }/>
                    }>
                        语言
                    </Dropdown.Button>
                    <Button.Group className="button-group">
                        <Button onClick={()=>{nav('/register')}}>注册</Button>
                        <Button onClick={()=>{nav('/signIn')}}>登录</Button>
                    </Button.Group>
                </div>
            </div>
            <Layout.Header className="main-header">
                <Link to={'/'}>
                <img src={logo} alt="logo" className="App-logo"/>
            <Typography.Title className="title">
                React旅游网
            </Typography.Title>
            </Link>
            <Input.Search placeholder="情输入目的地，关键词" className="search-input"/>
            </Layout.Header>
            <Menu
            mode="horizontal"
            className="main-menu"
            items={
                [
                    { key: "1", label: "旅游首页" },
                    { key: "2", label: "周末游" },
                    { key: "3", label: "跟团游" },
                    { key: "4", label: "自由行" },
                    { key: "5", label: "私家团" },
                    { key: "6", label: "邮轮" },
                    { key: "7", label: "酒店+景点" },
                    { key: "8", label: "当地玩乐" },
                    { key: "9", label: "主题游" },
                    { key: "10", label: "定制游" },
                    { key: "11", label: "游学" },
                    { key: "12", label: "签证" },
                    { key: "13", label: "企业游" },
                    { key: "14", label: "高端游" },
                    { key: "15", label: "爱玩户外" },
                    { key: "16", label: "保险" }
                ]
            }/>
        </div>
    )
}