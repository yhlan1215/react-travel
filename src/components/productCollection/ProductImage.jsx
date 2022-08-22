import React from "react";
import { Image, Typography } from 'antd'
import { Link } from 'react-router-dom'

export const ProductImage = ({id,title,price,imageSrc,size}) => {
    return<Link to={`/detail/${id}`}>
        {size==='large' ? <Image src={imageSrc} width={500} height={285} alt=''/> : <Image src={imageSrc} width={240} height={120} alt=''/>}
        <Typography.Text>
            {title.slice(0,15)}
        </Typography.Text>
        <Typography>
            {price}起
        </Typography>
    </Link>
}