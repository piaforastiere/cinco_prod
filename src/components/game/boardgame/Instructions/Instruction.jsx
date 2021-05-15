import React from 'react'
import { useTranslation } from "react-i18next";

const Instruction = () => {

    const { t } = useTranslation();

    
    return (
        <div className="mark active" id="instructive">
            {t('instruc_mark')}
        </div>
    )
}

export default Instruction
