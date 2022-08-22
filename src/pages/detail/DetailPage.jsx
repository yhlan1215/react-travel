import React from "react";
import { useParams } from 'react-router-dom'

export const DetailPage = () => {
    const { id } = useParams() 
    return<h1>具体路线,路线id:{id}</h1>
}