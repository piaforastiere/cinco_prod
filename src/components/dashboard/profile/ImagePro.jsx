import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from "react-i18next";
import { editProfilePhotoAction } from '../../../redux/UserDucks'
import { FaCamera } from "react-icons/fa";
import { ChangePicContainer, SpinnerPic } from '../../ui/Dashboard';

const ImagePro = () => {

    const loadingPhoto = useSelector(store => store.user.loadingPhoto)

    const dispatch = useDispatch()
    const { t } = useTranslation();
    
    const [ error, setError ] = useState(false)

    const selectFile = img => {
        
        const image = img.target.files[0]
        if (image === undefined) {
            console.log('no selection');
            return
        }
        

        if (image.type === 'image/jpeg' || image.type === 'image/png') {
            dispatch(editProfilePhotoAction(image))
            setError(false)
        } else {
            setError(true)
        }
        
    }

    return (
        <ChangePicContainer>
                                                
        {
            loadingPhoto ? (
                 <SpinnerPic>
                    <div className="box">
                        <div className="loader6"></div>
                    </div>
                 </SpinnerPic>
             ) : (
                 <>
                    <input 
                        type="file" 
                        className="custom-file-input" 
                        id="validatedCustomFile" 
                        onChange={ e => selectFile(e)}
                        required 
                        style={{display:'none'}}
                        />
                    <label 
                        htmlFor="validatedCustomFile"
                        >
                            {t('change')}
                    </label>
                    <div className="icon"><FaCamera /> </div>
                 </>
            )
        }
                                        
        </ChangePicContainer>
    )
}

export default ImagePro
