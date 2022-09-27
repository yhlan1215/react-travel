import { Dropdown, Layout, Typography, Button, Input, Menu } from "antd";
import React from "react";
import { GlobalOutlined } from "@ant-design/icons"
import logo from "../../assets/logo.svg";
import { useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import { changeLanguageActionCreator } from "../../redux/language/languageActions";
import { useTranslation } from "react-i18next";

const AppHeader = styled.div`
    background-color: white !important;
`
const RightButtonGroup = styled(Button.Group)`
    float: right;
    margin-top: 5px;
`
const TopHeader = styled.div`
    background-color: aliceblue;
    height: 40px;
    line-height: 40px;
`
const Inner = styled.div`
    width: 75%;
`
const MainHeader = styled(Layout.Header)`
    height: 60px;
    background-color: white;
    width: 100%;
    float: left;
`
const AppLogo = styled.img`
    height: 60px;
    width: 60px;
    float: left;
    margin-left: 80px;
` 
const AppTitle = styled(Typography.Title)`
    color: #03A9F4 !important;
    float: left;
`
const SearchInput = styled(Input.Search)`
    width: 400px !important;
    line-height: 64px;
    margin-top: 17px;
    margin-left: 37px;
`
const MainMenu = styled(Menu)`
    padding-left: 7% !important;
    padding-right: 7% !important;
    background-color: aliceblue !important;
    color: black !important;
`

export const Header = () => {

    const nav = useNavigate()
    const language = useSelector((state) => state.language)
    console.log(language)
    const languageList = useSelector((state) => state.languageList)
    const dispatch = useDispatch()
    const {t} =useTranslation()

    const onMenuClick = (e) => {
        dispatch(changeLanguageActionCreator(e.key))
    }

    return(
        <AppHeader>
            <TopHeader>
                <Inner>
                    <Typography.Text>
                        {t('header.slogan')}
                    </Typography.Text>
                    <Dropdown.Button
                        style={{ marginLeft: 15 }}
                        icon={<GlobalOutlined/>}
                        overlay={
                            <Menu
                            onClick={onMenuClick}
                            items={[
                                ...languageList.map((l) => {
                                  return { key: l.code, label: l.name }
                                })]
                            }/>
                        }
                    >
                        {language === 'zh' ? '中文' : 'English'}
                    </Dropdown.Button>
                    <RightButtonGroup>
                        <Button onClick={()=>{nav('/register')}}>{t("header.register")}</Button>
                        <Button onClick={()=>{nav('/signIn')}}>{t("header.signin")}</Button>
                    </RightButtonGroup>
                </Inner>
            </TopHeader>
            <MainHeader>
                <Link to={'/'}>
                    <AppLogo src={logo} alt="logo" />
                    <AppTitle> 
                        {t("header.title")}
                    </AppTitle>
                </Link>
                <SearchInput placeholder="情输入目的地，关键词" />
            </MainHeader>
            <MainMenu
                mode="horizontal"
                items={[
                    { key: "1", label: t("header.home_page") },
                    { key: "2", label: t("header.weekend") },
                    { key: "3", label: t("header.group") },
                    { key: "4", label: t("header.backpack") },
                    { key: "5", label: t("header.private") },
                    { key: "6", label: t("header.cruise") },
                    { key: "7", label: t("header.hotel") },
                    { key: "8", label: t("header.local") },
                    { key: "9", label: t("header.theme") },
                    { key: "10", label: t("header.custom") },
                    { key: "11", label: t("header.study") },
                    { key: "12", label: t("header.visa") },
                    { key: "13", label: t("header.enterprise") },
                    { key: "14", label: t("header.high_end") },
                    { key: "15", label: t("header.outdoor") },
                    { key: "16", label: t("header.insurance") },
                        ]}
                />
        </AppHeader>
    )
}