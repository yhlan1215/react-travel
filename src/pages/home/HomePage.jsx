import { 
    Footer, 
    Header, 
    SideMenu, 
    TravelCarousel, 
    ProductCollection 
} from '../../components';
import React from "react";
import './HomePage.css'
import { Row, Col, Typography } from 'antd'
import sideImage1 from '../../assets/images/sider_2019_12-09.png'
import sideImage2 from '../../assets/images/sider_2019_02-04.png'
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png'
import { productList1, productList2, productList3 } from './mockups';

export const HomePage = () => {
    return(
        <div>
            <Header/>
            <div className='page-content'>
            <Row>
                <Col span="6">
                <SideMenu/>
                </Col>
                <Col span="18">
                <TravelCarousel/>
                </Col>
            </Row>
            <ProductCollection
                title={<Typography.Title>爆款推荐</Typography.Title>}
                sideImage={sideImage1}
                product={productList1}/>
            <ProductCollection
                title={<Typography.Title>新品上市</Typography.Title>}
                sideImage={sideImage2}
                product={productList2}/>
            <ProductCollection
                title={<Typography.Title>国内游推荐</Typography.Title>}
                sideImage={sideImage3}
                product={productList3}/>
            </div>
            <Footer/>
            </div>
    )
}