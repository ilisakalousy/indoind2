import React, { useState } from 'react';

import { StyledList } from './styled';
import Card from '../Card/card';
import { Reorder } from 'framer-motion';
import EditPopup from '../../popups/EditPopup/editPopup';

function CardList({ todos, removeTodo, setTodos, isShowEdit, setIsShowEdit }) {

  return (
    <Reorder.Group 
      as={StyledList}
      axis="y"
      values={todos}
      onReorder={setTodos}
    >
        {todos &&
         todos.map((todo) => 
          <Card 
            key={todo.id}
            todo={todo}
            remove={removeTodo}
            setIsShowEdit={setIsShowEdit}
          />  
         )}
         <EditPopup 
                isShowEdit={isShowEdit} 
                setIsShowEdit={setIsShowEdit}
            />
    </Reorder.Group>
  ) 
};
 
export default CardList;
 