import React from "react";
import { Row, Col, Divider, Image } from 'antd'
import { ProductImage } from "./ProductImage";
import styled from "styled-components";

const Content = styled.div`
    margin-top: 30px;
    padding: 20px;
    background-color: white;
`
const SideImage = styled(Image)`
    width: 180px;
    display: block;
    margin-left: auto;
    margin-right: auto;
`

export const ProductCollection = ({title,sideImage,product}) => {
    return<Content>
        <Divider orientation="left">{title}</Divider>
        <Row>
            <Col span={4}>
                <SideImage src={sideImage}  alt=''/>
            </Col>
            <Col span={20}>
                <Row>
                    <Col span={12}>
                        <ProductImage
                            size='large'
                            id={product[0].id}
                            title={product[0].title}
                            price={product[0].price}
                            imageSrc={product[0].touristRoutePictures[0].url}/>
                    </Col>
                    <Col span={12}>
                        <Row>
                            <Col span={12}> 
                                <ProductImage
                                    id={product[1].id}
                                    title={product[1].title}
                                    price={product[1].price}
                                    imageSrc={product[1].touristRoutePictures[0].url}/>
                            </Col>
                            <Col span={12}> 
                                <ProductImage
                                    id={product[2].id}
                                    title={product[2].title}
                                    price={product[2].price}
                                    imageSrc={product[2].touristRoutePictures[0].url}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>  
                                <ProductImage
                                    id={product[3].id}
                                    title={product[3].title}
                                    price={product[3].price}
                                    imageSrc={product[3].touristRoutePictures[0].url}/>
                            </Col>
                            <Col span={12}>
                                <ProductImage
                                    id={product[4].id}
                                    title={product[4].title}
                                    price={product[4].price}
                                    imageSrc={product[4].touristRoutePictures[0].url}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}> 
                        <ProductImage
                            id={product[5].id}
                            title={product[5].title}
                            price={product[5].price}
                            imageSrc={product[5].touristRoutePictures[0].url}/>
                    </Col>
                    <Col span={6}>
                        <ProductImage
                            id={product[6].id}
                            title={product[6].title}
                            price={product[6].price}
                            imageSrc={product[6].touristRoutePictures[0].url}/>
                    </Col>
                    <Col span={6}>
                        <ProductImage
                            id={product[7].id}
                            title={product[7].title}
                            price={product[7].price}
                            imageSrc={product[7].touristRoutePictures[0].url}/>
                    </Col>
                    <Col span={6}>
                        <ProductImage
                            id={product[8].id}
                            title={product[8].title}
                            price={product[8].price}
                            imageSrc={product[8].touristRoutePictures[0].url}/>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Content>
}