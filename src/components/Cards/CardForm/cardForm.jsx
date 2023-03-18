import React, { useState } from 'react';

import { 
    StyledForm,
    StyledInput,
    StyledButton,
    StyledPlaceTitle,
    StyledPlaceBody,
    StyledInputWrapper,
} from './styled';
 
function CardForm({ create }) {

    const [todo, setTodo] = useState({title: '', body: ''});

    const addNewTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            ...todo, id: Date.now(),
        };
        create(newTodo);
        setTodo({title: '', body: ''});
    };

    const isButtonDisabled = todo.title;

  return (
    <StyledForm>
        <StyledInputWrapper>
            <StyledInput 
                value={todo.title}
                onChange={e => setTodo({...todo, title: e.target.value})}
            />
            <StyledPlaceTitle>Title</StyledPlaceTitle>
        </StyledInputWrapper>
        <StyledInputWrapper>
            <StyledInput 
                value={todo.body}
                onChange={e => setTodo({...todo, body: e.target.value})}
            />
            <StyledPlaceBody>Description</StyledPlaceBody>
        </StyledInputWrapper>
        <StyledButton
            onClick={addNewTodo}
            disabled={!isButtonDisabled}
        >
            Add
        </StyledButton>
    </StyledForm>
  );
};
 
export default CardForm;
 