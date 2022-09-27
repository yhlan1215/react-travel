import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { CaretDownOutlined } from "@ant-design/icons";
import { Layout, Menu, Dropdown, Button } from "antd";
import styled from "styled-components";
const { Header, Footer, Content } = Layout;

const UserLayoutContainer = styled(Layout)`
    height: 100vh;
    background-image: url("https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg") !important;
    background-size: 100% !important;  
    background-repeat: no-repeat;
    background-position: center 110px;
`
const UserHeader = styled(Header)`
    background: transparent !important;
`
const UsserHeaderLang = styled.div`
        float: right;
`
const UserContent = styled(Content)`
    flex: 1;    
    padding: 32px 0;
`
const UserContentTop = styled.div`
    text-align: center;
`
const UserContentHeader = styled.div`
    height: 44px;
    line-height: 44px;
`
const UserContentLogo = styled.img`
    height: 44px;
    margin-right: 16px;
    vertical-align: top;
    float: none;
`
const UserContentTitle = styled.span`
    position: relative;
    top: 2px;
    color: #1890ff;
    font-weight: 600;
    font-size: 33px;
    font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
`
const UserContentDesc = styled.div`
    margin-top: 16px;
    margin-bottom: 40px;
`

export const UserLayout = (props) => {
  const menu = (
    <Menu>
      <Menu.Item>中文</Menu.Item>
      <Menu.Item>English</Menu.Item>
    </Menu>
  );

  return (
    <UserLayoutContainer>
      <UserHeader>
        <UsserHeaderLang>
          <Dropdown overlay={menu}>
            <Button>
              {" "}
              选择语言 <CaretDownOutlined />
            </Button>
          </Dropdown>
        </UsserHeaderLang>
      </UserHeader>
      <UserContent>
        <UserContentTop>
          <UserContentHeader>
            <Link to="/">
              <UserContentLogo alt="logo"  src={logo} />
              <UserContentTitle>React 旅游网</UserContentTitle>
            </Link>
          </UserContentHeader>
          <UserContentDesc>
            你猜我猜不猜
          </UserContentDesc>
          {props.children}
        </UserContentTop>
      </UserContent>
      <Footer style={{ textAlign: "center" }}>Footer就不写了，太累了</Footer>
    </UserLayoutContainer>
  );
};