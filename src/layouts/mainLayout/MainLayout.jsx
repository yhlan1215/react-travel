import React from "react";
import { Header, Footer } from './../../components'
import styled from "styled-components";

const PageContent = styled.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    height: auto;
`

export const MainLayout = ({ children }) => {
    return(
        <>
        <Header/>
            <PageContent>
                {children}
            </PageContent>
         <Footer/>
        </>
    )
}