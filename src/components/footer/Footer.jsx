import React from "react";
import { Layout, Typography } from 'antd'
import { useTranslation } from "react-i18next";

export const Footer = () => {
    const {t} = useTranslation()
    return(
        <Layout.Footer>
            <Typography.Title>
                {t('footer.detail')}
            </Typography.Title>
        </Layout.Footer>
    )
}