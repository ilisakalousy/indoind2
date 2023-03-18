import React from 'react';
 
import {
    PopupBody,
    PopupWrapper,
    StyledClose
} from "./styled"

import CardForm from '../../Cards/CardForm/cardForm';

function CardPopup({ isShow, setIsShow , setTodos, create }) {
  return isShow ? (
    <PopupWrapper
        onClick={() => setIsShow(false)}
    >
        <PopupBody
            onClick={e => e.stopPropagation()}
        >
            <CardForm 
                setTodos={setTodos}
                create={create}
            />
            <StyledClose 
                onClick={() => setIsShow(false)}
            />
        </PopupBody>
    </PopupWrapper>
  ) : null;
};
 
export default CardPopup;
 