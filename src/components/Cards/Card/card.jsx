import React from 'react';

import { Reorder, useDragControls } from "framer-motion";

import { 
    StyledCard,
    StyledHeading,
    StyledDesc,
    DeleteButton,
    DragButton,
    CardInner,
    DragWrapper
} from './styled';
 
function Card({ todo, remove, setIsShowEdit }) {

  const controls = useDragControls();

  const clickHandler = (e) => {
   
    controls.start(e);
  };

  return (
    <Reorder.Item
      as={StyledCard}
      value={todo}
      dragListener={false}
      dragControls={controls}
      whileDrag={{
        scale: 1.05,
        
      }}
    >
      <CardInner
      // onClick={() => setIsShowEdit(true)}
    >
      <DeleteButton 
        onClick={() => remove(todo)}
      />
      <StyledHeading>{todo.title}</StyledHeading>
      <StyledDesc>{todo.body}</StyledDesc>
      </CardInner>
      <DragWrapper>
          <DragButton 
            onPointerDown={clickHandler}
          />
        </DragWrapper>
    </Reorder.Item>
  );
};
 
export default Card;
 