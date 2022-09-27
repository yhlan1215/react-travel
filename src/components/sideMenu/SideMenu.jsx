import React from "react";
import { Menu } from 'antd'
import { sideMenuList } from './mockup'
import styled from "styled-components";

const MenuSide = styled(Menu)`
    width: 256px;
    border: 5px solid #91c0f0 !important;
`

export const SideMenu = () => {
    return(
        <MenuSide
        mode="vertical"
        className="side-menu" 
        items={
            sideMenuList.map((m)=>(
                {
                    label:m.title,
                    key:m.title,
                    children: m.subMenu.map((ms)=>(
                        {
                            label:ms.title,
                            key:ms.title,
                            children:ms.subMenu.map((mss)=>(
                                {
                                    label:mss,
                                    key:mss
                                }
                            ))
                        }
                    ))
                }
            ))
        }/>
    )
}