import React from 'react';

import {
    PopupBody,
    PopupWrapper
} from "./styled"
 
function EditPopup({ isShowEdit, setIsShowEdit }) {
  return isShowEdit ? (
    <PopupWrapper
     onClick={() => setIsShowEdit(false)}
    >
        <PopupBody
            onClick={e => e.stopPropagation()}
        >  
        <input 
           
        />
        </PopupBody>
    </PopupWrapper>
  ): null;
};
 
export default EditPopup;
 