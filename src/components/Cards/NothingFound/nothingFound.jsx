import React from 'react';
 
import { StyledNothing, NothingHeading, StyledDeer } from './styled';

function NothingFound() {
  return (
    <StyledNothing>
        <NothingHeading>Nothing was found!</NothingHeading>
        <StyledDeer />
    </StyledNothing>
  );
};
 
export default NothingFound;
 