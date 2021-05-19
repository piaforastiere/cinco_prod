import React from 'react'
import { useTranslation } from "react-i18next";

const EmailVefication = () => {

    const { t } = useTranslation();
   
    return (
        <p className="mail">
            - {t('verify_email')}
        </p>
    )
}

export default EmailVefication
