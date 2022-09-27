import React from "react";
import { useParams } from 'react-router-dom'
import { UserLayout } from "../../layouts";

export const DetailPage = () => {
    const { id } = useParams() 
    return(
        <UserLayout>
            <h1>具体路线,路线id:{id}</h1>
        </UserLayout>
    )
}