import React from "react";
import { Menu } from 'antd'
import { sideMenuList } from './mockup'
import './SideMenu.css'

export const SideMenu = () => {
    return(
        <Menu
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