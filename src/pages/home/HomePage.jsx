import { 
    SideMenu, 
    TravelCarousel, 
    ProductCollection 
} from '../../components';
import React from "react";
import { Row, Col, Typography } from 'antd'
import sideImage1 from '../../assets/images/sider_2019_12-09.png'
import sideImage2 from '../../assets/images/sider_2019_02-04.png'
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png'
import { productList1, productList2, productList3 } from './mockups';
import { useTranslation } from 'react-i18next';
import { MainLayout } from '../../layouts';

export const HomePage = () => {
    const {t} = useTranslation()
    return(
           <MainLayout>
            <Row>
                <Col span="6">
                <SideMenu/>
                </Col>
                <Col span="18">
                <TravelCarousel/>
                </Col>
            </Row>
            <ProductCollection
                title={<Typography.Title>{t('home_page.hot_recommended')}</Typography.Title>}
                sideImage={sideImage1}
                product={productList1}/>
            <ProductCollection
                title={<Typography.Title>{t('home_page.new_arrival')}</Typography.Title>}
                sideImage={sideImage2}
                product={productList2}/>
            <ProductCollection
                title={<Typography.Title>{t('home_page.domestic_travel')}</Typography.Title>}
                sideImage={sideImage3}
                product={productList3}/>
          </MainLayout>
    )
}